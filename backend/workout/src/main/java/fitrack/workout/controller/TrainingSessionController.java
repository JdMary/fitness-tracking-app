package fitrack.workout.controller;

import fitrack.workout.entity.TrainingSession;
import fitrack.workout.service.ITrainingSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/workouts/training-session")
public class TrainingSessionController {

    @Autowired
    private ITrainingSession service;

    @GetMapping("/test")
    public String test() {
        return "Training Session Service is working";
    }

    @PostMapping("/add")
    public ResponseEntity<TrainingSession> createTrainingSession(@RequestBody TrainingSession session) {
        TrainingSession createdSession = service.createSession(session);
        return new ResponseEntity<>(createdSession, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrainingSession> getTrainingSession(@PathVariable Long id) {
        return ResponseEntity.ok(service.getSessionById(id));
    }

    @GetMapping
    public ResponseEntity<List<TrainingSession>> getAllTrainingSessions() {
        return ResponseEntity.ok(service.getAllSessions());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<TrainingSession> updateTrainingSession(
            @PathVariable Long id,
            @RequestBody TrainingSession session) {
        TrainingSession existingSession = service.getSessionById(id);
        if(existingSession != null) {
            return ResponseEntity.ok(service.updateSession(id, session));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTrainingSession(@PathVariable Long id) {
        TrainingSession existingSession = service.getSessionById(id);
        if(existingSession != null) {
            service.deleteSession(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}