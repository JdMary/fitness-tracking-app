package fitrack.achievement.controller;

import fitrack.achievement.entity.Achievement;
import fitrack.achievement.entity.Challenge;
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

@RequestMapping("/api/v1/achievements/challenge")

public class ChallengeController {

    @GetMapping("/aaa")
    public String test() {
        return "Service Challenge fonctionne";
    }
    @Autowired
    private  final ChallengeService service;

    public ChallengeController(ChallengeService service) {
        this.service = service;
    }

    @PostMapping("/addChallenge")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Challenge challenge) {
        System.out.println("Received Challenge: " + challenge);
        service.save(challenge);
    }

}
