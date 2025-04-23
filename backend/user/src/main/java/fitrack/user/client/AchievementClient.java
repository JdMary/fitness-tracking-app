package fitrack.user.client;

import org.springframework.cloud.openfeign.FeignClient;
@FeignClient(name = "achievement-service", url = "${application.config.achievement-url}")
public interface AchievementClient {
}
