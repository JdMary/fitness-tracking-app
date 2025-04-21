package fitrack.diet.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@EnableFeignClients
public class EdamamService {

    private final EdamamClient edamamClient;
    private final PreferenceService preferenceService;
    private final DietPlanService dietPlanService;
    private final DietPlanRepository dietPlanRepository;
    private final MealService mealService;

    private final String edamamAppId;
    private final String edamamAppKey;
    private final String edamamAccountUser;

    public EdamamService(
            EdamamClient edamamClient,
            PreferenceService preferenceService,
            DietPlanService dietPlanService,
            DietPlanRepository dietPlanRepository,
            MealService mealService,
            @Value("${edamam.app.id}") String edamamAppId,
            @Value("${edamam.app.key}") String edamamAppKey,
            @Value("${edamam.account.user}") String edamamAccountUser) {
        this.edamamClient = edamamClient;
        this.preferenceService = preferenceService;
        this.dietPlanService = dietPlanService;
        this.dietPlanRepository = dietPlanRepository;
        this.mealService = mealService;
        this.edamamAppId = edamamAppId;
        this.edamamAppKey = edamamAppKey;
        this.edamamAccountUser = edamamAccountUser;
    }

    @Transactional
    public DietPlan generateAndSaveMealPlan(String token, DietPlan dietPlan) {
        Preference preference = preferenceService.getPreferencesByUserId(token);
        if (preference == null) {
            throw new RuntimeException("User preferences not found for user: " + token);
        }
        System.out.println("Using preference for meal plan generation: " + preference);
        DietPlan existingPlan = dietPlanRepository.findByUsername(dietPlan.getUsername());
        EdamamPlanResponse response = requestMealPlanFromEdamam(preference, dietPlan, token);
        try {
            System.out.println("Edamam raw response: " + new ObjectMapper().writeValueAsString(response));
        } catch (JsonProcessingException e) {
            System.err.println("Failed to serialize Edamam response: " + e.getMessage());
        }
        if (response == null || response.getSelection() == null || response.getSelection().isEmpty()) {
            existingPlan.setStatus(PlanStatus.DRAFT);
        } else {
            List<Meal> newMeals = mealService.processMealsFromResponse(response, existingPlan);

            existingPlan.getMeals().clear();
            newMeals.forEach(meal -> {
                meal.setDietPlan(existingPlan);
                existingPlan.getMeals().add(meal);
            });

            existingPlan.setStatus(PlanStatus.COMPLETED);
        }
        return dietPlanRepository.save(existingPlan);
    }

    private EdamamPlanResponse requestMealPlanFromEdamam(Preference preference, DietPlan dietPlan, String token) {
        List<String> dietLabels = preference.getDietLabel() != null ?
                Collections.singletonList(preference.getDietLabel().name()) : null;

        List<String> healthLabels = preference.getHealthLabels() != null && !preference.getHealthLabels().isEmpty() ?
                preference.getHealthLabels().stream()
                        .map(Enum::name)
                        .collect(Collectors.toList()) : null;

        List<String> cuisineTypes = preference.getCuisineTypes() != null && !preference.getCuisineTypes().isEmpty() ?
                preference.getCuisineTypes().stream()
                        .map(Enum::name)
                        .collect(Collectors.toList()) : null;

        List<String> mealTypes = preference.getMealTypes() != null && !preference.getMealTypes().isEmpty() ?
                preference.getMealTypes().stream()
                        .map(Enum::name)
                        .collect(Collectors.toList()) : null;

        try {
            MealPlanRequest requestBody = buildRequestBodyFromEntities(preference, token);

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
            if (response.getStatusCode().is2xxSuccessful()) {
                return response.getBody();
            } else {
                System.err.println("Error response from Edamam API: " + response.getStatusCode());
                return null;
            }
        } catch (Exception e) {
            System.err.println("Error while calling Edamam API: " + e.getMessage());
            e.printStackTrace();
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
        List<Map<String, List<String>>> allCriteria = new ArrayList<>();

        if (!preference.getHealthLabels().isEmpty()) {
            allCriteria.add(Map.of("health", mapEnumsToStrings(preference.getHealthLabels())));
        }

        if (!preference.getCuisineTypes().isEmpty()) {
            allCriteria.add(Map.of("cuisine", mapEnumsToStrings(preference.getCuisineTypes())));
        }

        if (!preference.getDishTypes().isEmpty()) {
            allCriteria.add(Map.of("dish", mapEnumsToStrings(preference.getDishTypes())));
        }

        if (!allCriteria.isEmpty()) {
            accept.setAll(allCriteria);
        }
        return accept;
    }

    private List<String> mapEnumsToStrings(Set<? extends Enum<?>> enums) {
        return enums.stream()
                .map(Enum::name)
                .collect(Collectors.toList());
    }

    private Map<String, MealPlanRequest.NutrientRange> buildFitCriteria(Preference preference, DietPlan dietPlan) {
        Map<String, MealPlanRequest.NutrientRange> fit = new HashMap<>();

        MealPlanRequest.NutrientRange calories = new MealPlanRequest.NutrientRange();
        if (preference.hasCaloriePreferences()) {
            calories.setMin(preference.getMinCalories());
            calories.setMax(preference.getMaxCalories());
        } else {
            calories.setMin(dietPlan.getCalorieTarget() - 200.0);
            calories.setMax(dietPlan.getCalorieTarget() + 200.0);
        }
        fit.put("ENERC_KCAL", calories);

        MealPlanRequest.NutrientRange protein = new MealPlanRequest.NutrientRange();
        fit.put("PROCNT", protein);

        return fit;
    }

    private Map<String, MealPlanRequest.Section> buildSections(Preference preference) {
        Map<String, MealPlanRequest.Section> sections = new HashMap<>();

        for (MealType mealType : preference.getMealTypes()) {
            MealPlanRequest.Section section = new MealPlanRequest.Section();
            section.setAccept(Map.of("meal", List.of(mealType.name().toLowerCase())));
            String sectionKey = StringUtils.capitalize(mealType.name().toLowerCase());
            sections.put(sectionKey, section);
        }

        if (sections.isEmpty()) {
            sections.put("Breakfast", new MealPlanRequest.Section());
            sections.put("Lunch", new MealPlanRequest.Section());
            sections.put("Dinner", new MealPlanRequest.Section());
        }

        return sections;
    }
}