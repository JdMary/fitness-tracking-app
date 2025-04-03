package fitrack.achievement.repository;


import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.ChallengeStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ChallengeRepository  extends JpaRepository<Challenge, String> {
    List<Challenge> findByStatusAndStartDateBefore(ChallengeStatus status, LocalDateTime dateTime);

    List<Challenge> findByStatusAndStartDateBetween(ChallengeStatus status, LocalDateTime from, LocalDateTime to);



}
