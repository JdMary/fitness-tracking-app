package fitrack.workout.service;

import fitrack.workout.dto.entity.ProgressTrackerDTO;
import fitrack.workout.dto.entity.WorkoutPlanDTO;
import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.WorkoutPlan;

import java.util.List;

public interface IWorkoutPlan {
    public WorkoutPlanDTO createWorkoutPlanDTO(WorkoutPlanDTO dto);
        WorkoutPlanDTO getWorkoutPlanById(Long id);
    List<WorkoutPlanDTO> getAllPlans();
    WorkoutPlanDTO updateWorkoutPlan(Long id, WorkoutPlanDTO dto);
    void deleteWorkoutPlan(Long id);
     WorkoutPlan assignWorkoutPlanToTrainingSession(WorkoutPlan wp);
     WorkoutPlan assignProgressToWorkoutPlan(ProgressTracker progress, Long idWorkoutPlan);
    }