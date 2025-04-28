package fitrack.workout.service;

import fitrack.workout.client.AuthClient;
import fitrack.workout.dto.entity.SessionEfficiencyDto;
import fitrack.workout.dto.entity.SessionEfficiencyRawProjection;
import fitrack.workout.dto.entity.SessionInsightsDto;
import fitrack.workout.dto.entity.TrainingSessionDTO;
import fitrack.workout.dto.mapper.TrainingSessionMapper;
import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.entity.WorkoutPlan;
import fitrack.workout.repository.ExerciseRepository;
import fitrack.workout.repository.TrainingSessionRepository;
import fitrack.workout.repository.WorkoutPlanRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TrainingSessionService implements ITrainingSession{

    @Autowired
    private TrainingSessionRepository repository;
    @Autowired
    private WorkoutPlanRepository workoutPlanRepository;
    private ExerciseRepository exerciseRepository;
    @Autowired
    private AuthClient authClient;
    @Autowired
    private TrainingSessionMapper trainingSessionMapper;


    @Override
    public TrainingSession createSession(TrainingSession session, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        session.setUsername(username);
        return repository.save(session);
    }

    @Override
    public TrainingSession getSessionById(Long id, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        TrainingSession session=repository.findById(id).get();
        session.setUsername(username);
        return session;
    }

    @Override
    public List<TrainingSession> getAllSessions(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return repository.findByUsername(username);
    }

    @Override
    public List<TrainingSession> getAllSessionsAdmin(String token) {
        return repository.findAll();

    }

    @Override
    public List<TrainingSessionDTO> getAllTrainingSessionsDTO() {
        List<TrainingSession> sessions = repository.findAll();
        return sessions.stream()
                .map(trainingSessionMapper::toDTO)
                .toList();
    }


    @Override
    public TrainingSession updateSession(Long id, TrainingSession session, String token) {
        TrainingSession existingSession = getSessionById(id,token);
        BeanUtils.copyProperties(session, existingSession,"trainingSessionId");
        return repository.save(existingSession);
    }



    @Override
    public TrainingSession assignExerciseToTrainingSession(Long sessionId, Exercise exercise, String token) {

       /* String username = String.valueOf(authClient.extractUsername(token).getBody());
        System.out.println("Authenticated user: " + username);

        TrainingSession session = repository.findById(sessionId).get();
        System.out.println(session.toString());
        session.setUsername(username);

        exercise.setTrainingSession(session);
        Exercise savedExercise = exerciseRepository.save(exercise);
        session.getExercises().add(savedExercise);

        return repository.save(session);*/
        ResponseEntity<String> response = authClient.extractUsername(token);

        if (!response.getStatusCode().is2xxSuccessful() || response.getBody() == null) {
            throw new RuntimeException("Unauthorized: Failed to extract username from token.");
        }

        String username = response.getBody();

        TrainingSession session = repository.findById(sessionId)
                .orElseThrow(() -> new RuntimeException("Training session not found with ID: " + sessionId));

        exercise.setTrainingSession(session);
        exerciseRepository.save(exercise);
        session.getExercises().add(exercise);

        return repository.save(session);
    }

    @Override
    public TrainingSession createFullTrainingSession(TrainingSession session, Long workoutPlanId, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        WorkoutPlan plan = workoutPlanRepository.findById(workoutPlanId).get();
        session.setWorkoutPlan(plan);
        session.setUsername(username);
        session.getExercises().forEach(exercise -> exercise.setTrainingSession(session));
        return repository.save(session);
    }

    @Override
    public List<TrainingSession> createBulkTrainingSessions(List<TrainingSession> trainingSessions, Long workoutPlanId, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        WorkoutPlan workoutPlan = workoutPlanRepository.findById(workoutPlanId).get();
        return trainingSessions.stream()
                .peek(session -> {
                    session.setWorkoutPlan(workoutPlan);
                    session.setUsername(username);
                    if (session.getExercises() != null) {
                        session.getExercises().forEach(exercise -> {
                            exercise.setTrainingSession(session);
                            exercise.setUsername(username);
                        });
                    }
                })
                .map(repository::save)
                .collect(Collectors.toList());
    }

    @Override
    public List<TrainingSession> getTrainingSessionsByWorkoutPlanId(Long workoutPlanId, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return repository.findByWorkoutPlanAndUsername(workoutPlanId, username);
    }

    @Override
    public List<TrainingSessionDTO> getTrainingSessionsByWorkoutPlanIdDTO(Long workoutPlanId, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        List<TrainingSession> sessions= repository.findByWorkoutPlanAndUsername(workoutPlanId, username);
        return sessions.stream()
                .map(trainingSessionMapper::toDTO)
                .toList();
    }


    @Override
    public void deleteSession(Long id, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        TrainingSession trainingSession = repository.findByTrainingSessionIdAndUsername(id,username).get();
        repository.delete(trainingSession);
    }



    /*public TrainingSession addExercisesToSession(Long sessionId, List<Exercise> exercises) {
        TrainingSession session = getSessionById(sessionId);
        session.setExercises(exercises);
        exercises.forEach(ex -> ex .setTrainingSession(session));
        return repository.save(session);
    }*/



    public List<SessionEfficiencyDto> calculateSessionEfficiency(String token) {

        String username = String.valueOf(authClient.extractUsername(token).getBody());
        List<SessionEfficiencyRawProjection> projections = repository.findSessionRawData(username);

        return projections.stream()
                .map(proj -> {
                    long duration = ChronoUnit.MINUTES.between(proj.getEntryTime(), proj.getExitTime());
                    double caloriesPerMinute = duration > 0 ? (double) proj.getCalories() / duration : 0.0;

                    return new SessionEfficiencyDto(
                            proj.getSessionId(),
                            (int) duration,
                            proj.getCalories(),
                            caloriesPerMinute
                    );
                })
                .collect(Collectors.toList());
    }
    public SessionInsightsDto calculateSessionInsights(String token) {
        List<SessionEfficiencyDto> sessions = calculateSessionEfficiency(token);

        if (sessions.isEmpty()) {
            return new SessionInsightsDto(Collections.emptyList(), null, 0.0, "No sessions available. Let's start training!");
        }

        SessionEfficiencyDto bestSession = sessions.stream()
                .max(Comparator.comparingDouble(SessionEfficiencyDto::getCaloriesPerMinute))
                .orElse(null);

        double avgCaloriesPerMinute = sessions.stream()
                .mapToDouble(SessionEfficiencyDto::getCaloriesPerMinute)
                .average()
                .orElse(0.0);

        String recommendation = (avgCaloriesPerMinute > 8) ?
                "Great job! Keep maintaining high intensity!" :
                "Try shorter, more intense sessions for better results!";

        return new SessionInsightsDto(sessions, bestSession, avgCaloriesPerMinute, recommendation);
    }



}
