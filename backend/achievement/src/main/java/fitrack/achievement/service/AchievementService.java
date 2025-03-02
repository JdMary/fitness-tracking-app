package fitrack.achievement.service;

import fitrack.achievement.repository.AchievementRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AchievementService {
    private AchievementRepository repository;
}
