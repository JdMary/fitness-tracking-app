package fitrack.achievement.repository;

import fitrack.achievement.entity.Achievement;
import fitrack.achievement.entity.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AchievementRepository extends JpaRepository<Achievement, String> {

    Optional<Achievement> findByExerciseId(String exerciseId);

}
