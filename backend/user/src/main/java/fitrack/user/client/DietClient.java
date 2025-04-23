package fitrack.user.client;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "diet-service", url = "${application.config.diet-url}")
public interface DietClient {
}
