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


    @PostMapping("/add")
    public ResponseEntity<WorkoutPlanDTO> createWorkoutPlan(@RequestBody WorkoutPlanDTO plan) {
        WorkoutPlanDTO createdPlan = service.createWorkoutPlanDTO(plan);
        return new ResponseEntity<>(createdPlan, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkoutPlanDTO> getWorkoutPlan(@PathVariable Long id) {
        return ResponseEntity.ok(service.getWorkoutPlanById(id));
    }

    @GetMapping
    public ResponseEntity<List<WorkoutPlanDTO>> getAllWorkoutPlans() {
        return ResponseEntity.ok(service.getAllPlans());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<WorkoutPlanDTO> updateWorkoutPlan(@PathVariable Long id, @RequestBody WorkoutPlanDTO plan) {
        WorkoutPlanDTO existingPlan = service.getWorkoutPlanById(id);

        if (existingPlan != null) {
            WorkoutPlanDTO updatedPlan = service.updateWorkoutPlan(id, plan);
            return ResponseEntity.ok(updatedPlan);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }


    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteWorkoutPlan(@PathVariable Long id) {
        WorkoutPlanDTO existingPlan = service.getWorkoutPlanById(id);
        if (existingPlan != null) {
            service.deleteWorkoutPlan(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }

    @PostMapping("/assign-progress/{id}")
    @ResponseBody
    public WorkoutPlan assignProgressToWorkoutPlan(@RequestBody ProgressTracker progress, @PathVariable("id") Long idWorkoutPlan) {
        return service.assignProgressToWorkoutPlan(progress,idWorkoutPlan);
    }
    @PostMapping("/assign")
    public ResponseEntity<WorkoutPlan> assignWorkout(@RequestBody WorkoutPlan wp) {
        WorkoutPlan result = service.assignWorkoutPlanToTrainingSession(wp);
        return ResponseEntity.ok(result);
    }
}
