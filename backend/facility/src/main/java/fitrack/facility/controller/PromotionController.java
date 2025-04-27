package fitrack.facility.controller;

import fitrack.facility.entity.Promotion;
import fitrack.facility.service.PromotionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/facilities/promotions")
@RequiredArgsConstructor
public class PromotionController {

    private final PromotionService service;


    @PostMapping("/add")
    public ResponseEntity<Promotion> createPromotion(@RequestBody Promotion promotion,
                                                     @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.createPromotion(promotion, token));
    }


    @GetMapping("/all")
    public ResponseEntity<List<Promotion>> getAllPromotions() {
        return ResponseEntity.ok(service.getAllPromotions());
    }

    @GetMapping("/search")
    public ResponseEntity<List<Promotion>> searchPromotions(@RequestParam String name) {
        List<Promotion> results = service.searchPromotionsByFacilityName(name);
        return ResponseEntity.ok(results);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Promotion> getPromotionById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getPromotionById(id));
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Promotion> updatePromotion(@PathVariable Long id,
                                                     @RequestBody Promotion promotion,
                                                     @RequestHeader("Authorization") String token) {
        promotion.setId(id);
        return ResponseEntity.ok(service.updatePromotion(promotion, token));
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePromotion(@PathVariable Long id,
                                                @RequestHeader("Authorization") String token) {
        service.deletePromotion(id, token);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("/active")
    public ResponseEntity<List<Promotion>> getActivePromotions() {
        return ResponseEntity.ok(service.getActivePromotions());
    }
    @GetMapping("/facilitiesnames")
    public ResponseEntity<List<String>> getFacilityNamesWithPromotions() {

        return ResponseEntity.ok(service.getFacilityNamesWithPromotions());
    }
    @GetMapping("/by-facility")
    public ResponseEntity<List<Promotion>> getPromotionsByFacility(@RequestParam String name) {
        return ResponseEntity.ok(service.getPromotionsByFacility(name));
    }


}
