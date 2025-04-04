package fitrack.workout.repository;

import fitrack.workout.entity.TrainingSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainingSessionRepository extends JpaRepository<TrainingSession,Long> {
}
