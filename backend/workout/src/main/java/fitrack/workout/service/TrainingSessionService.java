package fitrack.workout.service;

import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.entity.WorkoutPlan;
import fitrack.workout.repository.TrainingSessionRepository;
import fitrack.workout.repository.WorkoutPlanRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TrainingSessionService implements ITrainingSession{
private TrainingSessionRepository repository;
@Autowired
private WorkoutPlanRepository workoutPlanRepository;
    @Override
    public TrainingSession createSession(TrainingSession session) {
        return repository.save(session);
    }

    @Override
    public TrainingSession getSessionById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<TrainingSession> getAllSessions() {
        return repository.findAll();
    }

    @Override
    public TrainingSession updateSession(Long id, TrainingSession session) {
        TrainingSession existingSession = getSessionById(id);
        BeanUtils.copyProperties(session, existingSession,"trainingSessionId");
        return repository.save(existingSession);
    }

    @Override
    public void deleteSession(Long id) {
        repository.deleteById(id);
    }

    @Override
    public WorkoutPlan assignWorkoutPlanToTrainingSession(WorkoutPlan wp) {
        WorkoutPlan workoutPlan=workoutPlanRepository.save(wp);
        workoutPlan.getTrainingSessions().forEach(trainingSession -> {
            trainingSession.setWorkoutPlan(workoutPlan);
            repository.save(trainingSession);
        });
        return workoutPlan;
    }







    /*public TrainingSession addExercisesToSession(Long sessionId, List<Exercise> exercises) {
        TrainingSession session = getSessionById(sessionId);
        session.setExercises(exercises);
        exercises.forEach(ex -> ex .setTrainingSession(session));
        return repository.save(session);
    }*/



}
