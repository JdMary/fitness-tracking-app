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
    private LocalDateTime endDate;


    @JsonProperty("description")
    @Column(name = "description", length = 2000)
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
    @Column(name = "validation")
    private boolean validation = false;



}