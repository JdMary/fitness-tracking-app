package fitrack.user.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "facility-service", url = "${application.config.facility-url}")
public interface FacilityClient {
    @DeleteMapping("/subscriptions/delete-by-email")
    public ResponseEntity<?> deleteSubscriptionsByEmail(@RequestParam String ownerEmail);
}
