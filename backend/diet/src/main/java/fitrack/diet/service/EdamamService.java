package fitrack.diet.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import feign.FeignException;
import fitrack.diet.client.EdamamClient;
import fitrack.diet.entity.DTO.EdamamPlanResponse;
import fitrack.diet.entity.DTO.MealPlanRequest;
import fitrack.diet.entity.DietPlan;
import fitrack.diet.entity.Meal;
import fitrack.diet.entity.Preference;
import fitrack.diet.entity.enumPreference.MealType;
import fitrack.diet.entity.enumPreference.PlanStatus;
import fitrack.diet.repository.DietPlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.*;
import java.util.stream.Collectors;

@Service
@EnableFeignClients
@RequiredArgsConstructor
public class EdamamService {

    private final EdamamClient edamamClient;
    private final PreferenceService preferenceService;
    private final DietPlanService dietPlanService;
    private final DietPlanRepository dietPlanRepository;
    private final MealService mealService;

    @Value("${edamam.app.id}")
    private String edamamAppId;

    @Value("${edamam.app.key}")
    private String edamamAppKey;

    @Value("${edamam.account.user}")
    private String edamamAccountUser;

    @Transactional
    public DietPlan generateAndSaveMealPlan(String token, DietPlan dietPlan) {
        System.out.println("Starting meal plan generation for user: " + dietPlan.getUsername());

        DietPlan existingPlan = dietPlanRepository.findByUsername(dietPlan.getUsername());
        System.out.println("Existing plan found: " + (existingPlan != null));

        try {
            Preference preference = preferenceService.getPreferencesByUserId(token);
            if (preference == null) {
                System.out.println("⚠️ No preferences found for user: " + dietPlan.getUsername());
                throw new RuntimeException("User preferences not configured");
            }

            EdamamPlanResponse response = requestMealPlanFromEdamam(preference, dietPlan, token);

            if (response == null || response.getSelection() == null || response.getSelection().isEmpty()) {
                System.out.println("⚠️ Edamam returned empty meal plan");
                existingPlan.setStatus(PlanStatus.DRAFT);
                return dietPlanRepository.save(existingPlan);
            }

            List<Meal> newMeals = mealService.processMealsFromResponse(response, existingPlan);

            existingPlan.getMeals().clear();
            newMeals.forEach(meal -> {
                meal.setDietPlan(existingPlan);
                existingPlan.getMeals().add(meal);
            });

            existingPlan.setStatus(PlanStatus.COMPLETED);
            return dietPlanRepository.save(existingPlan);

        } catch (Exception e) {
            System.out.println("⚠️ Fallback triggered: " + e.getMessage());
            if (existingPlan == null) throw new RuntimeException("No existing plan available");
            existingPlan.setStatus(PlanStatus.DRAFT);
            return dietPlanRepository.save(existingPlan);
        }
    }

    private EdamamPlanResponse requestMealPlanFromEdamam(Preference preference, DietPlan dietPlan, String token) {
        try {
            MealPlanRequest requestBody = buildRequestBodyFromEntities(preference, token);
            System.out.println("📦 Request body: " + new ObjectMapper().writeValueAsString(requestBody));

            List<String> dietLabels = preference.getDietLabel() != null ?
                    Collections.singletonList(preference.getDietLabel().name()) : null;

            List<String> healthLabels = preference.getHealthLabels() != null ?
                    preference.getHealthLabels().stream().map(Enum::name).collect(Collectors.toList()) : null;

            List<String> cuisineTypes = preference.getCuisineTypes() != null ?
                    preference.getCuisineTypes().stream().map(Enum::name).collect(Collectors.toList()) : null;

            List<String> mealTypes = preference.getMealTypes() != null ?
                    preference.getMealTypes().stream().map(Enum::name).collect(Collectors.toList()) : null;

            ResponseEntity<EdamamPlanResponse> response = edamamClient.selectMealPlan(
                    edamamAppId,
                    edamamAppId,
                    edamamAppKey,
                    "public",
                    requestBody,
                    dietLabels,
                    healthLabels,
                    cuisineTypes,
                    mealTypes,
                    edamamAccountUser
            );

            return response.getStatusCode().is2xxSuccessful() ? response.getBody() : null;

        } catch (Exception e) {
            System.out.println("❌ API call failed: " + e.getMessage());
            return null;
        }
    }

