package fitrack.user.client;

import fitrack.user.entity.dtos.LeaderBoardDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "achievement-service", url = "${application.config.leaderBoard-url}")
public interface LeaderBoardClient {

    @GetMapping("/name/{name}")
    LeaderBoardDTO findByName(@PathVariable("name") String name);

}
