package fitrack.achievement.entity;

import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Achievement {
    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long achieveId;

    private String title;
    private int xpPoints;
    private String criteria;
    private String leaderboardImpact;
    private float progress;

    public long getAchieveId() {
        return achieveId;
    }

    public void setAchieveId(long achieveId) {
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
}
