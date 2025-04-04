package fitrack.workout.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WorkoutPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long workplanId;
    private String description;
    private int duration;
    private LocalDateTime startDate;
    private String status;
    private String difficulty;

    @OneToOne(mappedBy = "workoutPlan", cascade = CascadeType.ALL)
    private ProgressTracker progressTracker ;

    @OneToMany(mappedBy = "workoutPlan")
    private List<TrainingSession> trainingSessions;


}
