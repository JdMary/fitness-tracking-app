package fitrack.achievement.entity;

import fitrack.achievement.repository.AchievementRepository;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonProperty;
@Entity

@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@EqualsAndHashCode(of = "achieveId")
@Getter
@Setter
public class Achievement  {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)


    @JsonProperty("achieveId")
    private String achieveId;



    @JsonProperty("title")
    private String title;



    @Column(name="xp_points")
    @JsonProperty("xpPoints")
    private int xpPoints;


    @JsonProperty("criteria")
    private String criteria;



    @JsonProperty("progress")
    private float progress;


    @Column(name = "exercise_id")
    @JsonProperty("exerciseId")
    private String exerciseId;

    public String getAchieveId() {
        return achieveId;
    }

    public void setAchieveId(String achieveId) {
        this.achieveId = achieveId;
    }

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

    public String getCriteria() {
        return criteria;
    }

    public void setCriteria(String criteria) {
        this.criteria = criteria;
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
}
