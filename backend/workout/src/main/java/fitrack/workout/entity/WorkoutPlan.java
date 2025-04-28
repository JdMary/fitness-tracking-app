package fitrack.workout.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
public class WorkoutPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "workplan_id", nullable = false, unique = true)
    private Long workoutPlanId;

    private String description;
    private int duration;
    @Column(name = "start_date")
    private LocalDateTime startDate;
    private String status;
    private String difficulty;
    private String username;
    @Enumerated(EnumType.STRING)
    private Goal goal;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private ProgressTracker progressTracker;

    @OneToMany(mappedBy = "workoutPlan", cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonManagedReference
    private List<TrainingSession> trainingSessions;





    public Goal getGoal() {
        return goal;
    }

    public void setGoal(Goal goal) {
        this.goal = goal;
    }


    public void setProgressTracker(ProgressTracker progressTracker) {
        this.progressTracker = progressTracker;
    }



    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public ProgressTracker getProgressTracker() {
        return progressTracker;
    }

    public List<TrainingSession> getTrainingSessions() {
        return trainingSessions;
    }

    public void setTrainingSessions(List<TrainingSession> trainingSessions) {
        this.trainingSessions = trainingSessions;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}