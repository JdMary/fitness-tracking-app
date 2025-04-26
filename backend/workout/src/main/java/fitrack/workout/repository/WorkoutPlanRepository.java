package fitrack.workout.repository;


import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.entity.WorkoutPlan;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface WorkoutPlanRepository extends JpaRepository<WorkoutPlan,Long> {
    List<WorkoutPlan> findByUsername(String username);
    @Modifying
    @Transactional
    @Query("DELETE FROM WorkoutPlan wp WHERE wp.workoutPlanId = :workoutPlanId AND wp.username = :username")
    void deleteByWorkoutPlanAndUsername(
            @Param("workoutPlanId") Long workoutPlanId,
            @Param("username") String username
    );
    Optional<WorkoutPlan> findByWorkoutPlanIdAndUsername(Long workoutPlanId, String username);
}
