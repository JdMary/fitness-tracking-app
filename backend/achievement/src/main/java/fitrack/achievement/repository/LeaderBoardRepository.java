package fitrack.achievement.repository;
import feign.Param;
import fitrack.achievement.entity.LeaderBoard;
import fitrack.achievement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;


public interface LeaderBoardRepository extends JpaRepository<LeaderBoard, String> {
    Optional<LeaderBoard> findByName(String name);
//    @Query("SELECT l FROM LeaderBoard l JOIN User u ON u.boardId = l.boardId WHERE u.userId = :userId")
//    LeaderBoard findLeaderBoardByUserId(@Param("userId") String userId);
//
//    // ✅ Trouver tous les users liés au même board que le user donné
//    @Query(value = "SELECT * FROM user WHERE board_id = :boardId", nativeQuery = true)
//    List<User> findUsersByBoardId(@Param("boardId") String boardId);

}
