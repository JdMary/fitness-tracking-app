package fitrack.workout.service;

import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.TrainingSession;

import java.util.List;

public interface IProgressTracker {
    ProgressTracker createTracker(ProgressTracker tracker);
    ProgressTracker getTrackerById(Long id);
    List<ProgressTracker> getAllTrackers();
    ProgressTracker updateTracker(Long id, ProgressTracker tracker);
    void deleteTracker(Long id);
    void updateProgressTrackerWithCaloriesAndWeight(TrainingSession trainingSession, double caloriesBurned, String token);
    void updateTotalExercicesCompleted(TrainingSession session);
    List<ProgressTracker> getProgressTrackerByUsername(String username);
    List<ProgressTracker> findProgressTrackerByUsername(String username);
}
