package fitrack.achievement.controller;

import fitrack.achievement.entity.Achievement;
import fitrack.achievement.entity.dtos.AchievementRequest;
import fitrack.achievement.service.AchievementService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/achievements")
public class AchievementController {

    @Autowired
    private  final AchievementService service;

    public AchievementController(AchievementService service) {
        this.service = service;
    }

    @GetMapping("/getById/{achieveId}")
    public ResponseEntity<Achievement> getAchievementById(@PathVariable String achieveId) {
        Achievement achievement = service.getAchievementById(achieveId);
        return ResponseEntity.ok(achievement);
    }




    @PostMapping("/addAchievement/{exerciseId}")
    public ResponseEntity<String> createAchievement(@PathVariable String exerciseId) {
        try {
            service.createAchievementFromExerciseId(exerciseId);
            return ResponseEntity.ok("✅ Achievement créé avec succès pour l'exercice : " + exerciseId);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Erreur : " + e.getMessage());
        }}


    @DeleteMapping("/delete/{achieveId}")
    public ResponseEntity<Void> deleteAchievement(@PathVariable String achieveId) {
        service.deleteAchievement(achieveId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/liste")
    public ResponseEntity<List<Achievement>> findAllAchievements() {
        return ResponseEntity.ok(service.findAllAchivements());
    }




    @PutMapping("/update/{achieveId}")
    public ResponseEntity<Achievement> updateAchievement(@PathVariable String achieveId, @RequestBody Achievement achievementDetails) {
        Achievement updatedAchievement = service.updateAchievement(achieveId, achievementDetails);
        return ResponseEntity.ok(updatedAchievement);
    }




    @PutMapping("/updateProgress/{exerciseId}/{totalSets}")
    public ResponseEntity<String> updateProgress(@PathVariable("exerciseId") String exerciseId,
                                                 @PathVariable("totalSets") int totalSets) {
        try {
            String resultMessage = service.updateProgress(exerciseId, totalSets);
            return ResponseEntity.ok(resultMessage);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Erreur : " + e.getMessage());
        }
    }










}