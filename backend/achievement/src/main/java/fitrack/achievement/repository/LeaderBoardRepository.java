package fitrack.achievement.repository;


import fitrack.achievement.entity.LeaderBoard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaderBoardRepository extends JpaRepository<LeaderBoard, Integer> {
}
