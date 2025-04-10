package fitrack.diet.controller;

import fitrack.diet.client.EdamamClient;
import fitrack.diet.entity.DTO.RecipeResponse;
import fitrack.diet.service.MealService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/diets/Meal")
@EnableFeignClients
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
@AllArgsConstructor
public class MealController {
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
}