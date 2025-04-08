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
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SubscriptionService implements ISubscriptionService {

    private final SubscriptionRepository repository;
    private final SportFacilityRepository facilityRepository;
    private final AuthClient authClient;
    private final ObjectMapper objectMapper;
    private  final PromotionRepository promotionRepository;


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
        // ✅ Récupérer les détails utilisateur depuis le token
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        if (!"USER".equalsIgnoreCase(user.getRole())) {
            throw new RuntimeException("Seuls les utilisateurs avec le rôle USER peuvent créer un abonnement.");
        }

        // ✅ Vérifier la SportFacility
        SportFacility facility = facilityRepository.findById(subscription.getSportFacility().getId())
                .orElseThrow(() -> new RuntimeException("Facility non trouvée"));

        if (!facility.isAvailability()) {
            throw new RuntimeException("La facility n'est pas disponible actuellement.");
        }

        long currentSubscriptions = repository.countBySportFacility(facility);
        if (currentSubscriptions >= facility.getMaxSubscription()) {
            throw new RuntimeException("La facility a atteint le nombre maximum de souscriptions.");
        }

        // ✅ Simuler les xpPoints (temporaire)
        int xpPoints = 100;

        // ✅ Choix du prix dynamique + enregistrement du type
        float selectedPrice;
        int monthsToAdd;
        if ("premium".equalsIgnoreCase(priceType)) {
            selectedPrice = facility.getPremiumPrice();
            subscription.setPriceType("premium");
            monthsToAdd = 3;
        } else {
            selectedPrice = facility.getNormalPrice();
            subscription.setPriceType("normal");
            monthsToAdd = 1;
        }

        // ✅ Application de la promotion si elle existe
        if (promotionId != null) {
            Promotion promotion = promotionRepository.findById(promotionId)
                    .orElseThrow(() -> new RuntimeException("Promotion non trouvée"));

            if (!promotion.isActive()) {
                throw new RuntimeException("La promotion est expirée.");
            }

            if (!facility.getId().equals(promotion.getSportFacility().getId())) {
                throw new RuntimeException("La promotion ne correspond pas à la facility de l'abonnement.");
            }

            float discount = promotion.getDiscountPercentage();
            selectedPrice -= (selectedPrice * discount / 100);
            subscription.setPromotion(promotion);
        }

        // ✅ Vérifier les xpPoints disponibles après application promo
        if (xpPoints < selectedPrice) {
            throw new RuntimeException("xpPoints insuffisants pour cet abonnement.");
        }

        subscription.setPricePaid(selectedPrice);

        // ✅ Set metadata
        LocalDate now = LocalDate.now();
        subscription.setStartDate(now);
        subscription.setEndDate(now.plusMonths(monthsToAdd));
        subscription.setCreatedAt(now);
        subscription.setOwnerEmail(user.getUsername());

        if (subscription.getSubId() == null || subscription.getSubId().isEmpty()) {
            String randomId = "SUB-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
            subscription.setSubId(randomId);
        }

        // ✅ Déterminer et sauvegarder le statut dynamique
        subscription.setStatus(evaluateStatus(subscription));

        return repository.save(subscription);
    }

    @Override
    public Subscription updateSubscription(Subscription subscription, String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        if (!"USER".equalsIgnoreCase(user.getRole())) {
            throw new RuntimeException("Seuls les utilisateurs avec le rôle USER peuvent modifier un abonnement.");
        }

        subscription.setStatus(evaluateStatus(subscription));

        return repository.save(subscription);
    }

    @Override
    public void deleteSubscription(Long id, String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        if (!"USER".equalsIgnoreCase(user.getRole())) {
            throw new RuntimeException("Seuls les utilisateurs avec le rôle USER peuvent supprimer un abonnement.");
        }

        repository.deleteById(id);
    }

    @Override
    public List<Subscription> getUserSubscriptions(String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        List<Subscription> subscriptions = repository.findByOwnerEmail(user.getUsername());
        subscriptions.forEach(this::updateStatusIfNeeded);
        return subscriptions;
    }

    // ✅ Vérifie et met à jour le status si nécessaire
    private void updateStatusIfNeeded(Subscription subscription) {
        SubscriptionStatus currentStatus = evaluateStatus(subscription);
        if (subscription.getStatus() != currentStatus) {
            subscription.setStatus(currentStatus);
            repository.save(subscription);
        }
    }

    // ✅ Évalue le status de la souscription dynamiquement
    private SubscriptionStatus evaluateStatus(Subscription subscription) {
        return subscription.getEndDate().isBefore(LocalDate.now())
                ? SubscriptionStatus.EXPIRED
                : SubscriptionStatus.ACTIVE;
    }
}
