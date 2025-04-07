package fitrack.workout.dto.entity;

import java.time.LocalDateTime;
import java.util.List;

public class TrainingSessionDTO {
    private boolean guided;
    private LocalDateTime entryTime;
    private LocalDateTime exitTime;
    private List<ExerciseDTO> exercises;

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

    public List<ExerciseDTO> getExercises() {
        return exercises;
    }

    public void setExercises(List<ExerciseDTO> exercises) {
        this.exercises = exercises;
    }
}
