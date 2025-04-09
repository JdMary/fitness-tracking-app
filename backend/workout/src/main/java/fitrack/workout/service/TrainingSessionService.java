package fitrack.workout.service;

import fitrack.workout.client.AuthClient;
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
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TrainingSessionService implements ITrainingSession{

    @Autowired
    private TrainingSessionRepository repository;
    @Autowired
    private ExerciseRepository exerciseRepository;
    @Autowired
    private AuthClient authClient;


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
    public List<TrainingSession> getAllSessions() {
        return repository.findAll();
    }

    @Override
    public TrainingSession updateSession(Long id, TrainingSession session, String token) {
        TrainingSession existingSession = getSessionById(id,token);
        BeanUtils.copyProperties(session, existingSession,"trainingSessionId");
        return repository.save(existingSession);
    }


    @Override
    public void deleteSession(Long id) {
        repository.deleteById(id);
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








    /*public TrainingSession addExercisesToSession(Long sessionId, List<Exercise> exercises) {
        TrainingSession session = getSessionById(sessionId);
        session.setExercises(exercises);
        exercises.forEach(ex -> ex .setTrainingSession(session));
        return repository.save(session);
    }*/



}
