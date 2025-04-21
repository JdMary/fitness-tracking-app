package fitrack.achievement.service;

import fitrack.achievement.entity.Achievement;
import fitrack.achievement.entity.dtos.ExerciseDTO;
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
    //private   ExerciseClient exerciseClient;

    public AchievementService(AchievementRepository repository) {
        this.repository = repository;
       // this.exerciseClient = exerciseClient;
    }

    public void createAchievementFromExerciseId(String exerciseId) {

        ExerciseDTO exercise = new ExerciseDTO(
                exerciseId,
                "Titre Exercice Test",
                "Cardio",
                "medium"
        );
        //ExerciseDTO exercise = exerciseClient.getExerciseById(exerciseId);

        Achievement achievement = new Achievement();
        achievement.setTitle("Achievement for  " + exercise.getCategory());
        achievement.setExerciseId(exerciseId);
        achievement.setProgress(0);
        achievement.setCriteria(exercise.getCategory());

        int xpPoints = switch (exercise.getDifficulty().toLowerCase()) {
            case "easy" -> 50;
            case "medium" -> 100;
            case "hard" -> 200;
            default -> 0;
        };
        achievement.setXpPoints(xpPoints);

        repository.save(achievement);}






    public List<Achievement> findAllAchivements() {
        return repository.findAll();
    }


    public void deleteAchievement(String achieveId) {
        if (!repository.existsById(achieveId)) {
            throw new RuntimeException("Achievement not found with ID: " + achieveId);
        }

        repository.deleteById(achieveId);
    }

    public Achievement updateAchievement(String achieveId, Achievement achievementDetails) {
        Achievement existingAchievement = repository.findById(achieveId)
                .orElseThrow(() -> new RuntimeException("Achievement not found with ID: " + achieveId));

        existingAchievement.setTitle(achievementDetails.getTitle());
        existingAchievement.setXpPoints(achievementDetails.getXpPoints());
        existingAchievement.setCriteria(achievementDetails.getCriteria());
        existingAchievement.setExerciseId(achievementDetails.getExerciseId());

        // ⚠️ On ne touche pas à progress ici, il est automatique.

        return repository.save(existingAchievement);
    }

    public Achievement getAchievementById(String achieveId) {
        return repository.findById(achieveId)
                .orElseThrow(() -> new RuntimeException("Achievement not found with ID: " + achieveId));
    }



    public String updateProgress(String exerciseId, int totalSets) {
        

        Achievement achievement = repository.findByExerciseId(exerciseId)
                .orElseThrow(() -> new RuntimeException("Achievement non trouvé pour cet exercice"));

        float progress = achievement.getProgress();
        StringBuilder message = new StringBuilder();

        if (progress >= 100) {
            message.append("🎉 Félicitations ! Vous avez déjà terminé cet exercice.\n");
        } else {
            float setsCompleted = (progress / 100) * totalSets;
            int roundedSetsCompleted = Math.round(setsCompleted);
            roundedSetsCompleted++;
            progress = (float) (roundedSetsCompleted * 100) / totalSets;

            if (progress >= 100) {
                progress = 100;
                message.append("🎉 Félicitations ! Vous avez terminé cet exercice !\n");
                message.append("Vous avez gagné ").append(achievement.getXpPoints()).append(" points.\n");
            } else {
                int remainingSets = totalSets - roundedSetsCompleted;
                message.append("⏳ Il vous reste ").append(remainingSets).append(" sets à compléter. ");
                message.append("Progression actuelle : ").append(progress).append("%.\n");
            }
        }

        achievement.setProgress(progress);
        repository.save(achievement);

        return message.toString();
    }


    private void gagnerBade() {
    }
}