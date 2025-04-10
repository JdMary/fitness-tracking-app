package fitrack.diet.client;

import fitrack.diet.entity.DTO.EdamamPlanResponse;
import fitrack.diet.entity.DTO.MealPlanRequest;
import fitrack.diet.entity.DTO.RecipeResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "EdamamApi", url = "${edamam.mealplanner.url}")
public interface EdamamClient {
    @PostMapping("/api/meal-planner/v1/{app_id}/select")
    ResponseEntity<EdamamPlanResponse> selectMealPlan(
           @PathVariable("app_id") String app_id,
           @RequestParam("app_id") String appId,
           @RequestParam("app_key") String appKey,
           @RequestParam("type") String type,
           @RequestBody MealPlanRequest requestBody,
           @RequestParam(value = "diet", required = false) List<String> dietLabels,
           @RequestParam(value = "health", required = false) List<String> healthLabels,
           @RequestParam(value = "cuisineType", required = false) List<String> cuisineTypes,
           @RequestParam(value = "mealType", required = false) List<String> mealTypes,
           @RequestHeader("Edamam-Account-User") String EdamamAccountUser
    );

    @GetMapping("/api/recipes/v2/{recipeId}")
    ResponseEntity<RecipeResponse> getRecipeDetails(
            @PathVariable("recipeId") String recipeId,
            @RequestParam("app_id") String appId,
            @RequestParam("app_key") String appKey,
            @RequestParam("type") String type,
            @RequestHeader("Edamam-Account-User") String EdamamAccountUser

    );
}
