package fitrack.achievement.controller;

import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.User;
import fitrack.achievement.entity.dtos.AIChallengeReponse;
import fitrack.achievement.entity.dtos.ChallengeUpdateRequest;
import fitrack.achievement.scheduler.ChallengeScheduler;



import fitrack.achievement.service.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/challenges")

public class ChallengeController {

    @GetMapping("/test")
    public String test() {
        return "Service Challenge fonctionne";
    }
    @Autowired
    private  final ChallengeService service;

    private final ChallengeScheduler challengeScheduler;

    public ChallengeController(ChallengeService service,  ChallengeScheduler challengeScheduler) {
        this.service = service;

        this.challengeScheduler = challengeScheduler;

    }

    @PostMapping("/addChallenge")
    public ResponseEntity<?> save(@RequestBody Challenge challenge, @RequestHeader("Authorization") String token) {
        try {
            System.out.println("Received Challenge: " + challenge);
            Challenge savedChallenge = service.addChallenge(challenge, token);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedChallenge);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body( e.getMessage());
        }
    }

    @GetMapping("/liste")
    public ResponseEntity<?> findAllChallenges() {
        try {
            return ResponseEntity.ok(service.findAllChallenge());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Erreur lors de la récupération des défis : " + e.getMessage());
        }
    }

    @GetMapping("/getById/{challengeId}")
    public ResponseEntity<?> getChallengeById(@PathVariable String challengeId) {
        try {
            return ResponseEntity.ok(service.findChallengeById(challengeId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Erreur : " + e.getMessage());
        }
    }

    @DeleteMapping("/deleteChallenge/{challengeId}")
    public ResponseEntity<?> deleteChallenge(@PathVariable String challengeId) {
        try {
            return ResponseEntity.ok(service.deleteChallenge(challengeId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Erreur lors de la suppression du défi : " + e.getMessage());
        }
    }
    @PutMapping("/update/{challengeId}")
    public ResponseEntity<?> updateChallenge(
            @PathVariable String challengeId,
            @RequestBody ChallengeUpdateRequest updatedChallenge
    ) {
        try {
            service.updateChallenge(challengeId, updatedChallenge);
            return ResponseEntity.ok("✅ Défi mis à jour avec succès !");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("❌ Erreur lors de la mise à jour du défi : " + e.getMessage());
        }
    }


    @GetMapping("/findBy")
    public ResponseEntity<List<Challenge>> findBy(
            @RequestParam String keyword,
            @RequestParam(required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate
    ) {
        List<Challenge> results = service.findBy(keyword, startDate);
        return ResponseEntity.ok(results);
    }



    @PutMapping("/participate/{challengeId}")
    public ResponseEntity<String> participate(@PathVariable String challengeId) {
        String userId = "98df1738-1a67-4166-80cf-0b78c992f9bdvd";
        try {
            service.participate(challengeId, userId);
            return ResponseEntity.ok(Collections.singletonMap("message", "🚀 Tu es en train de participer au défi maintenant !").toString());

        } catch (RuntimeException e) {
            return ResponseEntity
                    .badRequest()
                    .body("❌ Erreur : " + e.getMessage());
        }
    }


    @PutMapping("/validate/{challengeId}")
    public ResponseEntity<String> validateChallenge(@PathVariable String challengeId) {

        String userId = "98df1738-1a67-4166-80cf-0b78c992f9bdvd";
        try {
        Challenge validated = service.validateChallenge(challengeId, userId);

        return ResponseEntity.ok("🎉 Félicitations ! Tu as terminé le défi \"" + validated.getTitle() + "\" avec succès ! tu a gangé "+validated.getXpPoints());

        } catch (RuntimeException e) {
            return ResponseEntity
                    .badRequest()
                    .body("❌ Erreur : " + e.getMessage());
        }

        }
    @GetMapping("/byUser/{userId}")
    public List<Challenge> getChallengesByUserId(@PathVariable String userId) {
        return service.getChallengesByUserId(userId);
    }


    //@GetMapping("/run-scheduler")
   // public String runSchedulerNow() {
     //   challengeScheduler.notifyChallenges();
      //  return "⏱️ Scheduler exécuté manuellement !";
  //  }

    @PostMapping("/generate")
    public ResponseEntity<AIChallengeReponse> generateChallengeFromUser(@RequestBody User user) {
        AIChallengeReponse challenge = service.generateChallenge(user);
        return ResponseEntity.ok(challenge);
    }
}
