package fitrack.workout.repository;

import fitrack.workout.entity.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExerciseRepository extends JpaRepository<Exercise,Long> {
    @Query("SELECT e FROM Exercise e WHERE e.trainingSession.trainingSessionId = :sessionId AND e.username = :username")
    List<Exercise> findExercisesBySessionAndUsername(
            @Param("sessionId") Long trainingSessionId,
            @Param("username") String username
    );
    List<Exercise> findExercisesByUsername(String  username);
}