    private MealPlanRequest buildRequestBodyFromEntities(Preference preference, String token) {
        MealPlanRequest request = new MealPlanRequest();
        DietPlan dietPlan = dietPlanService.getDietPlanByUserId(token);

        request.setSize(dietPlan.getNumberOfDays());

        MealPlanRequest.Plan plan = new MealPlanRequest.Plan();
        plan.setAccept(buildAcceptCriteria(preference));
        plan.setFit(buildFitCriteria(preference, dietPlan));
        plan.setSections(buildSections(preference));

        request.setPlan(plan);
        return request;
    }

    private MealPlanRequest.Accept buildAcceptCriteria(Preference preference) {
        MealPlanRequest.Accept accept = new MealPlanRequest.Accept();
        List<Map<String, List<String>>> all = new ArrayList<>();

        if (!preference.getHealthLabels().isEmpty()) {
            all.add(Map.of("health", mapEnumsToStrings(preference.getHealthLabels())));
        }
        if (!preference.getCuisineTypes().isEmpty()) {
            all.add(Map.of("cuisine", mapEnumsToStrings(preference.getCuisineTypes())));
        }
        if (!preference.getDishTypes().isEmpty()) {
            all.add(Map.of("dish", mapEnumsToStrings(preference.getDishTypes())));
        }

        if (!all.isEmpty()) accept.setAll(all);
        return accept;
    }

    private Map<String, MealPlanRequest.NutrientRange> buildFitCriteria(Preference preference, DietPlan dietPlan) {
        Map<String, MealPlanRequest.NutrientRange> fit = new HashMap<>();

        double calorieTarget = dietPlan.getCalorieTarget() > 0 ? dietPlan.getCalorieTarget() : 2000.0;

        MealPlanRequest.NutrientRange calories = new MealPlanRequest.NutrientRange();
        calories.setMin(calorieTarget - 200);
        calories.setMax(calorieTarget + 200);
        fit.put("ENERC_KCAL", calories);

        // ✅ Only add PROCNT if both min and max are > 0
        if (preference.getMinProtein() > 0 && preference.getMaxProtein() > 0
                && preference.getMaxProtein() >= preference.getMinProtein()) {

            MealPlanRequest.NutrientRange protein = new MealPlanRequest.NutrientRange();
            protein.setMin(preference.getMinProtein());
            protein.setMax(preference.getMaxProtein());
            fit.put("PROCNT", protein);
        }
        if (preference.getMinFat() > 0 && preference.getMaxFat() > 0) {
            MealPlanRequest.NutrientRange fat = new MealPlanRequest.NutrientRange();
            fat.setMin(preference.getMinFat());
            fat.setMax(preference.getMaxFat());
            fit.put("FAT", fat);
        }

        return fit;
    }


    private Map<String, MealPlanRequest.Section> buildSections(Preference preference) {
        Map<String, MealPlanRequest.Section> sections = new HashMap<>();

        if (preference.getMealTypes() != null && !preference.getMealTypes().isEmpty()) {
            for (MealType mealType : preference.getMealTypes()) {
                MealPlanRequest.Section section = new MealPlanRequest.Section();
                section.setAccept(Map.of("meal", List.of(mealType.name().toLowerCase())));
                String sectionKey = StringUtils.capitalize(mealType.name().toLowerCase());
                sections.put(sectionKey, section);
            }
        } else {
            // Default meals if none selected
            sections.put("Breakfast", defaultSection("breakfast"));
            sections.put("Lunch", defaultSection("lunch"));
            sections.put("Dinner", defaultSection("dinner"));
        }

        return sections;
    }

    private MealPlanRequest.Section defaultSection(String mealType) {
        MealPlanRequest.Section section = new MealPlanRequest.Section();
        section.setAccept(Map.of("meal", List.of(mealType)));
        return section;
    }

    private List<String> mapEnumsToStrings(Set<? extends Enum<?>> enums) {
        return enums.stream().map(Enum::name).collect(Collectors.toList());
    }
}
