package fitrack.facility.controller;

import fitrack.facility.entity.Promotion;
import fitrack.facility.service.PromotionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/promotion")
@RequiredArgsConstructor
public class PromotionController {

    private final PromotionService service;

    // ✅ 1. Créer une promotion (FACILITY_MANAGER)
    @PostMapping
    public ResponseEntity<Promotion> createPromotion(@RequestBody Promotion promotion,
                                                     @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.createPromotion(promotion, token));
    }

    // ✅ 2. Récupérer toutes les promotions
    @GetMapping
    public ResponseEntity<List<Promotion>> getAllPromotions() {
        return ResponseEntity.ok(service.getAllPromotions());
    }

    // ✅ 3. Récupérer une promotion par ID
    @GetMapping("/{id}")
    public ResponseEntity<Promotion> getPromotionById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getPromotionById(id));
    }

    // ✅ 4. Modifier une promotion (FACILITY_MANAGER)
    @PutMapping("/{id}")
    public ResponseEntity<Promotion> updatePromotion(@PathVariable Long id,
                                                     @RequestBody Promotion promotion,
                                                     @RequestHeader("Authorization") String token) {
        promotion.setId(id);
        return ResponseEntity.ok(service.updatePromotion(promotion, token));
    }

    // ✅ 5. Supprimer une promotion (FACILITY_MANAGER)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePromotion(@PathVariable Long id,
                                                @RequestHeader("Authorization") String token) {
        service.deletePromotion(id, token);
        return ResponseEntity.noContent().build();
    }

    // ✅ 6. Récupérer uniquement les promotions actives
    @GetMapping("/active")
    public ResponseEntity<List<Promotion>> getActivePromotions() {
        return ResponseEntity.ok(service.getActivePromotions());
    }
}
