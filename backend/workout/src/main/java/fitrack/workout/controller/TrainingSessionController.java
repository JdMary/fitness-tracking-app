package fitrack.workout.controller;

import fitrack.workout.dto.entity.SessionEfficiencyDto;
import fitrack.workout.dto.entity.SessionInsightsDto;
import fitrack.workout.dto.entity.TrainingSessionDTO;
import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.service.ITrainingSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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

    @PostMapping("/add-full")
    public ResponseEntity<TrainingSession> createFullTrainingSession(
            @RequestBody TrainingSession session,
            @RequestHeader("Authorization") String token) {
        Long workoutPlanId = session.getWorkoutPlan().getWorkoutPlanId(); // From request body
        return ResponseEntity.ok(service.createFullTrainingSession(session, workoutPlanId, token));
    }
    @PostMapping("/add")
    public ResponseEntity<TrainingSession> createTrainingSession(@RequestBody TrainingSession session,
                                                                 @RequestHeader("Authorization") String token) {
        TrainingSession createdSession = service.createSession(session,token);
        return new ResponseEntity<>(createdSession, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrainingSession> getTrainingSession(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.getSessionById(id,token));
    }

    @GetMapping("/get-sessions")
    public ResponseEntity<List<TrainingSession>> getAllTrainingSessions(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.getAllSessions(token));
    }
   /* @GetMapping("/get-sessions-admin")
    public ResponseEntity<List<TrainingSession>> getAllTrainingSessionsAdmin(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.getAllSessionsAdmin(token));
    }*/
    @GetMapping("/get-sessions-admin")
    public ResponseEntity<List<TrainingSessionDTO>> getAllSessions() {
        List<TrainingSessionDTO> sessions = service.getAllTrainingSessionsDTO();
        return ResponseEntity.ok(sessions);
    }

    @GetMapping("/get-sessions-by-workout/{workoutPlanId}")
    public ResponseEntity<List<TrainingSession>> getTrainingSessionsByWorkouPlan(@PathVariable Long workoutPlanId,@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.getTrainingSessionsByWorkoutPlanId(workoutPlanId,token));
    }
    @GetMapping("/get-sessions-by-workout-admin/{workoutPlanId}")
    public ResponseEntity<List<TrainingSessionDTO>> getTrainingSessionsByWorkouPlanDTO(@PathVariable Long workoutPlanId,@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.getTrainingSessionsByWorkoutPlanIdDTO(workoutPlanId,token));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<TrainingSession> updateTrainingSession(
            @PathVariable Long id,
            @RequestBody TrainingSession session,
            @RequestHeader("Authorization") String token) {
        TrainingSession existingSession = service.getSessionById(id,token);
        if(existingSession != null) {
            return ResponseEntity.ok(service.updateSession(id, session,token));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTrainingSession(@PathVariable Long id,
                                                      @RequestHeader("Authorization") String token) {
        TrainingSession existingSession = service.getSessionById(id,token);
        if(existingSession != null) {
            service.deleteSession(id,token);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    @PostMapping("/{id}/assign-exercise")
    public ResponseEntity<TrainingSession> assignExercise(
            @PathVariable("id") Long sessionId,
            @RequestBody Exercise exercise,
            @RequestHeader("Authorization") String token
    ) {
        TrainingSession updated = service.assignExerciseToTrainingSession(sessionId, exercise, token);
        return ResponseEntity.ok(updated);
    }


    @PostMapping("/bulk/{workoutPlanId}")
    public ResponseEntity<?> createBulkSessions(
            @PathVariable Long workoutPlanId,
            @RequestBody List<TrainingSession> trainingSessions,
            @RequestHeader("Authorization") String token) {

        try {
            List<TrainingSession> createdSessions = service
                    .createBulkTrainingSessions(trainingSessions, workoutPlanId, token);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdSessions);

        } catch (ResponseStatusException e) {
            return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erreur interne : " + e.getMessage());
        }

    }





    @GetMapping("/efficiency")
    public ResponseEntity<List<SessionEfficiencyDto>> getSessionEfficiency(
            @RequestHeader("Authorization") String token) {

        List<SessionEfficiencyDto> efficiencyList = service.calculateSessionEfficiency(token);
        return ResponseEntity.ok(efficiencyList);
    }
    @GetMapping("/insights")
    public ResponseEntity<SessionInsightsDto> getSessionInsights(@RequestHeader("Authorization") String token) {
        SessionInsightsDto insights = service.calculateSessionInsights(token);
        return ResponseEntity.ok(insights);
    }
}