package fitrack.user.client;

import fitrack.user.entity.dtos.LeaderBoardDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "achievement", url = "${application.config.achievements-url}")
public interface LeaderBoardClient {
    @GetMapping("/board/name/{name}")
    LeaderBoardDTO findByName(@PathVariable("name") String name);

}
