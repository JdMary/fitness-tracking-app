package fitrack.workout.service;

import com.zaxxer.hikari.util.PropertyElf;
import fitrack.workout.client.AuthClient;
import fitrack.workout.entity.*;
import fitrack.workout.repository.ExerciseRepository;
import fitrack.workout.repository.ProgressTrackerRepository;
import fitrack.workout.repository.WorkoutPlanRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
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
    private ExerciseRepository exerciseRepository;
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
       /* progress.setBurnedCalories(
                calculateCaloriesBurned(trainingSession, progress.getUsername())
        );*/
        progress.setDate(LocalDate.now());

        repository.save(progress);
    }

/*
   public void updateProgressTrackerCompletion(TrainingSession session, String token) {
       String username = String.valueOf(authClient.extractUsername(token).getBody());

       WorkoutPlan workoutPlan = workoutPlanRepository
               .findByWorkoutPlanIdAndUsername(session.getWorkoutPlan().getWorkoutPlanId(), username)
               .orElseThrow(() -> new RuntimeException("Workout plan not found"));

       ProgressTracker tracker = workoutPlan.getProgressTracker();
       List<Exercise> exercises = session.getExercises();

       long completedExercises = exercises.stream().filter(Exercise::isStatus).count();
       int totalExercises = exercises.size();

       int totalReps = exercises.stream().mapToInt(Exercise::getReps).sum();
       int totalSets = exercises.stream().mapToInt(Exercise::getSets).sum();

       //int burnedCalories = calculateCaloriesBurned(session, username);

       tracker.setTotalExercisesCompleted((int) completedExercises);
       tracker.setCompletionPercentage((int) ((completedExercises * 100) / totalExercises));
       tracker.setTotalRepsCompleted(totalReps);
       tracker.setTotalSetsCompleted(totalSets);
      // tracker.setBurnedCalories(burnedCalories);

       repository.save(tracker);
   }
*/

    public void updateProgressTrackerWithCaloriesAndWeight(TrainingSession trainingSession, double caloriesBurned, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());

        //ProgressTracker tracker = workoutPlanRepository.findProgressTrackerByWorkoutPlanIdAndUsername(trainingSession.getWorkoutPlan().getWorkoutPlanId(),username);
        ProgressTracker tracker =trainingSession.getWorkoutPlan().getProgressTracker();
        if (tracker == null) {
            throw new RuntimeException("ProgressTracker not found for session " + trainingSession.getTrainingSessionId());
        }

        // Update total calories burned
        int updatedCalories = tracker.getBurnedCalories() + (int) caloriesBurned;  // Add to the existing burned calories
        tracker.setBurnedCalories(Math.max(0, updatedCalories));

        // Get the user's WorkoutPlan and Goal
        WorkoutPlan workoutPlan = trainingSession.getWorkoutPlan();
        Goal goal = workoutPlan.getGoal();
        User u = authClient.extractUserDetails(token).getBody();
        // Update estimated weight
        float currentWeight = u.getWeight(); // Initialize estimated weight when creating tracker
        float weightChange = (float)(caloriesBurned / 7700.0); // 7700 kcal = 1kg fat

        if (goal == Goal.WEIGHT_LOSS) {
            tracker.setEstimatedWeight(currentWeight - weightChange);
        } else if (goal == Goal.MUSCLE_GAIN) {
            tracker.setEstimatedWeight((float) (currentWeight + (weightChange * 0.5)));
        } else if (goal == Goal.MAINTENANCE) {
            tracker.setEstimatedWeight((float) (currentWeight - (weightChange * 0.1)));
        }

        this.updateTotalExercicesCompleted(trainingSession);
        repository.save(tracker);
    }

    public List<ProgressTracker> getProgressTrackerByUsername(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());

        return repository.findByUsername(username);
    }

    @Override
    public List<ProgressTracker> findProgressTrackerByUsername(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());

        return repository.findProgressTrackerByUsername(username);
    }


    public void updateTotalExercicesCompleted(TrainingSession session) {

        ProgressTracker tracker = session.getWorkoutPlan().getProgressTracker();
        List<Exercise> exercises = exerciseRepository.findExercisesByTrainingSessionWorkoutPlanId(session.getWorkoutPlan().getWorkoutPlanId());
        long completedExercises = exercises.stream().filter(Exercise::isStatus).count();
        int totalExercises = exercises.size();
        int totalReps = exercises.stream().mapToInt(Exercise::getReps).sum();
        int totalSets = exercises.stream().mapToInt(Exercise::getSets).sum();


        tracker.setTotalExercisesCompleted((int) completedExercises);
        tracker.setCompletionPercentage((int) ((completedExercises * 100) / totalExercises));
        tracker.setTotalRepsCompleted(totalReps);
        tracker.setTotalSetsCompleted(totalSets);

    }

}
