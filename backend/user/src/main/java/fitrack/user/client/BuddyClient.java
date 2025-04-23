package fitrack.user.client;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "buddy-service", url = "${application.config.buddy-url}")
public interface BuddyClient {
}
