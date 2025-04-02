package fitrack.achievement.service;

import fitrack.achievement.entity.Achievement;
import fitrack.achievement.repository.AchievementRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AchievementService {

    @Autowired
    private AchievementRepository repository;


    public void save(Achievement achievement) {
        repository.save(achievement);
    }


    public List<Achievement> findAllAchivements() {
        return repository.findAll();
    }
    public void updateProgress(String exerciseId, int totalSets,String difficulty) {

        Achievement achievement = repository.findByExerciseId(exerciseId)
                .orElseThrow(() -> new RuntimeException("Achievement non trouvé pour cet exercice"));


        float progress = achievement.getProgress();
        if (progress >= 100) {
            System.out.println("Félicitations ! Vous avez déjà terminé cet exercice.");
            return;
        }

        float setsCompleted = (progress / 100) * totalSets;
        int roundedSetsCompleted =  Math.round(setsCompleted);
        roundedSetsCompleted++;


        progress = (float) (roundedSetsCompleted * 100) /totalSets;



        if (progress >= 100) {
            progress = 100;
            System.out.println("Félicitations ! Vous avez terminé cet exercice !");
            int xpGagn = switch (difficulty.toLowerCase()) {
                case "easy" -> 50;
                case "medium" -> 100;
                case "hard" -> {
                    gagnerBade(); 
                    yield 200; 
                }
                default -> 0;
            };
            achievement.setXpPoints(xpGagn);
            System.out.println("Félicitations ! Vous avez terminé cet exercice ! Vous avez gagnez "+xpGagn +"points");

        } else {
            int remainingSets = totalSets - roundedSetsCompleted;
            System.out.println("Il vous reste " + remainingSets + " sets à compléter. Progression actuelle : " + progress + "%");
        }
        achievement.setProgress(progress);
        repository.save(achievement);

    }

    private void gagnerBade() {
    }
}