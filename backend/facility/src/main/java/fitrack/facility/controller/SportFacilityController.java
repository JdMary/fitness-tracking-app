package fitrack.diet.controller;

import fitrack.diet.service.DietPlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/diets/plan")
@RequiredArgsConstructor
public class DietPlanController {
    private final DietPlanService service;
}
