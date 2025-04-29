package fitrack.achievement.controller;

import fitrack.achievement.entity.Reward;
import fitrack.achievement.service.LeaderBoardService;
import fitrack.achievement.service.RewardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/rewards")

public class RewardController {
    private final RewardService service;

    public RewardController(RewardService service) {
        this.service = service;
    }

    @GetMapping("/my_rewards")
    public ResponseEntity<List<Reward>> getMyRewards(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.getRewardsByUserToken(token));
    }

}
