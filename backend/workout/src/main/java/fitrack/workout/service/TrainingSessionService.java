package fitrack.workout.service;

import fitrack.workout.entity.TrainingSession;
import fitrack.workout.repository.TrainingSessionRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class TrainingSessionService implements ITrainingSession{
private TrainingSessionRepository repository;
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

}
