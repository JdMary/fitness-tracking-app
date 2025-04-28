package fitrack.workout.dto.entity;

import lombok.Data;

import java.util.List;
@Data
public class WgerExerciseResponse {
    private List<ExerciseDetailsDto> results;

}
