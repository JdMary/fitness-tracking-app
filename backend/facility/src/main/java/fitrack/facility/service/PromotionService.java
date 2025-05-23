package fitrack.facility.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import fitrack.facility.client.AuthClient;
import fitrack.facility.entity.Promotion;
import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.User;
import fitrack.facility.repository.EventRepository;
import fitrack.facility.repository.PromotionRepository;
import fitrack.facility.repository.SportFacilityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PromotionService implements IPromotionService {

    private final PromotionRepository repository;
    private final AuthClient authClient;
    private final ObjectMapper objectMapper;
    private final SportFacilityRepository facilityRepository;

    @Override
    public List<Promotion> getAllPromotions() {
        List<Promotion> promotions = repository.findAll();
        promotions.forEach(this::updatePromotionStatusIfNeeded);
        return promotions;
    }

    @Override
    public Promotion getPromotionById(Long id) {
        Promotion promotion = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Promotion not found"));
        updatePromotionStatusIfNeeded(promotion);
        return promotion;
    }

    @Override
    public Promotion createPromotion(Promotion promotion, String token) {
        User user = getUserFromToken(token);

        if (!"FACILITY_MANAGER".equalsIgnoreCase(user.getRole())) {
            throw new RuntimeException("Only FACILITY_MANAGER users can create a promotion.");
        }

        SportFacility facility = facilityRepository.findById(promotion.getSportFacility().getId())
                .orElseThrow(() -> new RuntimeException("Facility not found."));

        promotion.setSportFacility(facility);

        if (promotion.getEndDate().isBefore(promotion.getStartDate())) {
            throw new RuntimeException("The end date must be after the start date..");
        }

        if (promotion.getDiscountPercentage() <= 0 || promotion.getDiscountPercentage() > 100) {
            throw new RuntimeException("The discount percentage must be between 1 and 100.");
        }
        if (repository.existsByPromoCode(promotion.getPromoCode())) {
            throw new RuntimeException("Promotion promo code already exists!");
        }

        promotion.setActive(promotion.getEndDate().isAfter(LocalDate.now()));

        return repository.save(promotion);
    }

    @Override
    public Promotion updatePromotion(Promotion promotion, String token) {
        User user = getUserFromToken(token);

        if (!"FACILITY_MANAGER".equalsIgnoreCase(user.getRole())) {
            throw new RuntimeException("Only FACILITY_MANAGER users can edit a promotion.");
        }
        if (repository.existsByPromoCode(promotion.getPromoCode())) {
            throw new RuntimeException("Promotion promo code already exists!");
        }

        promotion.setActive(promotion.getEndDate().isAfter(LocalDate.now()));
        return repository.save(promotion);
    }

    @Override
    public void deletePromotion(Long id, String token) {
        User user = getUserFromToken(token);

        if (!"FACILITY_MANAGER".equalsIgnoreCase(user.getRole())) {
            throw new RuntimeException("Only FACILITY_MANAGER users can delete a promotion.");
        }


        repository.deleteById(id);
    }

    @Override
    public List<Promotion> getActivePromotions() {
        return repository.findByActiveTrue();
    }

    private void updatePromotionStatusIfNeeded(Promotion promotion) {
        boolean shouldBeActive = promotion.getEndDate().isAfter(LocalDate.now());
        if (promotion.isActive() != shouldBeActive) {
            promotion.setActive(shouldBeActive);
            repository.save(promotion);
        }
    }

    private User getUserFromToken(String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        return objectMapper.convertValue(response, User.class);
    }

    @Scheduled(cron = "0 0 0 * * *")
    public void disableExpiredPromotions() {
        List<Promotion> promotions = repository.findAll();

        promotions.forEach(promotion -> {
            if (promotion.getEndDate().isBefore(LocalDate.now()) && promotion.isActive()) {
                promotion.setActive(false);
                repository.save(promotion);
                System.out.println("🔔 Promotion disabled: ID = " + promotion.getId());
            }
        });
    }
    public List<String> getFacilityNamesWithPromotions() {
        return repository.findDistinctFacilityNames();
    }
    public List<Promotion> getPromotionsByFacility(String name) {
        return repository.findBySportFacility_Name(name);
    }
    public List<Promotion> searchPromotionsByFacilityName(String name) {
        return repository.searchBySportFacilityName(name);
    }



}
