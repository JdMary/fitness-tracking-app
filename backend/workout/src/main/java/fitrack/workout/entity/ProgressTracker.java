package fitrack.workout.entity;

import jakarta.persistence.*;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long progressId;
    private Integer toatalRepsCompleted;
    private Integer toatalSetsCompleted;
    private Integer TotalExercisesCompleted;
    private Integer burnedCalories;
    private Date date;
    @OneToOne
    @JoinColumn(name = "workplan_id")
    private WorkoutPlan workoutPlan;


}
