package fitrack.achievement.service;

import fitrack.achievement.entity.Achievement;
import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.ChallengeStatus;
import fitrack.achievement.repository.AchievementRepository;
import fitrack.achievement.repository.ChallengeRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChallengeService {


    @Autowired
    private ChallengeRepository repository;


    @Autowired
    private ChallengeRepository challengeRepository;

    public Challenge addChallenge(Challenge challenge) {
        LocalDateTime now = LocalDateTime.now();

        // Vérifier que la date et l'heure de début sont supérieures à la date et l'heure actuelles
        if (challenge.getStartDate().isBefore(now)) {
            throw new IllegalArgumentException("La date et l'heure de début doivent être supérieures à la date et l'heure actuelles.");
        }

        // Vérifier que la date et l'heure de fin sont supérieures à la date et l'heure de début
        if (challenge.getEndDate() != null && challenge.getEndDate().isBefore(challenge.getStartDate())) {
            throw new IllegalArgumentException("La date et l'heure de fin doivent être supérieures à la date et l'heure de début.");
        }

        // Initialiser le statut par défaut
        challenge.setStatus(ChallengeStatus.PENDING); // Statut par défaut

        // Enregistrer le défi dans la base de données
        return challengeRepository.save(challenge);
    }
    public List<Challenge> findAllChallenge() { return repository.findAll();
    }
}
