package fitrack.workout.service;

import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.entity.WorkoutPlan;

import java.util.List;

public interface ITrainingSession {
    TrainingSession createSession(TrainingSession session,String token);
    TrainingSession getSessionById(Long id,String token);
    List<TrainingSession> getAllSessions(String token);
    TrainingSession updateSession(Long id, TrainingSession session,String token);
    TrainingSession assignExerciseToTrainingSession(Long sessionId, Exercise exercise, String token);
    TrainingSession  createFullTrainingSession(TrainingSession session, Long workoutPlanId, String token);
    List<TrainingSession> createBulkTrainingSessions(List<TrainingSession> trainingSessions,
                                                     Long workoutPlanId,
                                                     String token);
    List<TrainingSession> getTrainingSessionsByWorkoutPlanId(Long workoutPlanId,String token);
    void deleteSession(Long id,String token);


}

