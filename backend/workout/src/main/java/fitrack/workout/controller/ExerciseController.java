package fitrack.workout.controller;

import fitrack.workout.entity.Exercise;
import fitrack.workout.service.ExerciseService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/workout/exercice")

public class ExerciseController {
    @Autowired
    private ExerciseService exerciseService;
    public ExerciseController(ExerciseService service){this.exerciseService=service;}
    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public void addExercise(@RequestBody Exercise exercise) {
        exerciseService.saveExercise(exercise);
    }




    @PostMapping("/completeSet/{exerciseId}")
    public void completeSet(@PathVariable("exerciseId") String exerciseId) {
        exerciseService.completeSet(exerciseId);  // Appel du service pour mettre à jour le progress
    }

}
