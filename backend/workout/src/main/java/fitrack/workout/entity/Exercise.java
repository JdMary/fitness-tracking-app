package fitrack.workout.entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Getter
@Setter

public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @JsonProperty("exercieId")
    private String exerciseId;


    @JsonProperty("category")
    private String category;


    @JsonProperty("sets")
    private int sets;

    @JsonProperty("reps")
    private int reps;


    @JsonProperty("difficulty")
    private String difficulty;


    @JsonProperty("video_url")
    private String videoUrl;


    @JsonProperty("instructions")
    private String instructions;

    @JsonProperty("status")
    private boolean status;

    public String getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(String exerciseId) {
        this.exerciseId = exerciseId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getSets() {
        return sets;
    }

    public void setSets(int sets) {
        this.sets = sets;
    }

    public int getReps() {
        return reps;
    }

    public void setReps(int reps) {
        this.reps = reps;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
