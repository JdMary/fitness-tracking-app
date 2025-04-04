package fitrack.workout.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TrainingSession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long trainingSessionId;
    private boolean guided;
    private LocalDateTime entryTime;
    private LocalDateTime exitTime;
    @ManyToOne
    @JoinColumn(name = "workplan_id")
    private WorkoutPlan workoutPlan;

    @OneToMany(mappedBy = "trainingSession")
    private List<Exercise> exercises=new ArrayList<>();


}
