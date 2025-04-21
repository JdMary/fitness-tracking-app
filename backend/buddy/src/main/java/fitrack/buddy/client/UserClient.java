package fitrack.buddy.client;

import fitrack.buddy.entity.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "user-service", url = "${application.config.users-url}")
public interface UserClient {
    @GetMapping("/retrieve-user-email/{email}")
    ResponseEntity<UserDTO> retrieveUserByEmail(@PathVariable String email);
}
