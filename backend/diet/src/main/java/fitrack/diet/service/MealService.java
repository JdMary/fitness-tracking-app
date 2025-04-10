package fitrack.diet.service;

import fitrack.diet.client.AuthClient;
import fitrack.diet.client.EdamamClient;
import fitrack.diet.entity.DTO.EdamamPlanResponse;
import fitrack.diet.entity.DTO.RecipeResponse;
import fitrack.diet.entity.DTO.RecipeResponse.*;
import fitrack.diet.entity.DietPlan;
import fitrack.diet.entity.Meal;
import fitrack.diet.entity.enumPreference.CuisineType;
import fitrack.diet.entity.enumPreference.DietLabel;
import fitrack.diet.entity.enumPreference.MealType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@EnableFeignClients
public class MealService {
    @Autowired
    private AuthClient authClient;
    @Autowired
    private EdamamClient edamamClient;

    @Value("${edamam.app.id}")
    String edamamAppId;
    @Value("${edamam.app.key}")
    String edamamAppKey;
    @Value("${edamam.account.user}")
    String edamamAccountUser;

    public List<Meal> processMealsFromResponse(EdamamPlanResponse response, DietPlan dietPlan) {
        List<Meal> meals = new ArrayList<>();
        if (response == null || response.getSelection() == null) return meals;

        int dayNumber = 1;
        for (Map<String, Object> daySelection : response.getSelection()) {
            Map<String, Object> sections = (Map<String, Object>) daySelection.get("sections");
            if (sections == null) continue;

            for (Map.Entry<String, Object> entry : sections.entrySet()) {
                String mealType = entry.getKey();
                Map<String, Object> mealData = (Map<String, Object>) entry.getValue();

                Meal meal = createBaseMeal(mealType, dietPlan, dayNumber);
                extractBasicInfo(mealData, meal);
                extractDetailedRecipeInfo(meal);

                meals.add(meal);
            }
            dayNumber++;
            if (dayNumber > dietPlan.getNumberOfDays()) break;
        }
        return meals;
    }

    private Meal createBaseMeal(String mealType, DietPlan dietPlan, int dayNumber) {
        return Meal.builder()
                .name(mealType)
                .mealType(MealType.valueOf(mealType.toUpperCase()))
                .dietPlan(dietPlan)
                .dayNumber(dayNumber)
                .build();
    }

    private void extractBasicInfo(Map<String, Object> mealData, Meal meal) {
        if (mealData.containsKey("assigned")) {
            String recipeUri = (String) mealData.get("assigned");
            meal.setRecipeUrl(recipeUri);
        }
    }

    private void extractDetailedRecipeInfo(Meal meal) {
        if (meal.getRecipeUrl() == null) {
            System.err.println("No recipe URL for meal: " + meal.getName());
            return;
        }

        String recipeId = extractRecipeId(meal.getRecipeUrl());
        System.out.println("Fetching details for recipe ID: " + recipeId); // Debug log

        try {
            ResponseEntity<RecipeResponse> responseEntity = edamamClient.getRecipeDetails(
                    recipeId,
                    edamamAppId,
                    edamamAppKey,
                    "public",
                    edamamAccountUser
            );

            System.out.println("API Response Status: " + responseEntity.getStatusCode()); // Log status

            if (responseEntity.getStatusCode().is2xxSuccessful() && responseEntity.getBody() != null) {
                RecipeResponse.Recipe recipe = responseEntity.getBody().getRecipe();
                if (recipe != null) {
                    System.out.println("Successfully fetched recipe: " + recipe.getLabel()); // Debug log
                    mapRecipeToMeal(recipe, meal);
                }
            } else {
                System.err.println("Failed to fetch recipe details. Status: " + responseEntity.getStatusCode());
            }
        } catch (Exception e) {
            System.err.println("FATAL ERROR in recipe details fetch for meal: " + meal.getName());
            e.printStackTrace();
        }
    }

    private void mapRecipeToMeal(RecipeResponse.Recipe recipe, Meal meal) {
        meal.setName(recipe.getLabel());
        meal.setImageUrl(recipe.getImage());
        meal.setSource(recipe.getSource());
        meal.setRecipeUrl(recipe.getUrl());
        meal.setTotalTimeMinutes((int) recipe.getTotalTime());
        meal.setCalories(recipe.getCalories());
        if (recipe.getTotalNutrients().containsKey("PROCNT")) {
            meal.setProtein(recipe.getTotalNutrients().get("PROCNT").getQuantity());
        }
        if (recipe.getTotalNutrients().containsKey("FAT")) {
            meal.setFat(recipe.getTotalNutrients().get("FAT").getQuantity());
        }
        meal.setIngredients(recipe.getIngredientLines());
        meal.setDietLabels(convertToDietLabels(recipe.getDietLabels()));
        meal.setCuisineTypes(convertToCuisineTypes(recipe.getCuisineType()));
    }

    private Set<CuisineType> convertToCuisineTypes(List<String> apiTypes) {
        return apiTypes.stream()
                .map(type -> CuisineType.valueOf(type.toUpperCase()))
                .collect(Collectors.toSet());
    }

    private Set<DietLabel> convertToDietLabels(List<String> apiLabels) {
        return apiLabels.stream()
                .map(label -> {
                    DietLabel dietLabel = DietLabel.fromString(label); //custom hedha

                    return dietLabel;
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());
    }

    private String extractRecipeId(String recipeUrl) {
        String[] parts = recipeUrl.split("#recipe_|/recipe/");
        return parts.length > 1 ? parts[parts.length - 1] : "INVALID_RECIPE_ID";    }

    public void enrichMealDetails(Meal meal) {
        if (meal.getRecipeUrl() == null) return;

        String recipeId = extractRecipeId(meal.getRecipeUrl());
        try {
            ResponseEntity<RecipeResponse> responseEntity = edamamClient.getRecipeDetails(
                    recipeId,
                    edamamAppId,
                    edamamAppKey,
                    "public",
                    edamamAccountUser
            );
            if (responseEntity.getStatusCode().is2xxSuccessful() && responseEntity.getBody() != null) {
                RecipeResponse.Recipe recipe = responseEntity.getBody().getRecipe();
                if (recipe != null) {
                    mapRecipeToMeal(recipe, meal);
                }
            }
        } catch (Exception e) {
            System.err.println("Failed to fetch recipe details for meal: " + meal.getName());
            e.printStackTrace();
        }
    }
}