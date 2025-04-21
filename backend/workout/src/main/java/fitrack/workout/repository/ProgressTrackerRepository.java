package fitrack.workout.repository;

import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.TrainingSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProgressTrackerRepository extends JpaRepository<ProgressTracker,Long> {

}
