package fitrack.workout.dto.entity;

import java.time.LocalDateTime;

public interface SessionEfficiencyRawProjection {
    Long getSessionId();
    LocalDateTime getEntryTime();
    LocalDateTime getExitTime();
    Integer getCalories();
}
