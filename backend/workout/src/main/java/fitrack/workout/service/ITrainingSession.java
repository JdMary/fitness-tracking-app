package fitrack.workout.service;

import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.entity.WorkoutPlan;

import java.util.List;

public interface ITrainingSession {
    TrainingSession createSession(TrainingSession session,String token);
    TrainingSession getSessionById(Long id,String token);
    List<TrainingSession> getAllSessions();
    TrainingSession updateSession(Long id, TrainingSession session,String token);
    void deleteSession(Long id);
     TrainingSession assignExerciseToTrainingSession(Long sessionId, Exercise exercise, String token);
}
