package fitrack.workout.repository;

import fitrack.workout.entity.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository<Exercise,Long> {
}
