package fitrack.diet.controller;

import fitrack.diet.client.AuthClient;
import fitrack.diet.client.EdamamClient;
import fitrack.diet.entity.DTO.RecipeResponse;
import fitrack.diet.entity.DietPlan;
import fitrack.diet.entity.Meal;
import fitrack.diet.service.MealService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/diets/Meal")
@EnableFeignClients
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
@AllArgsConstructor
public class MealController {
    @Autowired
    private AuthClient authClient;
    @Autowired
    private MealService mealService;
    private final EdamamClient edamamClient;

    @Value("${edamam.app.id}")
    private String edamamAppId;

    @Value("${edamam.app.key}")
    private String edamamAppKey;

    @Value("${edamam.account.user}")
    String edamamAccountUser;


    @GetMapping("/v2/{recipeId}")
    public ResponseEntity<RecipeResponse> getRecipeDetails(
            @PathVariable String recipeId,
            @RequestParam(defaultValue = "public") String type) {

        return edamamClient.getRecipeDetails(
                recipeId,
                edamamAppId,
                edamamAppKey,
                type,
                edamamAccountUser
        );

    }

    @GetMapping("/meals")
    public ResponseEntity<List<Meal>> getMeals(@RequestHeader("Authorization") String token) {
        List<Meal> meals = mealService.getMealsByUser(token);
        return ResponseEntity.ok(meals);
    }

    @GetMapping("/MealDetail/{id}")
    public ResponseEntity<Optional<Meal>> getDietPlanById(@PathVariable Long id) {
        Optional<Meal> meal = mealService.getMealById(id);
        return new ResponseEntity<>(meal, HttpStatus.OK);
    }

//    @GetMapping("/compare-nutrients")
//    public ResponseEntity<Map<String, Object>> compareDailyNutrients(
//            @RequestParam String username,
//            @RequestParam int dayNumber,
//            @RequestParam Long dietPlanId) {
//        Map<String, Object> comparisonResult = mealService.compareDailyNutrients(username, dayNumber, dietPlanId);
//        return ResponseEntity.ok(comparisonResult);
//    }

    @PutMapping("/mark-completed/{mealId}")
    public ResponseEntity<Void> markMealAsCompleted(@PathVariable Long mealId) {
        mealService.markMealAsCompleted(mealId);
        return ResponseEntity.ok().build();
    }
/// /1st attempt
//    @GetMapping("/analytics/{dayNumber}")
//    public ResponseEntity<Map<String, Object>> getMealCompletionAnalytics(@RequestHeader("Authorization") String token,@PathVariable int dayNumber) {
//        Map<String, Object> analytics = mealService.getMealCompletionAnalytics(token,dayNumber);
//        return ResponseEntity.ok(analytics);
//    }
/// /2nd attemt
    @GetMapping("/daily-nutrient-stats")
    public ResponseEntity<List<Map<String, Object>>> getDailyNutrientStats(@RequestHeader("Authorization") String token) {
        String username = authClient.extractUsername(token).getBody();
        List<Map<String, Object>> stats = mealService.getDailyNutrientStats(username);
        return ResponseEntity.ok(stats);
    }
}