package fitrack.workout.controller;

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
    public ResponseEntity<WorkoutPlan> createWorkoutPlan(@RequestBody WorkoutPlan plan) {
        WorkoutPlan createdPlan = service.createWorkoutPlan(plan);
        return new ResponseEntity<>(createdPlan, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkoutPlan> getWorkoutPlan(@PathVariable Long id) {
        return ResponseEntity.ok(service.getWorkoutPlanById(id));
    }

    @GetMapping
    public ResponseEntity<List<WorkoutPlan>> getAllWorkoutPlans() {
        return ResponseEntity.ok(service.getAllWorkoutPlans());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<WorkoutPlan> updateWorkoutPlan( @PathVariable Long id, @RequestBody WorkoutPlan plan) {
        WorkoutPlan existingPlan = service.getWorkoutPlanById(id);

        if (existingPlan!=null) {
            WorkoutPlan updatedPlan = service.updateWorkoutPlan(id, plan);
            return ResponseEntity.ok(updatedPlan);
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }


    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteWorkoutPlan(@PathVariable Long id) {
        WorkoutPlan existingPlan = service.getWorkoutPlanById(id);
        if (existingPlan!=null) {
            service.deleteWorkoutPlan(id);
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }
}
