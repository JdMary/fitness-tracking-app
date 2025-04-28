package fitrack.workout.controller;

import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.service.IProgressTracker;
import fitrack.workout.service.ITrainingSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/workouts/progress-tracker")
public class ProgressTrackerController {
    @Autowired
    private IProgressTracker service;
    @Autowired
    private ITrainingSession trainingSessionService;

    @GetMapping("/test")
    public String test() {
        return "Progress Tracker Service is working";
    }

    @PostMapping("/add")
    public ResponseEntity<ProgressTracker> createProgressTracker(@RequestBody ProgressTracker tracker) {
        ProgressTracker createdTracker = service.createTracker(tracker);
        return new ResponseEntity<>(createdTracker, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProgressTracker> getProgressTracker(@PathVariable Long id) {
        return ResponseEntity.ok(service.getTrackerById(id));
    }
    @GetMapping("get-progresses")
    public List<ProgressTracker> getUserProgressTracker(@RequestHeader("Authorization") String token) {
        return service.findProgressTrackerByUsername(token);
    }

    @GetMapping
    public ResponseEntity<List<ProgressTracker>> getAllProgressTrackers() {
        return ResponseEntity.ok(service.getAllTrackers());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ProgressTracker> updateProgressTracker(
            @PathVariable Long id,
            @RequestBody ProgressTracker tracker) {
        ProgressTracker existingTracker = service.getTrackerById(id);
        if(existingTracker != null) {
            return ResponseEntity.ok(service.updateTracker(id, tracker));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteProgressTracker(@PathVariable Long id) {
        ProgressTracker existingTracker = service.getTrackerById(id);
        if(existingTracker != null) {
            service.deleteTracker(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
   /* @PutMapping("/update-progress/{trainingSessionId}")
    public ResponseEntity<Void> updateProgress(@PathVariable Long trainingSessionId,
                                               @RequestHeader("Authorization") String token) {
        TrainingSession session = trainingSessionService.getSessionById(trainingSessionId,token);
        service.updateProgressTrackerWithCaloriesAndWeight(session);
        return ResponseEntity.ok().build();
    }*/

}
