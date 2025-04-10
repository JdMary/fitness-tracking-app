package fitrack.facility.controller;

import fitrack.facility.entity.Subscription;
import fitrack.facility.service.SubscriptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/subscriptions")
@RequiredArgsConstructor
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    // Créer un abonnement
    @PostMapping
    public ResponseEntity<Subscription> createSubscription(@RequestBody Subscription subscription,
                                                           @RequestHeader("Authorization") String token,
                                                           @RequestParam String priceType,
                                                           @RequestParam(required = false) Long promotionId) {
        Subscription createdSubscription = subscriptionService.createSubscription(subscription, token, priceType, promotionId);
        return ResponseEntity.ok(createdSubscription);
    }


    // Récupérer tous les abonnements
    @GetMapping
    public ResponseEntity<List<Subscription>> getAllSubscriptions() {
        return ResponseEntity.ok(subscriptionService.getAllSubscriptions());
    }

    // Récupérer un abonnement par ID
    @GetMapping("/{id}")
    public ResponseEntity<Subscription> getSubscriptionById(@PathVariable Long id) {
        return ResponseEntity.ok(subscriptionService.getSubscriptionById(id));
    }

    // Modifier un abonnement
    @PutMapping
    public ResponseEntity<Subscription> updateSubscription(@RequestBody Subscription subscription,
                                                           @RequestHeader("Authorization") String token) {
        Subscription updated = subscriptionService.updateSubscription(subscription, token);
        return ResponseEntity.ok(updated);
    }

    //  Supprimer un abonnement
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubscription(@PathVariable Long id,
                                                   @RequestHeader("Authorization") String token) {
        subscriptionService.deleteSubscription(id, token);
        return ResponseEntity.noContent().build();
    }

    // Récupérer tous les abonnements de l'utilisateur courant
    @GetMapping("/my")
    public ResponseEntity<List<Subscription>> getUserSubscriptions(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(subscriptionService.getUserSubscriptions(token));
    }
}
