package fitrack.workout.service;

import fitrack.workout.dto.entity.ProgressTrackerDTO;
import fitrack.workout.dto.entity.WorkoutPlanDTO;
import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.entity.Video;
import fitrack.workout.entity.WorkoutPlan;

import java.util.List;

public interface IWorkoutPlan {
    WorkoutPlan createWorkoutPlan(WorkoutPlan plan,String token);
   WorkoutPlan getWorkoutPlanById(Long id);
    WorkoutPlan updateWorkoutPlan(Long id, WorkoutPlan plan);
    List<WorkoutPlan> getAllPlans(String token);
    List<WorkoutPlan> getAllPlansAdmin(String token);
    void deleteWorkoutPlan(Long id,String token);
    WorkoutPlan assignWorkoutPlanToTrainingSession(WorkoutPlan wp,String token);
    WorkoutPlan assignProgressToWorkoutPlanToUser(ProgressTracker progress, Long idWorkoutPlan ,String token);
    WorkoutPlan createFullWorkoutPlan(WorkoutPlan plan, String token);
    List<ProgressTracker> getProgressTrackersByWorkoutPlan(Long workoutid,String token);
    }