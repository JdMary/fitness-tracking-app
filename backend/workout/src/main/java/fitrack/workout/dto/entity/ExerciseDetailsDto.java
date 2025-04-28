package fitrack.workout.dto.entity;

import lombok.Data;

@Data
public class ExerciseDetailsDto {
    private String name;
    private int category;
    private String description;
    private String difficulty;
}
