package fitrack.achievement.entity.dtos;


import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class AchievementRequest {
    @Getter
    @Setter
    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getXpPoints() {
        return xpPoints;
    }

    public void setXpPoints(int xpPoints) {
        this.xpPoints = xpPoints;
    }

    public float getProgress() {
        return progress;
    }

    public void setProgress(float progress) {
        this.progress = progress;
    }

    public String getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(String exerciseId) {
        this.exerciseId = exerciseId;
    }

    @Getter
    @Setter
    private int xpPoints;

    @Getter
    @Setter
    private float progress;

    @Getter
    @Setter
    private String exerciseId;
}
