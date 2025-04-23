package fitrack.facility.controller;

import fitrack.facility.entity.Subscription;
import fitrack.facility.service.SubscriptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/facilities/subscriptions") // ✅ Mise à jour du path général
@RequiredArgsConstructor
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    // ✅ Créer un abonnement
    @PostMapping("/add")
    public ResponseEntity<Subscription> createSubscription(@RequestBody Subscription subscription,
                                                           @RequestHeader("Authorization") String token,
                                                           @RequestParam String priceType,
                                                           @RequestParam(required = false) Long promotionId) {
        Subscription createdSubscription = subscriptionService.createSubscription(subscription, token, priceType, promotionId);
        return ResponseEntity.ok(createdSubscription);
    }

    // ✅ Récupérer tous les abonnements
    @GetMapping("/all")
    public ResponseEntity<List<Subscription>> getAllSubscriptions() {
        return ResponseEntity.ok(subscriptionService.getAllSubscriptions());
    }

    // ✅ Récupérer un abonnement par ID
    @GetMapping("/{id}")
    public ResponseEntity<Subscription> getSubscriptionById(@PathVariable Long id) {
        return ResponseEntity.ok(subscriptionService.getSubscriptionById(id));
    }

    // ✅ Modifier un abonnement
    @PutMapping("/update")
    public ResponseEntity<Subscription> updateSubscription(@RequestBody Subscription subscription,
                                                           @RequestHeader("Authorization") String token) {
        Subscription updated = subscriptionService.updateSubscription(subscription, token);
        return ResponseEntity.ok(updated);
    }

    // ✅ Supprimer un abonnement
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSubscription(
            @PathVariable Long id,
            @RequestHeader("Authorization") String token
    ) {
        subscriptionService.deleteSubscription(id, token);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete-by-email")
        public ResponseEntity<?> deleteSubscriptionsByEmail(@RequestParam String ownerEmail) {
            subscriptionService.deleteSubscriptionsByEmail(ownerEmail);
            return ResponseEntity.ok().build();
        }

    // ✅ Récupérer les abonnements de l'utilisateur courant
    @GetMapping("/my")
    public ResponseEntity<List<Subscription>> getUserSubscriptions(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(subscriptionService.getUserSubscriptions(token));
    }
    @PutMapping("/cancel/{subId}")
    public ResponseEntity<String> cancelSubscription(
            @PathVariable Long subId,
            @RequestHeader("Authorization") String token) {
        int refundedXP = subscriptionService.cancelSubscription(subId, token);
        return ResponseEntity.ok("Statut de la souscription mis à jour en CANCELLED. XP remboursés : " + refundedXP);
    }
    @GetMapping("/stats/{facilityId}")
    public ResponseEntity<Map<String, Object>> getStats(@PathVariable Long facilityId) {
        return ResponseEntity.ok(subscriptionService.getFacilitySubscriptionStats(facilityId));
    }
    @GetMapping("/stats/monthly-revenue")
    public ResponseEntity<Map<String, Double>> getMonthlyRevenue() {
        return ResponseEntity.ok(subscriptionService.getMonthlyRevenue());
    }

    @GetMapping("/stats/quarterly-revenue")
    public ResponseEntity<Map<String, Double>> getQuarterlyRevenue() {
        return ResponseEntity.ok(subscriptionService.getQuarterlyRevenue());
    }



}
