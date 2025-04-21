package fitrack.facility.service;

import fitrack.facility.entity.Promotion;

import java.util.List;

public interface IPromotionService {
    List<Promotion> getAllPromotions();
    Promotion getPromotionById(Long id);
    Promotion createPromotion(Promotion promotion, String token);
    Promotion updatePromotion(Promotion promotion, String token);
    void deletePromotion(Long id, String token);
    List<Promotion> getActivePromotions();
    ////////////
    //Promotion activatePromotion(Long id);
    //Promotion deactivatePromotion(Long id);
    //float applyBestPromotion(Long facilityId, float basePrice);
    //List<Promotion> findExpiringPromotions(int days);
}
