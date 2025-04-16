package fitrack.workout.controller;

import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.WorkoutPlan;
import fitrack.workout.service.ExerciseService;
import fitrack.workout.service.IExercise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/workouts/exercises")
public class ExerciseController {
    @Autowired
    private IExercise service;
    @PostMapping("/add")
    public ResponseEntity<Exercise> createExercise(@RequestBody Exercise exercise) {
        return new ResponseEntity<>(service.createExercise(exercise), HttpStatus.CREATED);
    }
    @PostMapping("/add-full")
    public ResponseEntity<Exercise> createFullExercise(
            @RequestBody Exercise exercise,
            @RequestHeader("Authorization") String token) {
        Long trainingSessionId = exercise.getTrainingSession().getTrainingSessionId(); // From request body
        return ResponseEntity.ok(service.createFullExercise(exercise, trainingSessionId, token));
    }



    @GetMapping("/{id}")
    public ResponseEntity<Exercise> getExercise(@PathVariable Long id) {
        return ResponseEntity.ok(service.getExerciseById(id));
    }
    @GetMapping("/get-exercices-by-session/{id}")
    public ResponseEntity<List<Exercise>> getExercisesBySessions(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.getExercisesByTrainingSessionId(id, token));
    }
    @GetMapping("/get-exercices")
    public ResponseEntity<List<Exercise>> getExercises(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.getAllExercises(token));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Exercise> updateExercise( @PathVariable Long id, @RequestBody Exercise exercise) {
        Exercise existingExercise = service.getExerciseById(id);

        if (existingExercise!=null) {
            Exercise updatedExercise = service.updateExercise(id, exercise);
            return ResponseEntity.ok(updatedExercise);
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }


    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteExercise(@PathVariable Long id) {
        Exercise existingExercise = service.getExerciseById(id);

        if (existingExercise!=null) {
            service.deleteExercise(id);
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }


}
