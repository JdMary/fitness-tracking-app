package fitrack.workout.service;

import fitrack.workout.entity.ProgressTracker;

import java.util.List;

public interface IProgressTracker {
    ProgressTracker createTracker(ProgressTracker tracker);
    ProgressTracker getTrackerById(Long id);
    List<ProgressTracker> getAllTrackers();
    ProgressTracker updateTracker(Long id, ProgressTracker tracker);
    void deleteTracker(Long id);
}
