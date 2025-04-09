package fitrack.workout.service;

import fitrack.workout.dto.entity.ProgressTrackerDTO;
import fitrack.workout.dto.entity.WorkoutPlanDTO;
import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.WorkoutPlan;

import java.util.List;

public interface IWorkoutPlan {
    WorkoutPlan createWorkoutPlan(WorkoutPlan plan);
    WorkoutPlan getWorkoutPlanById(Long id);
    WorkoutPlan updateWorkoutPlan(Long id, WorkoutPlan plan);
    List<WorkoutPlan> getAllPlans();
    void deleteWorkoutPlan(Long id);
    WorkoutPlan assignWorkoutPlanToTrainingSession(WorkoutPlan wp,String token);
    WorkoutPlan assignProgressToWorkoutPlanToUser(ProgressTracker progress, Long idWorkoutPlan ,String token);
    }