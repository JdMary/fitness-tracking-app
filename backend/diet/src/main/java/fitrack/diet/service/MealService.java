package fitrack.diet.service;

import fitrack.diet.client.AuthClient;
import fitrack.diet.client.EdamamClient;
import fitrack.diet.entity.DTO.EdamamPlanResponse;
import fitrack.diet.entity.DTO.RecipeResponse;
import fitrack.diet.entity.DietPlan;
import fitrack.diet.entity.Meal;
import fitrack.diet.entity.Preference;
import fitrack.diet.entity.enumPreference.*;
import fitrack.diet.repository.MealRepository;
import fitrack.diet.repository.DietPlanRepository;
import fitrack.diet.repository.PreferenceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;

import static java.time.LocalTime.now;

@Service
@EnableFeignClients
@RequiredArgsConstructor
public class MealService {
    @Autowired
    private AuthClient authClient;
    @Autowired
    private EdamamClient edamamClient;
    @Autowired
    private MealRepository mealRepository;
    @Autowired
    private DietPlanRepository dietPlanRepository;
    @Autowired
    private PreferenceRepository preferenceRepository;

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
            mealRepository.saveAll(meals);

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
        if (mealData.containsKey("href")) {
            String sourceUrl = (String) mealData.get("href");
            meal.setSourceUrl(sourceUrl);
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
        meal.setSourceUrl(recipe.getSourceUrl());
        meal.setTotalTimeMinutes((int) recipe.getTotalTime());
        meal.setTotalWeight(recipe.getTotalWeight());
        meal.setCalories(recipe.getCalories());
        meal.setIngredients(recipe.getIngredientLines());

        // Diet + Cuisine + Dish Types
        meal.setDietLabels(convertToDietLabels(recipe.getDietLabels()));
        meal.setCuisineTypes(convertToCuisineTypes(recipe.getCuisineType()));
        meal.setDishTypes(convertToDishTypes(recipe.getDishType()));

        // Health Labels
        meal.setHealthLabels(convertToHealthLabels(recipe.getHealthLabels()));

        // Cautions
        if (recipe.getCautions() != null) {
            meal.setCautions(new HashSet<>(recipe.getCautions()));
        }

        Map<String, RecipeResponse.NutrientInfo> nutrients = recipe.getTotalNutrients();
        if (nutrients != null) {
            if (nutrients.containsKey("PROCNT")) meal.setProtein(nutrients.get("PROCNT").getQuantity());
            if (nutrients.containsKey("FAT")) meal.setFat(nutrients.get("FAT").getQuantity());
            if (nutrients.containsKey("CHOCDF")) meal.setCarbs(nutrients.get("CHOCDF").getQuantity());
            if (nutrients.containsKey("FIBTG")) meal.setFiber(nutrients.get("FIBTG").getQuantity());
            if (nutrients.containsKey("SUGAR")) meal.setSugar(nutrients.get("SUGAR").getQuantity());

            if (nutrients.containsKey("CHOLE")) meal.setCholesterol(nutrients.get("CHOLE").getQuantity());
            if (nutrients.containsKey("NA")) meal.setSodium(nutrients.get("NA").getQuantity());
            if (nutrients.containsKey("CA")) meal.setCalcium(nutrients.get("CA").getQuantity());
            if (nutrients.containsKey("MG")) meal.setMagnesium(nutrients.get("MG").getQuantity());
            if (nutrients.containsKey("K")) meal.setPotassium(nutrients.get("K").getQuantity());
            if (nutrients.containsKey("FE")) meal.setIron(nutrients.get("FE").getQuantity());
            if (nutrients.containsKey("ZN")) meal.setZinc(nutrients.get("ZN").getQuantity());
            if (nutrients.containsKey("P")) meal.setPhosphorus(nutrients.get("P").getQuantity());

            if (nutrients.containsKey("VITA_RAE")) meal.setVitaminA(nutrients.get("VITA_RAE").getQuantity());
            if (nutrients.containsKey("VITC")) meal.setVitaminC(nutrients.get("VITC").getQuantity());
            if (nutrients.containsKey("VITB6A")) meal.setVitaminB6(nutrients.get("VITB6A").getQuantity());
            if (nutrients.containsKey("VITB12")) meal.setVitaminB12(nutrients.get("VITB12").getQuantity());
            if (nutrients.containsKey("VITD")) meal.setVitaminD(nutrients.get("VITD").getQuantity());
            if (nutrients.containsKey("TOCPHA")) meal.setVitaminE(nutrients.get("TOCPHA").getQuantity());
            if (nutrients.containsKey("VITK1")) meal.setVitaminK(nutrients.get("VITK1").getQuantity());
        }

    }

