package fitrack.achievement.repository;


import fitrack.achievement.entity.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChallengeRepository  extends JpaRepository<Challenge, String> {
}
