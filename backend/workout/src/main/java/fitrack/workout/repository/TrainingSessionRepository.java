package fitrack.workout.repository;

import fitrack.workout.entity.TrainingSession;
import fitrack.workout.entity.WorkoutPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TrainingSessionRepository extends JpaRepository<TrainingSession,Long> {
    List<TrainingSession> findByUsername(String username);
    @Query("SELECT ts FROM TrainingSession ts WHERE ts.workoutPlan.workoutPlanId = :workoutPlanId AND ts.username = :username")
    List<TrainingSession> findByWorkoutPlanAndUsername(
            @Param("workoutPlanId") Long workoutPlanId,
            @Param("username") String username
    );
    Optional<TrainingSession> findByTrainingSessionIdAndUsername(Long workoutPlanId, String username);

}