    private Set<DishType> convertToDishTypes(List<String> dishTypes) {
        return dishTypes == null ? Set.of() :
                dishTypes.stream()
                        .map(label -> ApiEnum.fromLabel(label, DishType.class))
                        .collect(Collectors.toSet());
    }

    private Set<CuisineType> convertToCuisineTypes(List<String> apiTypes) {
        return apiTypes.stream()
                .map(label -> ApiEnum.fromLabel(label, CuisineType.class))
                .collect(Collectors.toSet());
    }

    private Set<HealthLabel> convertToHealthLabels(List<String> labels) {
        return labels == null ? Set.of() :
                labels.stream()
                        .map(label -> {
                            try {
                                return ApiEnum.fromLabel(label.replace("-", "_"), HealthLabel.class);
                            } catch (IllegalArgumentException e) {
                                System.err.println("Invalid HealthLabel: " + label);
                                return HealthLabel.UNKNOWN;
                            }
                        })
                        .filter(Objects::nonNull)
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

    @Transactional
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

                    mealRepository.save(meal);
                }
            }
        } catch (Exception e) {
            System.err.println("Failed to fetch recipe details for meal: " + meal.getName());
            e.printStackTrace();
        }
    }

    @Transactional
    public void markMealAsCompleted(Long mealId) {
        Meal meal = mealRepository.findById(mealId)
                .orElseThrow(() -> new IllegalArgumentException("Meal not found with ID: " + mealId));
        meal.setCompleted(true);
        mealRepository.save(meal);
    }

    public List<Meal> getMealsByUser(String token) {
        try {
            String username = String.valueOf(authClient.extractUsername(token).getBody());
            System.out.println("Fetching meals  for username: " + username);
            return mealRepository.findByUsername(username);
        } catch (Exception e) {
            System.err.println("Error in getPreferencesByUserId: " + e.getMessage());
            e.printStackTrace();
            throw e;
        }
    }

    public Optional<Meal> getMealById(Long MealId) {
            return mealRepository.findById(MealId);

    }

    public Map<String, Object> compareDailyNutrientPreferences(DietPlan dietPlan, List<Meal> meals) {
        Map<String, Object> comparisonResult = new HashMap<>();

        double totalProtein = meals.stream().mapToDouble(Meal::getProtein).sum();
        double totalCarbs = meals.stream().mapToDouble(Meal::getCarbs).sum();
        double totalCalories = meals.stream().mapToDouble(Meal::getCalories).sum();

        comparisonResult.put("proteinDifference", dietPlan.getTargetProtein() - totalProtein);
        comparisonResult.put("carbsDifference", dietPlan.getTargetCarbs() - totalCarbs);
        comparisonResult.put("caloriesDifference", dietPlan.getCalorieTarget() - totalCalories);

        return comparisonResult;
    }

    public Map<String, Object> compareDailyNutrients(String username, int dayNumber, Long dietPlanId) {
        DietPlan dietPlan = dietPlanRepository.findById(dietPlanId)
                .orElseThrow(() -> new IllegalArgumentException("DietPlan not found with ID: " + dietPlanId));

        List<Meal> meals = mealRepository.findMealsByUsernameAndDay(username, dayNumber);

        double totalProtein = meals.stream().mapToDouble(Meal::getProtein).sum();
        double totalCarbs = meals.stream().mapToDouble(Meal::getCarbs).sum();
        double totalCalories = meals.stream().mapToDouble(Meal::getCalories).sum();

        Map<String, Object> comparisonResult = new HashMap<>();
        comparisonResult.put("proteinDifference", dietPlan.getTargetProtein() - totalProtein);
        comparisonResult.put("carbsDifference", dietPlan.getTargetCarbs() - totalCarbs);
        comparisonResult.put("caloriesDifference", dietPlan.getCalorieTarget() - totalCalories);

        return comparisonResult;
    }
