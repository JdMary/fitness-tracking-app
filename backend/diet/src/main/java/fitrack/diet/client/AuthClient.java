package fitrack.diet.client;
import fitrack.diet.entity.User; //badel 7asb l microservice mte3k
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@FeignClient(name = "auth-service", url = "${application.config.auth-url}")

public interface AuthClient {




        @GetMapping("/extract-username")
        public ResponseEntity<String> extractUsername(@RequestHeader("Authorization") String bearerToken); //he4i t'extracti l username (email) mta3 l3ab mil token

        @GetMapping("/extract-user-details")
        public ResponseEntity<?> extractUserDetails(@RequestHeader("Authorization") String bearerToken); //he4i t'extracti details lkol mta3 l3abd mil token

    }
