package fitrack.workout.service;

import com.zaxxer.hikari.util.PropertyElf;
import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.repository.ProgressTrackerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProgressTrackerService implements IProgressTracker {
    private ProgressTrackerRepository repository;
    @Override
    public ProgressTracker createTracker(ProgressTracker tracker) {
        return repository.save(tracker);
    }

    @Override
    public ProgressTracker getTrackerById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<ProgressTracker> getAllTrackers() {
        return repository.findAll();
    }

    @Override
    public ProgressTracker updateTracker(Long id, ProgressTracker tracker) {
        ProgressTracker existing = getTrackerById(id);
        BeanUtils.copyProperties(tracker, existing, "progressId", "workoutPlan");
        return repository.save(existing);
    }

    @Override
    public void deleteTracker(Long id) {
        repository.deleteById(id);
    }
}
