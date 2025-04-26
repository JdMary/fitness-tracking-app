package fitrack.workout.dto.entity;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SessionEfficiencyDto {
    private Long sessionId;
    private Integer durationMinutes;
    private Integer calories;
    private Double caloriesPerMinute;
}
