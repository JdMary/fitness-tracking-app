package fitrack.workout.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDate;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TrainingSession {
    @Id
    private String trainingSessionId;
    private boolean guided;
    private LocalDate entryTime;
    private LocalDate exitTime;
}
