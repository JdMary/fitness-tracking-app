package fitrack.workout.service;

import fitrack.workout.client.AchievementClient;
import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.dtos.AchievementRequest;
import fitrack.workout.repository.ExerciseRepository;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class ExerciseService {
    @Autowired
    private  ExerciseRepository repository;

    @Autowired
   private AchievementClient achievementClient;
    public void saveExercise(Exercise exercise) {
        // Sauvegarde l’exercice
        repository.save(exercise);

        // Crée l’achievement automatiquement
        AchievementRequest achievement = new AchievementRequest();
        achievement.setTitle("Achieveemnet :"+exercise.getCategory());
        achievement.setCriteria(exercise.getCategory());
        achievement.setXpPoints(0);
        achievement.setProgress(0);
        achievement.setExerciseId(exercise.getExerciseId());


        achievementClient.createAchievement(achievement);
    }



    public void completeSet(String exerciseId) {

        Exercise exercise = repository.findById(exerciseId)
                .orElseThrow(() -> new RuntimeException("Exercice non trouvé"));

        // Récupérer le nombre total de sets
        int totalSets = exercise.getSets();
String difficulty=exercise.getDifficulty();
        // Appeler le microservice Achievement pour mettre à jour le progress
        achievementClient.updateProgress(exercise.getExerciseId(), totalSets,difficulty);
    }

}


