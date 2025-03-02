package fitrack.achievement.controller;

import fitrack.achievement.service.AchievementService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/achievements")
@AllArgsConstructor
public class AchievementController {
    private AchievementService service;
}
