package fitrack.workout.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Exercise {
    @Id
    private String exerciseId;
    private String category;
    private int sets;
    private int reps;
    private String difficulty;
    private String videoUrl;
    private String instructions;
    private boolean status;

}
