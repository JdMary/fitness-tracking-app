package fitrack.diet.controller;

import fitrack.diet.service.DietPlanService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/diets/plan")
@AllArgsConstructor
public class DietPlanController {
    private DietPlanService service;
}
