package fitrack.achievement.entity.dtos;



import lombok.Data;

@Data
public class ExerciseDTO {
    private String exerciseId;
    private String title;
    private String category;
    private String difficulty;

    public String getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(String exerciseId) {
        this.exerciseId = exerciseId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public ExerciseDTO(String exerciseId, String title, String category, String difficulty) {
        this.exerciseId = exerciseId;
        this.title = title;
        this.category = category;
        this.difficulty = difficulty;
    }
}
