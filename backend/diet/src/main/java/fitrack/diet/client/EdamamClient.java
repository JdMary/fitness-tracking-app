package fitrack.diet.client;

import fitrack.diet.entity.DTO.EdamamPlanResponse;
import fitrack.diet.entity.DTO.RecipeResponse;
import fitrack.diet.entity.MealPlanRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@FeignClient(name = "EdamamApi", url = "${edamam.mealplanner.url}")
public interface EdamamClient {
    @PostMapping("/api/meal-planner/v1/{app_id}/select")
    ResponseEntity<EdamamPlanResponse> selectMealPlan(
           @PathVariable("app_id") String app_id,
           @RequestParam("app_id") String appId,
           @RequestParam("app_key") String appKey,
           @RequestParam("type") String type,
           @RequestBody Map<String, Object> requestBody,
           @RequestParam(value = "diet", required = false) List<String> dietLabels,
           @RequestParam(value = "health", required = false) List<String> healthLabels,
           @RequestParam(value = "cuisineType", required = false) List<String> cuisineTypes,
           @RequestParam(value = "mealType", required = false) List<String> mealTypes,
           @RequestHeader("Edamam-Account-User") String EdamamAccountUser
    );

//    @PostMapping("/api/meal-planner/v1/{appId}")
//    ResponseEntity<String> selectMealPlan2(
//            @RequestHeader("Edamam-Account-User") String userId,
//            @RequestParam("app_id") String appId,
//            @RequestParam("app_key") String appKey,
//            @RequestParam("type") String type,
//            @RequestBody MealPlanRequest mealPlanRequest
//    );
    @GetMapping("/api/recipes/v2/{recipeId}")
    ResponseEntity<RecipeResponse> getRecipeDetails(
            @PathVariable("recipeId") String recipeId,
            @RequestParam("app_id") String appId,
            @RequestParam("app_key") String appKey,
            @RequestParam("type") String type
    );
}
