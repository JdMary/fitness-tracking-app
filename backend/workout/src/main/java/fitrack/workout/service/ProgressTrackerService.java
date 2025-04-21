package fitrack.workout.service;

import com.zaxxer.hikari.util.PropertyElf;
import fitrack.workout.client.AuthClient;
import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.entity.WorkoutPlan;
import fitrack.workout.repository.ProgressTrackerRepository;
import fitrack.workout.repository.WorkoutPlanRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class ProgressTrackerService implements IProgressTracker {
    @Autowired
    private ProgressTrackerRepository repository;
    @Autowired
    private AuthClient authClient;
    @Autowired
    private WorkoutPlanRepository workoutPlanRepository;



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
        progress.setDate(LocalDate.now());

        repository.save(progress);
    }
    private Integer calculateCaloriesBurned(TrainingSession session, String username) {
        return session.getExercises().stream()
                .mapToInt(exercise -> exercise.getReps() * exercise.getSets())
                .sum() * 2;
    }
    public void updateProgressTrackerCompletion(TrainingSession session, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        WorkoutPlan workoutPlan=workoutPlanRepository.findByWorkoutPlanIdAndUsername(session.getWorkoutPlan().getWorkoutPlanId(),username).get();

        ProgressTracker tracker = workoutPlan.getProgressTracker();
        List<Exercise> exercises = session.getExercises();

        long completedExercises = exercises.stream().filter(Exercise::isStatus).count();
        int totalExercises = exercises.size();

        tracker.setTotalExercisesCompleted((int) completedExercises);
        tracker.setCompletionPercentage((int) ((completedExercises * 100) / totalExercises));
        repository.save(tracker);
    }
}
