package fitrack.buddy.client;

import fitrack.buddy.entity.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@FeignClient(name = "auth-service", url = "${application.config.auth-url}")
public interface AuthClient {

    @GetMapping("/extract-username")
     ResponseEntity<String> extractUsername(@RequestHeader("Authorization") String bearerToken);

    @GetMapping("/extract-user-details")
     ResponseEntity<UserDTO> extractUserDetails(@RequestHeader("Authorization") String bearerToken);
}

