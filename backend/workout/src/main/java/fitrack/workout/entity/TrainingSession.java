package fitrack.workout.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
        public class TrainingSession {
            @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            @Column(name = "training_session_id", nullable = false, unique = true)
            private Long trainingSessionId;
            private boolean guided;
            private LocalDateTime entryTime;
            private LocalDateTime exitTime;
            private String username;
            private String trainerusername;
            private boolean isCompleted;

            @ManyToOne
            @JoinColumn(name = "workplan_id")
            @JsonBackReference
            private WorkoutPlan workoutPlan;

            @OneToMany(mappedBy = "trainingSession" ,cascade = CascadeType.ALL, orphanRemoval = true)
            @JsonManagedReference
            private List<Exercise> exercises=new ArrayList<>();

    @Override
    public String toString() {
        return "TrainingSession{" +
                "trainingSessionId=" + trainingSessionId +
                ", guided=" + guided +
                ", entryTime=" + entryTime +
                ", exitTime=" + exitTime +
                ", username='" + username + '\'' +
                ", workoutPlan=" + workoutPlan +
                ", exercises=" + exercises +
                '}';
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }




    public Long getTrainingSessionId() {
        return trainingSessionId;
    }

    public void setTrainingSessionId(Long trainingSessionId) {
        this.trainingSessionId = trainingSessionId;
    }

    public boolean isGuided() {
        return guided;
    }

    public void setGuided(boolean guided) {
        this.guided = guided;
    }

    public LocalDateTime getEntryTime() {
        return entryTime;
    }

    public void setEntryTime(LocalDateTime entryTime) {
        this.entryTime = entryTime;
    }

    public LocalDateTime getExitTime() {
        return exitTime;
    }

    public void setExitTime(LocalDateTime exitTime) {
        this.exitTime = exitTime;
    }

    public WorkoutPlan getWorkoutPlan() {
        return workoutPlan;
    }

    public void setWorkoutPlan(WorkoutPlan workoutPlan) {
        this.workoutPlan = workoutPlan;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }
}
