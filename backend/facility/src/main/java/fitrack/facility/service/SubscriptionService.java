package fitrack.facility.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import fitrack.facility.client.AuthClient;
import fitrack.facility.entity.Promotion;
import fitrack.facility.entity.Subscription;
import fitrack.facility.entity.enums.SubscriptionStatus;
import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.User;
import fitrack.facility.repository.PromotionRepository;
import fitrack.facility.repository.SportFacilityRepository;
import fitrack.facility.repository.SubscriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

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
                .orElseThrow(() -> new RuntimeException("Subscription non trouvée"));
        updateStatusIfNeeded(subscription);
        return subscription;
    }

    @Override
    public Subscription createSubscription(Subscription subscription, String token, String priceType, Long promotionId) {
        // 🔐 Authentification & autorisation
        User user = extractUserFromToken(token);

        if (!"USER".equalsIgnoreCase(user.getRole())) {
            throw new RuntimeException("Seuls les utilisateurs avec le rôle USER peuvent créer un abonnement.");
        }

        // 🎯 Vérification de la facility
        SportFacility facility = validateFacility(subscription.getSportFacility().getId());
        ///
        LocalDate startDate = (subscription.getStartDate() != null) ? subscription.getStartDate() : LocalDate.now();
        subscription.setStartDate(startDate);

        // 📅 Vérification de conflits de date
        checkSubscriptionDateConflict(facility, subscription.getStartDate());

        // 🧮 Détermination du prix et de la durée
        float selectedPrice = determinePriceAndSetType(subscription, facility, priceType);
        int monthsToAdd = "premium".equalsIgnoreCase(priceType) ? 3 : 1;

        // 🎟️ Application de la promotion si applicable
        if (promotionId != null) {
            selectedPrice = applyPromotionIfValid(promotionId, facility, subscription, selectedPrice);
        }

        // 🎯 Vérifie les points XP (simulation)
        final int xpPoints = 100;
        int priceInt = Math.round(selectedPrice);
        if (xpPoints < priceInt) {
            throw new RuntimeException("xpPoints insuffisants pour cet abonnement.");
        }
        int updatedXp = xpPoints - priceInt;
        System.out.println("XP après achat : " + updatedXp);

        // 💾 Finalisation des données d'abonnement

        subscription.setPricePaid(selectedPrice);

        subscription.setEndDate(startDate.plusMonths(monthsToAdd));
        subscription.setCreatedAt(LocalDate.now());
        subscription.setOwnerEmail(user.getUsername());

        // 🔑 Génération SubId si besoin
        if (subscription.getSubId() == null || subscription.getSubId().isEmpty()) {
            subscription.setSubId(generateSubId());
        }

        // 🔄 Statut dynamique
        subscription.setStatus(evaluateStatus(subscription));

        return repository.save(subscription);
    }

    @Override
    public Subscription updateSubscription(Subscription subscription, String token) {
        User user = extractUserFromToken(token);

        if (!"USER".equalsIgnoreCase(user.getRole())) {
            throw new RuntimeException("Seuls les utilisateurs avec le rôle USER peuvent modifier un abonnement.");
        }

        subscription.setStatus(evaluateStatus(subscription));
        return repository.save(subscription);
    }

    @Override
    public void deleteSubscription(Long id, String token) {
        Subscription sub = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Subscription not found"));

        // Vérifier si le statut est EXPIRÉ
        if (!SubscriptionStatus.EXPIRED.equals(sub.getStatus())) {
            throw new RuntimeException("Only expired subscriptions can be deleted.");
        }

        // Vérifier si l'utilisateur est FACILITY_MANAGER
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        if (!"FACILITY_MANAGER".equals(user.getRole())) {
            throw new RuntimeException("Only FACILITY_MANAGER can delete subscriptions.");
        }

        repository.deleteById(id);
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
                .orElseThrow(() -> new RuntimeException("Facility non trouvée"));

        if (!facility.isAvailability()) {
            throw new RuntimeException("La facility n'est pas disponible actuellement.");
        }

        long currentSubscriptions = repository.countBySportFacility(facility);
        if (currentSubscriptions >= facility.getMaxSubscription()) {
            throw new RuntimeException("La facility a atteint le nombre maximum de souscriptions.");
        }

        return facility;
    }

    private void checkSubscriptionDateConflict(SportFacility facility, LocalDate desiredStartDate) {
        List<Subscription> existingSubscriptions = repository.findBySportFacility(facility);

        for (Subscription sub : existingSubscriptions) {
            if (desiredStartDate != null && !desiredStartDate.isAfter(sub.getEndDate())) {
                throw new RuntimeException("Vous avez déjà une souscription active ou prévue pour cette période.");
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
                .orElseThrow(() -> new RuntimeException("Promotion non trouvée"));

        if (!promotion.isActive()) {
            throw new RuntimeException("La promotion est expirée.");
        }

        if (!facility.getId().equals(promotion.getSportFacility().getId())) {
            throw new RuntimeException("La promotion ne correspond pas à la facility de l'abonnement.");
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
        // Ne jamais changer une souscription déjà annulée
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
            throw new RuntimeException("Seuls les utilisateurs avec le rôle USER peuvent annuler une souscription.");
        }

        Subscription subscription = repository.findById(subId)
                .orElseThrow(() -> new RuntimeException("Subscription not found"));

        if (!SubscriptionStatus.ACTIVE.equals(subscription.getStatus())) {
            throw new RuntimeException("Seules les souscriptions actives peuvent être annulées.");
        }

        if (!subscription.getOwnerEmail().equals(user.getUsername())) {
            throw new RuntimeException("Vous ne pouvez annuler que vos propres souscriptions.");
        }

        if (subscription.getStartDate().isBefore(LocalDate.now())) {
            throw new RuntimeException("Vous ne pouvez pas annuler une souscription qui a déjà commencé.");
        }

        subscription.setStatus(SubscriptionStatus.CANCELLED);
        repository.save(subscription);

        // 🔁 Simuler le remboursement d'XP
        int refundedXP = Math.round(subscription.getPricePaid());
        int initialXp = 100;
        int updatedXp = initialXp + refundedXP;
        System.out.println("XP après annulation : " + updatedXp);

        return refundedXP;
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
                    System.out.println("🔔 Subscription désactivée : ID = " + subscription.getId());
                }
            }
        });
    }
    public Map<String, Object> getFacilitySubscriptionStats(Long facilityId) {
        SportFacility facility = facilityRepository.findById(facilityId)
                .orElseThrow(() -> new RuntimeException("Facility not found"));

        List<Subscription> subscriptions = repository.findBySportFacility(facility);

        long total = subscriptions.size();
        long active = subscriptions.stream().filter(s -> s.getStatus().name().equals("ACTIVE")).count();
        long expired = subscriptions.stream().filter(s -> s.getStatus().name().equals("EXPIRED")).count();
        long cancelled = subscriptions.stream().filter(s -> s.getStatus().name().equals("CANCELLED")).count();
        double totalPaid = subscriptions.stream().mapToDouble(Subscription::getPricePaid).sum();
        double avgPaid = total > 0 ? totalPaid / total : 0;

        Map<String, Object> stats = new HashMap<>();
        stats.put("total", total);
        stats.put("active", active);
        stats.put("expired", expired);
        stats.put("cancelled", cancelled);

        return stats;
    }
    public Map<String, Double> getMonthlyRevenue() {
        Map<String, Double> monthlyRevenue = new HashMap<>();

        List<Subscription> subs = repository.findAll();
        for (Subscription sub : subs) {
            if (sub.getStatus() != SubscriptionStatus.CANCELLED) {
                String month = sub.getStartDate().getMonth().toString().substring(0, 3);
                monthlyRevenue.put(month, monthlyRevenue.getOrDefault(month, 0.0) + sub.getPricePaid());
            }
        }

        return monthlyRevenue;
    }

    public Map<String, Double> getQuarterlyRevenue() {
        Map<String, Double> quarterlyRevenue = new HashMap<>();

        List<Subscription> subs = repository.findAll();
        for (Subscription sub : subs) {
            if (sub.getStatus() != SubscriptionStatus.CANCELLED) {
                int month = sub.getStartDate().getMonthValue();
                String quarter = switch (month) {
                    case 1, 2, 3 -> "Q1";
                    case 4, 5, 6 -> "Q2";
                    case 7, 8, 9 -> "Q3";
                    default -> "Q4";
                };
                quarterlyRevenue.put(quarter, quarterlyRevenue.getOrDefault(quarter, 0.0) + sub.getPricePaid());
            }
        }

        return quarterlyRevenue;
    }





}
