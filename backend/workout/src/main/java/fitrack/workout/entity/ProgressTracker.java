package fitrack.workout.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.*;

import java.util.Date;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProgressTracker {
    @Id
    private Integer progressId;
    private Integer repsCompleted;
    private Integer setsCompleted;
    private Integer exercisesCompleted;
    private Integer burnedCalories;
    private Date date;

}
