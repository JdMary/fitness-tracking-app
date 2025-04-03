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


    @JsonProperty("achieve_id")
    private String achieveId;


    @Getter
    @Setter
    @JsonProperty("title")
    private String title;


    @Getter
    @Setter
    @Column(name="xp_points")
    @JsonProperty("xpPoints")
    private int xpPoints;

    @Getter
    @Setter
    @JsonProperty("criteria")
    private String criteria;

    @Getter
    @Setter
    @Column(name = "leaderboard_impact")
    @JsonProperty("leaderboardImpact")
    private String leaderboardImpact;

    @Getter
    @Setter
    @JsonProperty("progress")
    private float progress;

    @Getter
    @Setter
    @Column(name = "exercise_id")
    @JsonProperty("exercieId")
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

    public String getLeaderboardImpact() {
        return leaderboardImpact;
    }

    public void setLeaderboardImpact(String leaderboardImpact) {
        this.leaderboardImpact = leaderboardImpact;
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
