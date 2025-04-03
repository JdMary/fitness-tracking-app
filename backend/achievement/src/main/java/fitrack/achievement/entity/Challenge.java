package fitrack.achievement.entity;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Challenge {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @JsonProperty("challenge_id")
    @Column(name = "challenge_id")
    private String challengeId;

    @JsonProperty("title")
    @Column(name = "title")
    private String title;

    @Column(name = "start_date")
    private LocalDateTime startDate;


    @Column(name = "end_date")
    private LocalDateTime  endDate;


    @JsonProperty("description")
    @Column(name = "description")
    private String description;

    @JsonProperty("xpPoints")
    @Column(name = "xp_points")
    private int xpPoints;

    @Column(name = "user_id")
    private String userId;


    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private ChallengeStatus status;

    @Column(name = "reminder_15")
    private boolean reminder15;
    @Column(name = "participation")
    private boolean participation = false;

    public boolean isParticipation() {
        return participation;
    }

    public void setParticipation(boolean participation) {
        this.participation = participation;
    }

    public String getChallengeId() {
        return challengeId;
    }

    public void setChallengeId(long challengeId) {
        this.challengeId = challengeId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ChallengeStatus getStatus() {
        return status;
    }

    public void setStatus(ChallengeStatus status) {
        this.status = status;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public int getXpPoints() {
        return xpPoints;
    }

    public void setXpPoints(int xpPoints) {
        this.xpPoints = xpPoints;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public boolean isReminder15() {
        return reminder15;
    }

    public void setReminder15(boolean reminder15) {
        this.reminder15 = reminder15;
    }
}
