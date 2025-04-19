package fitrack.workout.service;

import com.zaxxer.hikari.util.PropertyElf;
import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.entity.WorkoutPlan;
import fitrack.workout.repository.ProgressTrackerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.Date;
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


    public void updateProgressTracker(TrainingSession trainingSession) {
        WorkoutPlan workoutPlan = trainingSession.getWorkoutPlan();
        ProgressTracker progress = workoutPlan.getProgressTracker();

        int totalReps = trainingSession.getExercises().stream()
                .mapToInt(exercise -> exercise.getReps() * exercise.getSets())
                .sum();

        int totalSets = trainingSession.getExercises().stream()
                .mapToInt(Exercise::getSets)
                .sum();

        progress.setTotalRepsCompleted(progress.getTotalRepsCompleted() + totalReps);
        progress.setTotalSetsCompleted(progress.getTotalSetsCompleted() + totalSets);
        progress.setTotalExercisesCompleted(
                progress.getTotalExercisesCompleted() + trainingSession.getExercises().size()
        );
        progress.setBurnedCalories(
                calculateCaloriesBurned(trainingSession, progress.getUsername())
        );
        progress.setDate(new Date());

        repository.save(progress);
    }
    private Integer calculateCaloriesBurned(TrainingSession session, String username) {
        // Implémentez une logique plus précise si nécessaire (ex: appel à une API externe).
        return session.getExercises().stream()
                .mapToInt(exercise -> exercise.getReps() * exercise.getSets())
                .sum() * 2; // Facteur arbitraire pour l'exemple.
    }
}
