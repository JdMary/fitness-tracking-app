package fitrack.workout.dto.entity;

import java.time.LocalDateTime;
import java.util.List;

public class WorkoutPlanDTO {
    private String description;
    private int duration;
    private LocalDateTime startDate;
    private String status;
    private String difficulty;
    private List<TrainingSessionDTO> trainingSessions;

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

    public List<TrainingSessionDTO> getTrainingSessions() {
        return trainingSessions;
    }

    public void setTrainingSessions(List<TrainingSessionDTO> trainingSessions) {
        this.trainingSessions = trainingSessions;
    }
}
