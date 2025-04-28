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
    @Query("SELECT e FROM Exercise e WHERE e.exerciseId = :exerciseId AND e.username = :username")
    Exercise findExercisesByExerciseIdAndUsername(
            @Param("exerciseId") Long exerciseId,
            @Param("username") String username
    );
    List<Exercise> findExercisesByUsername(String  username);

    @Query("""
    SELECT e
    FROM Exercise e
    JOIN e.trainingSession ts
    WHERE ts.workoutPlan.workoutPlanId = :workoutPlanId
    """)
    List<Exercise> findExercisesByTrainingSessionWorkoutPlanId(@Param("workoutPlanId") Long workoutPlanId);

}
