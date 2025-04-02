package fitrack.achievement.repository;
import fitrack.achievement.entity.LeaderBoard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface LeaderBoardRepository extends JpaRepository<LeaderBoard, String> {
    Optional<LeaderBoard> findByName(String name);
}
