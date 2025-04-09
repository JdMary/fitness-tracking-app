package fitrack.achievement.client;

import fitrack.achievement.entity.dtos.ExerciseDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "exercise", url = "${application.config.workouts-url}")
public interface ExerciseClient {

    @GetMapping("/exercise/getById/{exerciseId}")
    ExerciseDTO getExerciseById(@PathVariable("exerciseId") String exerciseId);
}
