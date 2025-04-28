package fitrack.workout.client;

import fitrack.workout.entity.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
@FeignClient(name = "user-service", url = "${application.config.users-url}")
public interface UserClient {
    @GetMapping("/retrieve-all-trainers")
    public ResponseEntity<List<User>> getAllTrainers();
}
