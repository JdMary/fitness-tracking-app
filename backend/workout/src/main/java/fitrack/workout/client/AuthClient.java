package fitrack.workout.client;

import fitrack.workout.entity.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "auth-service", url = "${application.config.auth-url}")
public interface AuthClient {

    @GetMapping("/extract-username")
    public ResponseEntity<String> extractUsername(@RequestHeader("Authorization") String bearerToken);

    @GetMapping("/extract-user-details")
    public ResponseEntity<User> extractUserDetails(@RequestHeader("Authorization") String bearerToken);
}
