package fitrack.achievement.service;

import fitrack.achievement.client.AuthClient;
import fitrack.achievement.entity.Reward;
import fitrack.achievement.entity.User;
import fitrack.achievement.repository.RewardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RewardService {
    private final AuthClient authClient;
    private final RewardRepository rewardRepository;

    public void createRewardIfEligible(String userId, int rank) {
        if (rank > 3) return;
        User user = new User();
        user.setId(userId);
        user.setName("Utilisateur inconnu");

        createRewardIfNotExists(user, rank);
    }

    /**
     * Crée une récompense si l'utilisateur atteint un nouveau rang (1, 2 ou 3)
     * et n'a jamais reçu de récompense pour ce rang.
     *
     * @param user L'utilisateur connecté
     * @param rank Le rang actuel dans le leaderboard (1, 2, 3)
     */
    public void createRewardIfNotExists(User user, int rank) {

        Optional<Reward> existingReward = rewardRepository.findByUserIdAndRankAwarded(user.getId(), rank);

        if (existingReward.isPresent()) {
            System.out.println("✅ Reward déjà attribué pour le rang " + rank + " à " + user.getName());
            return;
        }

        Reward reward = new Reward();
        reward.setUserId(user.getId());
        reward.setCreatedAt(LocalDateTime.now());
        reward.setUsed(false);
        reward.setRankAwarded(rank);
        reward.setPromoCode(generatePromoCode(user.getId()));

        // Description personnalisée
        switch (rank) {
            case 1 -> reward.setDescription("🎖 Badge Or + Code promo 20%");
            case 2 -> reward.setDescription("🥈 Badge Bronze + Code promo 10%");
            case 3 -> reward.setDescription("🥉 Code promo 5%");
            default -> reward.setDescription("🎗 Participation honorée");
        }

        rewardRepository.save(reward);
        System.out.println("🎁 Reward créé pour " + user.getName() + " au rang " + rank);
    }

    private String generatePromoCode(String userId) {
        return ("FIT-" + userId.substring(0, 4) + "-" + UUID.randomUUID().toString().substring(0, 6)).toUpperCase();
    }

    public List<Reward> getRewardsByUserToken(String token) {
        if (!token.startsWith("Bearer ")) {
            token = "Bearer " + token;
        }

        ResponseEntity<User> response = authClient.extractUserDetails(token);
        if (response.getBody() == null) {
            System.out.println("❌ Aucun utilisateur trouvé pour le token.");
            throw new RuntimeException("Impossible de récupérer l'utilisateur depuis le token !");
        }

        User user = response.getBody();
        System.out.println("✅ Utilisateur connecté pour récupération des récompenses : " + user.getEmail());

        List<Reward> rewards = rewardRepository.findByUserId(user.getId());
        System.out.println("🎁 Nombre de récompenses trouvées : " + rewards.size());

        return rewards;
    }

}