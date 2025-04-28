package fitrack.achievement.entity.dtos;

import fitrack.achievement.entity.ChallengeStatus;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Getter
@Setter
public class ChallengeUpdateRequest {
    private String title;
    private String description;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Integer xpPoints;
    private ChallengeStatus status;
    private String userId;
    private boolean validation;
    private boolean reminder15;
    private boolean participation;

}