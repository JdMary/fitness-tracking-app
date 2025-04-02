package fitrack.facility.service;

import fitrack.facility.entity.Promotion;

import java.util.List;

public interface IPromotionService {
    List<Promotion> retrieveAllPromotions();

    Promotion addPromotion(Promotion promotion);

    Promotion updatePromotion(Promotion promotion);

    Promotion retrievePromotion(Long id);

    void removePromotion(Long id);
    Promotion activatePromotion(Long id);
    Promotion deactivatePromotion(Long id);
    List<Promotion> getActivePromotions();
    float applyBestPromotion(Long facilityId, float basePrice);
    List<Promotion> findExpiringPromotions(int days);
}
