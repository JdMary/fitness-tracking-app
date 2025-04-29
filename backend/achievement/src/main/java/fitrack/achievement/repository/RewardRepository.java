package fitrack.achievement.repository;

import fitrack.achievement.entity.Reward;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RewardRepository extends JpaRepository<Reward, String> {

    List<Reward> findByUserId(String userId);


    Optional<Reward> findByUserIdAndRankAwarded(String userId, int rankAwarded);


    Optional<Reward> findByPromoCodeAndUsedTrue(String promoCode);
}
