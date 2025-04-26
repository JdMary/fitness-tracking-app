package fitrack.workout.dto.entity;

import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SessionInsightsDto {
    private List<SessionEfficiencyDto> sessions;
    private SessionEfficiencyDto bestSession;
    private Double averageCaloriesPerMinute;
    private String recommendation;
}