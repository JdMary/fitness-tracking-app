package fitrack.workout.service;

import fitrack.workout.entity.TrainingSession;

import java.util.List;

public interface ITrainingSession {
    TrainingSession createSession(TrainingSession session);
    TrainingSession getSessionById(Long id);
    List<TrainingSession> getAllSessions();
    TrainingSession updateSession(Long id, TrainingSession session);
    void deleteSession(Long id);
}
