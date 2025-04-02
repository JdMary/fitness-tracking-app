package fitrack.diet.controller;

import fitrack.diet.service.MealService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/diets/Meal")
@AllArgsConstructor
public class MealController {
    private MealService mealService;
}
