package fitrack.achievement.service;

import fitrack.achievement.entity.Achievement;
import fitrack.achievement.entity.Challenge;
import fitrack.achievement.repository.AchievementRepository;
import fitrack.achievement.repository.ChallengeRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChallengeService {


    @Autowired
    private ChallengeRepository repository;

    public void save(Challenge challenge) {
        repository.save(challenge);
    }


    public List<Challenge> findAllChallenge() { return repository.findAll();
    }
}