/// 1st
//    public Map<String, Object> getMealCompletionAnalytics(String token,int dayNumber) {
//        String username = String.valueOf(authClient.extractUsername(token).getBody());
//        List<Meal> meals = mealRepository.findMealsByUsernameAndDay(username, dayNumber);
//
//        long totalMeals = meals.size();
//        long completedMeals = meals.stream()
//                .filter(meal -> Boolean.TRUE.equals(meal.getCompleted()))
//                .count();
//
//        double completionRate = totalMeals > 0
//                ? (double) completedMeals / totalMeals * 100
//                : 0.0;
//
//        // Get diet plan for nutrient targets
//        DietPlan dietPlan = dietPlanRepository.findByUsername(username);
//
//
//        // Calculate consumed nutrients
//        double calories = 0, protein = 0, carbs = 0, fat = 0;
//        for (Meal meal : meals) {
//            if (Boolean.TRUE.equals(meal.getCompleted())) {
//                calories += meal.getCalories();
//                protein += meal.getProtein();
//                carbs += meal.getCarbs();
//                fat += meal.getFat();
//            }
//        }
//
//        Map<String, Double> consumed = new HashMap<>();
//        consumed.put("calories", calories);
//        consumed.put("protein", protein);
//        consumed.put("carbs", carbs);
//        consumed.put("fat", fat);
//
//        Map<String, Double> remaining = new HashMap<>();
//        remaining.put("calories", Math.max(0, dietPlan.getCalorieTarget() - calories));
//        remaining.put("protein", Math.max(0, dietPlan.getTargetProtein() - protein));
//        remaining.put("carbs", Math.max(0, dietPlan.getTargetCarbs() - carbs));
//        remaining.put("fat", Math.max(0, 0 - fat));
//
//        Map<String, Object> analytics = new HashMap<>();
//        analytics.put("completionRate", completionRate);
//        analytics.put("totalMeals", totalMeals);
//        analytics.put("completedMeals", completedMeals);
//        analytics.put("consumedNutrients", consumed);
//        analytics.put("remainingNutrients", remaining);
//
//        return analytics;
//    }
/// ///2nd
    public List<Map<String, Object>> getDailyNutrientStats(String username) {
        List<Object[]> stats = mealRepository.getDailyCompletedNutrientStats(username);
        Preference userPreference = preferenceRepository.findByUsername(username);
        List<Map<String, Object>> result = new ArrayList<>();
        for (Object[] row : stats) {
            Map<String, Object> dayStats = new HashMap<>();
            dayStats.put("dayNumber", row[0]);
            dayStats.put("totalCalories", row[1]);
            dayStats.put("totalProtein", row[2]);
            dayStats.put("totalCarbs", row[3]);
            dayStats.put("totalFat", row[4]);
//            dayStats.put("calorieTarget", row[5]);
//            dayStats.put("targetProtein", row[6]);
//            dayStats.put("targetCarbs", row[7]);
            dayStats.put("calorieTarget", userPreference.getMaxCalories());
            dayStats.put("targetProtein", userPreference.getMaxProtein());
            dayStats.put("targetCarbs", userPreference.getMaxCarbs());
            dayStats.put("targetFat", userPreference.getMaxFat());
            dayStats.put("targetFiber", userPreference.getMaxFiber());
            result.add(dayStats);
        }
        return result;
    }

}