package fitrack.workout.service;

import fitrack.workout.client.AuthClient;
import fitrack.workout.dto.entity.ExerciseDTO;
import fitrack.workout.dto.entity.TrainingSessionDTO;
import fitrack.workout.dto.mapper.ExerciseMapper;
import fitrack.workout.dto.mapper.TrainingSessionMapper;
import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.repository.ExerciseRepository;
import fitrack.workout.repository.TrainingSessionRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ExerciseService implements IExercise{
    @Autowired
    private ExerciseRepository repository;
    @Autowired
    private AuthClient authClient;
    @Autowired
    private TrainingSessionRepository trainingSessionRepository;
    @Autowired
    private ExerciseMapper exerciseMapper;
    @Autowired
    private ProgressTrackerService progressTrackerService;

    @Override
    public Exercise createExercise(Exercise exercise) {
        return repository.save(exercise);
    }

    @Override
    public Exercise createExerciseWithSession(Exercise exercise, Long sessionId, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        TrainingSession trainingSession=trainingSessionRepository.findByTrainingSessionIdAndUsername(sessionId,username).get();
        exercise.setUsername(username);
        exercise.setTrainingSession(trainingSession);
        trainingSession.getExercises().add(exercise);
        return repository.save(exercise);

    }

    @Override
    public Exercise getExerciseById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Exercise> getAllExercises(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return repository.findExercisesByUsername(username);
    }//ghalta

    @Override
    public List<ExerciseDTO> getAllExercisesDTO(String token) {
        List<Exercise> exercises = repository.findAll();
        return exercises.stream()
                .map(exerciseMapper::toDTO)
                .toList();
    }


    @Override
    public Exercise updateExercise(Long id, Exercise exercise) {
        Exercise existing = getExerciseById(id);
        BeanUtils.copyProperties(exercise, existing, "exerciseId", "trainingSession");


        return repository.save(existing);
    }

    @Override
    public void deleteExercise(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Exercise createFullExercise(Exercise exercise, Long trainingSessionId, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        TrainingSession session = trainingSessionRepository.findById(trainingSessionId)
                .orElseThrow(() -> new RuntimeException("Training session not found"));

        exercise.setTrainingSession(session);
        return repository.save(exercise);
    }

    @Override
    public List<Exercise> getExercisesByTrainingSessionId(Long trainingSessionId, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return repository.findExercisesBySessionAndUsername(trainingSessionId, username);
    }

    @Override
    public List<ExerciseDTO> getExercisesByTrainingSessionIdDTO(Long trainingSessionId, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        List<Exercise> sessions= repository.findExercisesBySessionAndUsername(trainingSessionId, username);
        return sessions.stream()
                .map(exerciseMapper::toDTO)
                .toList();
    }

    @Override
    public Exercise markExerciseAsCompleted(Long exerciseId, boolean isCompleted, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        Exercise exercise = repository.findExercisesByExerciseIdAndUsername(exerciseId,username);
        exercise.setStatus(isCompleted);
        Exercise savedExercise = repository.save(exercise);
        progressTrackerService.updateProgressTrackerCompletion(exercise.getTrainingSession(),token);
       return savedExercise;
        //updateProgressTracker(exercise.getTrainingSession());
    }
}
