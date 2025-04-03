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

@RequestMapping("/api/v1/achievements")
public class AchievementController {

    @Autowired
    private  final AchievementService service;

    public AchievementController(AchievementService service) {
        this.service = service;
    }



    @PostMapping("/addAchievement")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody AchievementRequest request) {
        Achievement achievement = new Achievement();
        achievement.setTitle(request.getTitle());
        achievement.setXpPoints(request.getXpPoints());
        achievement.setProgress(request.getProgress());
        achievement.setExerciseId(request.getExerciseId());

        service.save(achievement);
    }



    @GetMapping("/liste")
    public ResponseEntity<List<Achievement>> findAllAchievements() {
        return ResponseEntity.ok(service.findAllAchivements());
    }





    @PutMapping("/updateProgress/{exerciseId}/{totalSets}/{difficulty}")
    public ResponseEntity<String> updateProgress(@PathVariable("exerciseId") String exerciseId,
                                                 @PathVariable("totalSets") int totalSets,
                                                 @PathVariable("difficulty") String difficulty
                                                 ) {
        service.updateProgress(exerciseId, totalSets,difficulty);
        return ResponseEntity.ok("Progression mise à jour avec succès");
    }









}