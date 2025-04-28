package fitrack.achievement.entity.dtos;

import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.ChallengeStatus;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AIChallengeReponse {

    private String title;
    private String description;
    private int xpPoints;
    private String startDate;
    private String endDate;
    private ChallengeStatus status;



}