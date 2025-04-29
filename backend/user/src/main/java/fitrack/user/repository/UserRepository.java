package fitrack.user.repository;

import fitrack.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, String> {
    User findByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.lastLogin < :date")
    List<User> findInactiveUsers(@Param("date") java.time.LocalDateTime date);

    long countByInactive(boolean inactive);

    @Query("SELECT FUNCTION('DATE_FORMAT', u.signupDate, '%Y-%M') AS month, COUNT(u) " +
            "FROM User u " +
            "WHERE FUNCTION('DATE_FORMAT', u.signupDate, '%M') = :month " +
            "GROUP BY FUNCTION('DATE_FORMAT', u.signupDate, '%Y-%M')")
    List<Object[]> countUsersBySignupMonth(@Param("month") String month);


    List<User> findUsersByBoardId(String boardId);


    @Query("SELECT u.boardId FROM User u WHERE u.id = :userId")
    String findBoardIdByUserId(@Param("userId") String userId);

}
