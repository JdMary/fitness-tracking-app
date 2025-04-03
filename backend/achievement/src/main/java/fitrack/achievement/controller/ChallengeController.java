package fitrack.achievement.controller;

import fitrack.achievement.entity.Achievement;
import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.LeaderBoard;
import fitrack.achievement.scheduler.ChallengeScheduler;
import fitrack.achievement.service.AchievementService;

import fitrack.achievement.service.ChallengeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

@RequestMapping("/api/v1/challenges")

public class ChallengeController {

    @GetMapping("/aaa")
    public String test() {
        return "Service Challenge fonctionne";
    }
    @Autowired
    private  final ChallengeService service;
    private final ChallengeScheduler challengeScheduler;
    public ChallengeController(ChallengeService service, ChallengeScheduler challengeScheduler) {
        this.service = service;
        this.challengeScheduler = challengeScheduler;
    }

    @PostMapping("/addChallenge")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Challenge challenge) {
        System.out.println("Received Challenge: " + challenge);
        service.addChallenge(challenge);
    }

    @GetMapping("/liste")
    public ResponseEntity<List<Challenge>> findAllChallenges() {
        return ResponseEntity.ok(service.findAllChallenge());
    }



    //@GetMapping("/run-scheduler")
   // public String runSchedulerNow() {
     //   challengeScheduler.notifyChallenges();
      //  return "⏱️ Scheduler exécuté manuellement !";
  //  }

}
