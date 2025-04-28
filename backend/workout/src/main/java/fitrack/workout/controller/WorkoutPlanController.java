package fitrack.workout.controller;

import fitrack.workout.dto.entity.WorkoutPlanDTO;
import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.WorkoutPlan;
import fitrack.workout.repository.WorkoutPlanRepository;
import fitrack.workout.service.IWorkoutPlan;
import fitrack.workout.service.WorkoutPlanService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/workouts/plan")
public class WorkoutPlanController {

    @Autowired
    private IWorkoutPlan service;

    @GetMapping("/test")
    public String test() {
        return "Service USER fonctionne ";
    }
    @PostMapping("/add-full")
    public ResponseEntity<WorkoutPlan> createFullWorkoutPlan(
            @RequestBody WorkoutPlan plan,
            @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.createFullWorkoutPlan(plan,token));
    }


    @PostMapping("/add")
    public ResponseEntity<WorkoutPlan> createWorkoutPlan(@RequestBody WorkoutPlan plan,
                                                         @RequestHeader("Authorization") String token) {
        WorkoutPlan createdPlan = service.createWorkoutPlan(plan,token);
        return new ResponseEntity<>(createdPlan, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkoutPlan> getWorkoutPlan(@PathVariable Long id) {
        return ResponseEntity.ok(service.getWorkoutPlanById(id));
    }

    @GetMapping("/get-plans")
    public ResponseEntity<List<WorkoutPlan>> getAllWorkoutPlans(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.getAllPlans(token));
    }
    @GetMapping("/get-progress-by-plans")
    public ResponseEntity<List<ProgressTracker>> getProgressTrackersByWorkout(@RequestHeader("Authorization") String token,@PathVariable Long id) {
        return ResponseEntity.ok(service.getProgressTrackersByWorkoutPlan(id,token));
    }
    @GetMapping("/get-plans-admin")
    public ResponseEntity<List<WorkoutPlan>> getAllWorkoutPlansAdmin(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.getAllPlansAdmin(token));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<WorkoutPlan> updateWorkoutPlan(@PathVariable Long id, @RequestBody WorkoutPlan plan) {
        WorkoutPlan existingPlan = service.getWorkoutPlanById(id);

        if (existingPlan != null) {
            WorkoutPlan updatedPlan = service.updateWorkoutPlan(id, plan);
            return ResponseEntity.ok(updatedPlan);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }


    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteWorkoutPlan(@PathVariable Long id,
                                                  @RequestHeader("Authorization") String token) {
        WorkoutPlan existingPlan = service.getWorkoutPlanById(id);
        if (existingPlan != null) {
            service.deleteWorkoutPlan(id, token);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }


    @PostMapping("/assign-session")
    public ResponseEntity<WorkoutPlan> assignWorkoutToTrainingSessions(@RequestBody WorkoutPlan wp,
                                                                       @RequestHeader("Authorization") String token) {
        WorkoutPlan result = service.assignWorkoutPlanToTrainingSession(wp,token);
        return ResponseEntity.ok(result);
    }
    @PostMapping ("/{id}/progress")
    public ResponseEntity<WorkoutPlan> assignProgress(@PathVariable Long id,
                                                      @RequestBody ProgressTracker progress,
                                                      @RequestHeader("Authorization") String token) {

        WorkoutPlan updatedPlan = service.assignProgressToWorkoutPlanToUser(progress, id, token);
        return ResponseEntity.ok(updatedPlan);
    }
}
