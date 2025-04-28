package fitrack.achievement.service;

import fitrack.achievement.client.AuthClient;
import fitrack.achievement.entity.Achievement;
import fitrack.achievement.entity.dtos.ExerciseDTO;
import fitrack.achievement.repository.AchievementRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AchievementService {


    private final AchievementRepository repository;
    //private   ExerciseClient exerciseClient;
    private final AuthClient authClient;


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

        repository.save(achievement);
    }


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

        List<String> errors = new ArrayList<>();

        if (achievementDetails.getTitle() == null || achievementDetails.getTitle().trim().length() < 5) {
            errors.add("title: Title must be at least 5 characters long and not null.");
        }

        if (achievementDetails.getCriteria() == null || achievementDetails.getCriteria().trim().length() < 5) {
            errors.add("criteria: Criteria must be at least 5 characters long and not null.");
        }

        if (achievementDetails.getXpPoints()   < 0||achievementDetails.getXpPoints() ==0) {
            errors.add("xpPoints:Xp Points must be positive.");
        }

        if (achievementDetails.getProgress()< 0) {
            errors.add("progress: Progress must be zero or positive.");
        }
        if (achievementDetails.getProgress()>100) {
            errors.add("progress: Progress must <100.");
        }




        if (!errors.isEmpty()) {
            throw new IllegalArgumentException(String.join(" | ", errors));
        }


        existingAchievement.setTitle(achievementDetails.getTitle());
        existingAchievement.setXpPoints(achievementDetails.getXpPoints());
        existingAchievement.setCriteria(achievementDetails.getCriteria());
        existingAchievement.setProgress(achievementDetails.getProgress());
        existingAchievement.setExerciseId(achievementDetails.getExerciseId());

        return repository.save(existingAchievement);
    }

    public Achievement getAchievementById(String achieveId) {
        return repository.findById(achieveId)
                .orElseThrow(() -> new RuntimeException("Achievement not found with ID: " + achieveId));
    }


    public String updateProgress(String exerciseId, int totalSets) {


        Achievement achievement = repository.findByExerciseId(exerciseId)
                .orElseThrow(() -> new RuntimeException("Achievement not found for this exercise"));

        float progress = achievement.getProgress();
        StringBuilder message = new StringBuilder();

        if (progress >= 100) {
            message.append("🎉Congratulations ! You have already completed this exercise.\n");
        } else {
            float setsCompleted = (progress / 100) * totalSets;
            int roundedSetsCompleted = Math.round(setsCompleted);
            roundedSetsCompleted++;
            progress = (float) (roundedSetsCompleted * 100) / totalSets;

            if (progress >= 100) {
                progress = 100;

                message.append("🎉 Congratulations ! You have completed this exercise !\n");
                message.append("You won ").append(achievement.getXpPoints()).append(" points.\n");
            } else {
                int remainingSets = totalSets - roundedSetsCompleted;
                message.append("⏳ You still have ").append(remainingSets).append(" sets to complete. ");
                message.append("Current progress : ").append(progress).append("%.\n");
            }
        }

        achievement.setProgress(progress);
        repository.save(achievement);

        return message.toString();
    }


}