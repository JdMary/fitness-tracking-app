package fitrack.diet.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

//@FeignClient(name = "auth-service", url = "${application.config.auth-url}")

public interface UserClient {
//    @GetMapping("/retrieve-user-id/{idUser}")
//    public ResponseEntity<?> retrieveUserbyID(@PathVariable String idUser);
}
