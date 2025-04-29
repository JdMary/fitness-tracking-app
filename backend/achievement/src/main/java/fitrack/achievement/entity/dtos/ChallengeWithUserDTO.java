package fitrack.achievement.entity.dtos;


import fitrack.achievement.entity.ChallengeStatus;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ChallengeWithUserDTO {
    private String challengeId;
    private String title;
    private String description;
    private ChallengeStatus status;
    private int xpPoints;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String userId;
    private String name;

    private boolean participation;
    private boolean reminder15;
    private boolean validation;
}
