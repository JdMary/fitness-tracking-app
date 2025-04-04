package fitrack.workout.service;

import fitrack.workout.entity.WorkoutPlan;

import java.util.List;

public interface IWorkoutPlan {
    WorkoutPlan createWorkoutPlan(WorkoutPlan plan);
    WorkoutPlan getWorkoutPlanById(Long id);
    List<WorkoutPlan> getAllWorkoutPlans();
    WorkoutPlan updateWorkoutPlan(Long id, WorkoutPlan plan);
    void deleteWorkoutPlan(Long id);
}
