package fitrack.workout.repository;

import fitrack.workout.dto.entity.SessionEfficiencyRawProjection;
import fitrack.workout.entity.TrainingSession;
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
    @Query("SELECT ts FROM TrainingSession ts WHERE ts.workoutPlan.workoutPlanId = :workoutPlanId")
    List<TrainingSession> findByWorkoutPlanId(@Param("workoutPlanId") Long workoutPlanId);


    @Query("""
    SELECT 
        ts.trainingSessionId as sessionId,
        ts.entryTime as entryTime,
        ts.exitTime as exitTime,
        pt.burnedCalories as calories
    FROM TrainingSession ts
    JOIN ts.workoutPlan wp
    JOIN wp.progressTracker pt
    WHERE ts.exitTime IS NOT NULL
    AND ts.username = :username
""")
    List<SessionEfficiencyRawProjection> findSessionRawData(@Param("username") String username);

}
