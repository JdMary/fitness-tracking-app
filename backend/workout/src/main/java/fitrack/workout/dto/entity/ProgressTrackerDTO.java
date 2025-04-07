package fitrack.workout.dto.entity;

import java.util.Date;

public class ProgressTrackerDTO {
    private Integer totalRepsCompleted;
    private Integer totalSetsCompleted;
    private Integer totalExercisesCompleted;
    private Integer burnedCalories;
    private Date date;
    private Long workoutPlanId;

    public Integer getTotalRepsCompleted() {
        return totalRepsCompleted;
    }

    public void setTotalRepsCompleted(Integer totalRepsCompleted) {
        this.totalRepsCompleted = totalRepsCompleted;
    }

    public Integer getTotalSetsCompleted() {
        return totalSetsCompleted;
    }

    public void setTotalSetsCompleted(Integer totalSetsCompleted) {
        this.totalSetsCompleted = totalSetsCompleted;
    }

    public Integer getTotalExercisesCompleted() {
        return totalExercisesCompleted;
    }

    public void setTotalExercisesCompleted(Integer totalExercisesCompleted) {
        this.totalExercisesCompleted = totalExercisesCompleted;
    }

    public Integer getBurnedCalories() {
        return burnedCalories;
    }

    public void setBurnedCalories(Integer burnedCalories) {
        this.burnedCalories = burnedCalories;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Long getWorkoutPlanId() {
        return workoutPlanId;
    }

    public void setWorkoutPlanId(Long workoutPlanId) {
        this.workoutPlanId = workoutPlanId;
    }
}
