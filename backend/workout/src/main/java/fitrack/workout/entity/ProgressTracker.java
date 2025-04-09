package fitrack.workout.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.*;

import java.util.Date;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProgressTracker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "progress_id", nullable = false, unique = true)

    private Long progressId;
    private Integer totalRepsCompleted;
    private Integer totalSetsCompleted;
    private Integer TotalExercisesCompleted;
    private Integer burnedCalories;
    private Date date;
    private String username;
    @OneToOne(mappedBy = "progressTracker")
    @JsonIgnore
    private WorkoutPlan workoutPlan;

    public Long getProgressId() {
        return progressId;
    }

    public void setProgressId(Long progressId) {
        this.progressId = progressId;
    }

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
        return TotalExercisesCompleted;
    }

    public void setTotalExercisesCompleted(Integer totalExercisesCompleted) {
        TotalExercisesCompleted = totalExercisesCompleted;
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

    public WorkoutPlan getWorkoutPlan() {
        return workoutPlan;
    }

    public void setWorkoutPlan(WorkoutPlan workoutPlan) {
        this.workoutPlan = workoutPlan;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
