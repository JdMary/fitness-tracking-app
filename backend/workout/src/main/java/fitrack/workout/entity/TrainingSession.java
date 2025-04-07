package fitrack.workout.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
        @ManyToOne
        @JoinColumn(name = "workplan_id")
        @JsonBackReference
        private WorkoutPlan workoutPlan;

        @OneToMany(mappedBy = "trainingSession")
        private List<Exercise> exercises=new ArrayList<>();

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
