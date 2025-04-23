package fitrack.user.client;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "workout-service", url = "${application.config.workout-url}")
public interface WorkoutClient {
}
