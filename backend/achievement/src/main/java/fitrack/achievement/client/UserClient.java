package fitrack.achievement.client;

import fitrack.achievement.entity.User;
import fitrack.achievement.entity.dtos.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "user-service", url = "${application.config.users-url}")
public interface UserClient {
    @GetMapping("/retrieve-user-email/{email}")
    ResponseEntity<User> retrieveUserByEmail(@PathVariable String email);

}
