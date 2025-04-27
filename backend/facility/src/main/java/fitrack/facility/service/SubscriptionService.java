package fitrack.facility.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import fitrack.facility.client.AuthClient;
import fitrack.facility.dto.FacilityMonthlyRevenueDTO;
import fitrack.facility.entity.Promotion;
import fitrack.facility.entity.Subscription;
import fitrack.facility.entity.enums.SubscriptionStatus;
import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.User;
import fitrack.facility.repository.PromotionRepository;
import fitrack.facility.repository.SportFacilityRepository;
import fitrack.facility.repository.SubscriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
@RequiredArgsConstructor
public class SubscriptionService implements ISubscriptionService {

    private final SubscriptionRepository repository;
    private final SportFacilityRepository facilityRepository;
    private final PromotionRepository promotionRepository;
    private final AuthClient authClient;
    private final ObjectMapper objectMapper;



    @Override
    public List<Subscription> getAllSubscriptions() {
        List<Subscription> subscriptions = repository.findAll();
        subscriptions.forEach(this::updateStatusIfNeeded);
        return subscriptions;
    }

    @Override
    public Subscription getSubscriptionById(Long id) {
        Subscription subscription = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Subscription not found"));
        updateStatusIfNeeded(subscription);
        return subscription;
    }

    @Override
    public Subscription createSubscription(Subscription subscription, String token, String priceType, Long promotionId) {
        User user = extractUserFromToken(token);
        System.out.println("sport facility: " + subscription.getSportFacility());
        if (subscription.getSportFacility() == null || subscription.getSportFacility().getId() == null) {
            throw new RuntimeException("Sport facility is required for creating a subscription.");
        }
        if (!"USER".equalsIgnoreCase(user.getRole())) {
            throw new RuntimeException("Only users with the USER role can create a subscription.");
        }

        SportFacility facility = validateFacility(subscription.getSportFacility().getId());

        LocalDate startDate = (subscription.getStartDate() != null) ? subscription.getStartDate() : LocalDate.now();
        subscription.setStartDate(startDate);

        checkSubscriptionDateConflict(facility, startDate, user.getUsername());


        float selectedPrice = determinePriceAndSetType(subscription, facility, priceType);
        int monthsToAdd = "premium".equalsIgnoreCase(priceType) ? 3 : 1;

        if (promotionId != null) {
            selectedPrice = applyPromotionIfValid(promotionId, facility, subscription, selectedPrice);
        }

        User u = authClient.extractUserDetails(token).getBody();
        int coins = u.getCoins();
        int priceInt = Math.round(selectedPrice);
        if (coins < priceInt) {
            throw new RuntimeException("Insufficient coins for this subscription.");
        }

        ResponseEntity<String> re = authClient.updateCoins(user.getUsername(), priceInt, 1);
        System.out.println("Coins after purchase: " + (coins - priceInt));

        subscription.setSportFacility(facility);
        facility.getSubscriptions().add(subscription);
        subscription.setPricePaid(selectedPrice);
        subscription.setEndDate(startDate.plusMonths(monthsToAdd));
        subscription.setCreatedAt(LocalDate.now());
        subscription.setOwnerEmail(user.getUsername());

        if (subscription.getSubId() == null || subscription.getSubId().isEmpty()) {
            subscription.setSubId(generateSubId());
        }

        subscription.setStatus(evaluateStatus(subscription));

        return repository.save(subscription);
    }


    @Override
    public Subscription updateSubscription(Subscription subscription, String token) {
        User user = extractUserFromToken(token);

        if (!"USER".equalsIgnoreCase(user.getRole())) {
            throw new RuntimeException("Only users with the USER role can update a subscription.");
        }

        subscription.setStatus(evaluateStatus(subscription));
        return repository.save(subscription);
    }

    @Override
    public void deleteSubscription(Long id, String token) {
        Subscription sub = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Subscription not found"));
        if (!(SubscriptionStatus.EXPIRED.equals(sub.getStatus()) || SubscriptionStatus.CANCELLED.equals(sub.getStatus()))) {
            throw new RuntimeException("Only expired or cancelled subscriptions can be deleted.");
        }
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        if (!"FACILITY_MANAGER".equals(user.getRole())) {
            throw new RuntimeException("Only FACILITY_MANAGER can delete subscriptions.");
        }
        repository.deleteById(id);
    }
    public void deleteSubscriptionssByEmail(String ownerEmail) {
        List<Subscription> subscriptions = repository.findByOwnerEmail(ownerEmail);

        if (subscriptions.isEmpty()) {
            throw new RuntimeException("No subscriptions found for the provided email.");
        }

        subscriptions.forEach(subscription -> {
            if (!SubscriptionStatus.EXPIRED.equals(subscription.getStatus())) {
                throw new RuntimeException("Only expired subscriptions can be deleted.");
            }
            repository.delete(subscription);
        });
    }

    @Override
    public List<Subscription> getUserSubscriptions(String token) {
        User user = extractUserFromToken(token);
        List<Subscription> subscriptions = repository.findByOwnerEmail(user.getUsername());
        subscriptions.forEach(this::updateStatusIfNeeded);
        return subscriptions;
    }


    private User extractUserFromToken(String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        return objectMapper.convertValue(response, User.class);
    }

    private SportFacility validateFacility(Long facilityId) {
        SportFacility facility = facilityRepository.findById(facilityId)
                .orElseThrow(() -> new RuntimeException("Facility not found"));

        if (!facility.isAvailability()) {
            throw new RuntimeException("The facility is not available at the moment.");
        }

        long currentSubscriptions = repository.countBySportFacilityAndStatus(facility, SubscriptionStatus.ACTIVE);

        if (currentSubscriptions >= facility.getMaxSubscription()) {
            throw new RuntimeException("The facility has reached the maximum number of subscriptions.");
        }


        return facility;
    }

