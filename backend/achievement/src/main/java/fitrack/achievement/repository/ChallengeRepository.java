package fitrack.achievement.repository;


import feign.Param;
import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.ChallengeStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface ChallengeRepository  extends JpaRepository<Challenge, String> {
    List<Challenge> findByStatusAndStartDateBefore(ChallengeStatus status, LocalDateTime dateTime);

    List<Challenge> findByStatusAndStartDateBetween(ChallengeStatus status, LocalDateTime from, LocalDateTime to);

    List<Challenge> findByStatusAndEndDateBefore(ChallengeStatus status, LocalDateTime endDate);

    @Query("SELECT c FROM Challenge c WHERE " +
            "LOWER(c.title) LIKE LOWER(CONCAT(:keyword, '%')) " +
            "OR LOWER(c.description) LIKE LOWER(CONCAT(:keyword, '%')) " +
            "OR (CAST(c.status AS string)) LIKE LOWER(CONCAT(:keyword, '%')) " +
            "OR (:startDate IS NOT NULL AND c.startDate = :startDate)"
    )
    List<Challenge> findby(
            @Param("keyword") String keyword,
            @Param("startDate") LocalDateTime startDate
    );


    List<Challenge> findByStartDate(LocalDateTime startDate);


    @Query("SELECT c FROM Challenge c WHERE c.userId = :userId")
    List<Challenge> findByUserId(String userId);
}
