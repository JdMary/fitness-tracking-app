package fitrack.achievement.controller;

import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.User;
import fitrack.achievement.entity.dtos.AIChallengeReponse;
import fitrack.achievement.entity.dtos.ChallengeUpdateRequest;
import fitrack.achievement.entity.dtos.ChallengeWithUserDTO;
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
import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/challenges")

public class ChallengeController {
    private  final ChallengeService service;
    @GetMapping("/test")
    public String test() {
        return "Service Challenge fonctionne";
    }



    private final ChallengeScheduler challengeScheduler;

    public ChallengeController(ChallengeService service,  ChallengeScheduler challengeScheduler) {
        this.service = service;

        this.challengeScheduler = challengeScheduler;

    }

    @PostMapping("/addChallenge")
    public ResponseEntity<?> save(@RequestBody Challenge challenge) {
        try {
            System.out.println("Received Challenge: " + challenge);
            Challenge savedChallenge = service.addChallenge(challenge);
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
    @GetMapping("/admin/all")
    public ResponseEntity<List<ChallengeWithUserDTO>> getAllChallengesWithUserNames() {
        return ResponseEntity.ok(service.getAllChallengesWithUserNames());
    }


    @GetMapping("/my-challenges")
    public ResponseEntity<List<Challenge>> getChallengesByUserToken(@RequestHeader("Authorization") String token) {
        List<Challenge> challenges = service.getChallengesByUser(token);
        return ResponseEntity.ok(challenges);
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
            return ResponseEntity.ok("✅Challenge updated successfully !");
        } catch (IllegalArgumentException e) {

            String errorMessage = e.getMessage();

            String[] errors = errorMessage.split(" \\| ");
            return ResponseEntity.badRequest().body(Map.of(
                "errors", errors,
                "message", "❌ Erreurs de validation détectées"
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of(
                "message", "❌ Erreur lors de la mise à jour du défi : " + e.getMessage()
            ));
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
    public ResponseEntity<Map<String, String>> participate(@PathVariable String challengeId) {
        try {
            service.participate(challengeId);

            // Renvoi d'un objet JSON avec le message
            Map<String, String> response = new HashMap<>();
            response.put("message", "🚀 Tu es en train de participer au défi maintenant !");

            return ResponseEntity.ok(response);

        } catch (RuntimeException e) {
            return ResponseEntity
                    .badRequest()
                    .body(Collections.singletonMap("error", "❌ Erreur : " + e.getMessage()));
        }
    }



    @PutMapping("/validate/{challengeId}")
    public ResponseEntity<Map<String, String>> validateChallenge(@PathVariable String challengeId) {
        try {
            service.validateChallenge(challengeId);

            Map<String, String> response = new HashMap<>();
            response.put("message", "🎉 Félicitations ! Tu as validé le défi avec succès !");

            return ResponseEntity.ok(response);

        } catch (RuntimeException e) {
            return ResponseEntity
                    .badRequest()
                    .body(Collections.singletonMap("error", "❌ Erreur : " + e.getMessage()));
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
