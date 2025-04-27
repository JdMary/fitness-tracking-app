package fitrack.facility.controller;

import fitrack.facility.dto.FacilityMonthlyRevenueDTO;
import fitrack.facility.entity.Subscription;
import fitrack.facility.service.SubscriptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/facilities/subscriptions")
@RequiredArgsConstructor
public class SubscriptionController {

    private final SubscriptionService subscriptionService;


    @PostMapping("/add")
    public ResponseEntity<Subscription> createSubscription(@RequestBody Subscription subscription,
                                                           @RequestHeader("Authorization") String token,
                                                           @RequestParam String priceType,
                                                           @RequestParam(required = false) Long promotionId) {
        Subscription createdSubscription = subscriptionService.createSubscription(subscription, token, priceType, promotionId);
        return ResponseEntity.ok(createdSubscription);
    }


    @GetMapping("/all")
    public ResponseEntity<List<Subscription>> getAllSubscriptions() {
        return ResponseEntity.ok(subscriptionService.getAllSubscriptions());
    }


    @GetMapping("/{id}")
    public ResponseEntity<Subscription> getSubscriptionById(@PathVariable Long id) {
        return ResponseEntity.ok(subscriptionService.getSubscriptionById(id));
    }


    @PutMapping("/update")
    public ResponseEntity<Subscription> updateSubscription(@RequestBody Subscription subscription,
                                                           @RequestHeader("Authorization") String token) {
        Subscription updated = subscriptionService.updateSubscription(subscription, token);
        return ResponseEntity.ok(updated);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSubscription(
            @PathVariable Long id,
            @RequestHeader("Authorization") String token
    ) {
        subscriptionService.deleteSubscription(id, token);
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
        return ResponseEntity.ok("Subscription status updated to CANCELLED. Refunded XP: " + refundedXP);
    }

    @DeleteMapping("/delete-by-email")
    public ResponseEntity<?> deleteSubscriptionsByEmail(@RequestParam String ownerEmail) {
        subscriptionService.deleteSubscriptionsByEmail(ownerEmail);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/search")
    public ResponseEntity<List<Subscription>> searchUserSubscriptions(@RequestParam String keyword,
                                                                      @RequestHeader("Authorization") String token) {
        List<Subscription> results = subscriptionService.searchUserSubscriptions(keyword, token);
        return ResponseEntity.ok(results);
    }
    @GetMapping("/searchadmin")
    public ResponseEntity<List<Subscription>> searchSubscriptions(@RequestParam String keyword)
                                                                       {
        List<Subscription> results = subscriptionService.searchSubscriptions(keyword);
        return ResponseEntity.ok(results);
    }
    @GetMapping("/revenue/monthly-by-facility")
    public List<FacilityMonthlyRevenueDTO> getMonthlyRevenueByFacility() {
        return subscriptionService.getMonthlyRevenueByFacility();
    }









}
