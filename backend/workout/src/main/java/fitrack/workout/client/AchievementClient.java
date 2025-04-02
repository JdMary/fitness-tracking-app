package fitrack.workout.client;

import fitrack.workout.entity.dtos.AchievementRequest;
import org.springframework.cloud.openfeign.FeignClient;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "achievement", url = "${application.config.achievements-url}")
public interface AchievementClient {

    @PostMapping("/addAchievement")
    void createAchievement(@RequestBody AchievementRequest request);



    @PutMapping("/updateProgress/{exerciseId}/{totalSets}/{difficulty}")

    void updateProgress(@PathVariable("exerciseId") String exerciseId, @PathVariable("totalSets") int totalSets,@PathVariable("difficulty") String difficulty);

}