    private void checkSubscriptionDateConflict(SportFacility facility, LocalDate desiredStartDate, String userEmail) {
        List<Subscription> existingSubscriptions = repository.findBySportFacility(facility);

        for (Subscription sub : existingSubscriptions) {
            if (sub.getStatus() == SubscriptionStatus.CANCELLED) {
                continue;
            }
            if (!sub.getOwnerEmail().equals(userEmail)) {
                continue;
            }
            if (desiredStartDate != null && !desiredStartDate.isAfter(sub.getEndDate())) {
                throw new RuntimeException("You already have an active or scheduled subscription for this period..");
            }
        }
    }

    private float determinePriceAndSetType(Subscription subscription, SportFacility facility, String priceType) {
        if ("premium".equalsIgnoreCase(priceType)) {
            subscription.setPriceType("premium");
            return facility.getPremiumPrice();
        } else {
            subscription.setPriceType("normal");
            return facility.getNormalPrice();
        }
    }

    private float applyPromotionIfValid(Long promotionId, SportFacility facility, Subscription subscription, float selectedPrice) {
        Promotion promotion = promotionRepository.findById(promotionId)
                .orElseThrow(() -> new RuntimeException("Promotion not found"));

        if (!promotion.isActive()) {
            throw new RuntimeException("The promotion has expired.");
        }

        if (!facility.getId().equals(promotion.getSportFacility().getId())) {
            throw new RuntimeException("The promotion does not match the facility of the subscription.");
        }

        float discount = promotion.getDiscountPercentage();
        subscription.setPromotion(promotion);

        return selectedPrice - (selectedPrice * discount / 100);
    }

    private String generateSubId() {
        return "SUB-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
    }

    private SubscriptionStatus evaluateStatus(Subscription subscription) {
        return subscription.getEndDate().isBefore(LocalDate.now())
                ? SubscriptionStatus.EXPIRED
                : SubscriptionStatus.ACTIVE;
    }

    private void updateStatusIfNeeded(Subscription subscription) {

        if (subscription.getStatus() == SubscriptionStatus.CANCELLED) {
            return;
        }

        SubscriptionStatus currentStatus = evaluateStatus(subscription);
        if (subscription.getStatus() != currentStatus) {
            subscription.setStatus(currentStatus);
            repository.save(subscription);
        }
    }

    public int cancelSubscription(Long subId, String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        if (!"USER".equals(user.getRole())) {
            throw new RuntimeException("Only users with the USER role can cancel a subscription.");
        }

        Subscription subscription = repository.findById(subId)
                .orElseThrow(() -> new RuntimeException("Subscription not found"));

        if (!SubscriptionStatus.ACTIVE.equals(subscription.getStatus())) {
            throw new RuntimeException("Only active subscriptions can be cancelled.");
        }

        if (!subscription.getOwnerEmail().equals(user.getUsername())) {
            throw new RuntimeException("You can only cancel your own subscriptions.");
        }

        if (subscription.getStartDate().isBefore(LocalDate.now())) {
            throw new RuntimeException("You cannot cancel a subscription that has already started.");
        }

        subscription.setStatus(SubscriptionStatus.CANCELLED);
        repository.save(subscription);


        int refundedcoins = Math.round(subscription.getPricePaid());
        ResponseEntity<?> re = authClient.updateCoins(user.getUsername(), refundedcoins, 2);
        System.out.println("Coins after cancellation : " + refundedcoins);

        return refundedcoins;
    }
    @Scheduled(cron = "0 0 0 * * *")
    public void ExpiredSubscription()
    {
        List<Subscription> subscriptions = repository.findAll();
        subscriptions.forEach(subscription -> {
            if(subscription.getStatus() != SubscriptionStatus.CANCELLED)
            {
                SubscriptionStatus newStatus = subscription.getEndDate().isBefore(LocalDate.now()) ? SubscriptionStatus.EXPIRED : SubscriptionStatus.ACTIVE ;
                if (subscription.getStatus() != newStatus)
                {
                    subscription.setStatus(newStatus);
                    repository.save(subscription);
                    System.out.println("Subscription désactivée : ID = " + subscription.getId());
                }
            }
        });
    }

    public List<Subscription> searchUserSubscriptions(String keyword, String token) {
        User user = extractUserFromToken(token);
        return repository.searchByKeywordAndOwner(user.getUsername(), keyword);
    }
    public List<Subscription> searchSubscriptions(String keyword) {

        return repository.searchByOwnerEmail( keyword);
    }
    public List<FacilityMonthlyRevenueDTO> getMonthlyRevenueByFacility() {
        List<Object[]> results = repository.calculateMonthlyRevenueByFacility();
        List<FacilityMonthlyRevenueDTO> revenues = new ArrayList<>();

        for (Object[] result : results) {
            String facilityName = (String) result[0];
            String month = (String) result[1];
            Double totalRevenue = (Double) result[2];
            revenues.add(new FacilityMonthlyRevenueDTO(facilityName, month, totalRevenue));
        }

        return revenues;
    }







    public void deleteSubscriptionsByEmail(String ownerEmail) {
        List<Subscription> subscriptions = repository.findByOwnerEmail(ownerEmail);

        if (subscriptions.isEmpty()) {
            throw new RuntimeException("No subscriptions found for the provided email.");
        }

        subscriptions.forEach(subscription -> {
            if (!SubscriptionStatus.EXPIRED.equals(subscription.getStatus())) {
                throw new RuntimeException("Only expired subscriptions can be deleted.");
            }
            repository.delete(subscription);
        });
    }



}
