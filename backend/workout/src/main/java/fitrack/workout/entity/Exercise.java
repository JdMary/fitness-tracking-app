package fitrack.workout.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long exerciseId;
    private String category;
    private int sets;
    private int reps;
    private String difficulty;
    private String videoUrl;
    private String instructions;
    private boolean status;
    @ManyToOne
    private TrainingSession trainingSession;

}
