package fitrack.diet.entity;

import fitrack.diet.entity.enumPreference.*;
import jakarta.persistence.*;
import lombok.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Preference {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String preferenceId;

    //@Column(nullable = false)
    private String userId;

    // Single selection
    //@Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private DietLabel dietLabel;

    // Multiple selections
    @ElementCollection
    @Enumerated(EnumType.STRING)
    private Set<HealthLabel> healthLabels = new HashSet<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    private Set<MealType> mealTypes = new HashSet<>();

    @ElementCollection
    @Enumerated(EnumType.STRING)
    private Set<CuisineType> cuisineTypes = new HashSet<>();

    @ElementCollection
    @Enumerated(EnumType.STRING)
    private Set<DishType> dishTypes = new HashSet<>();



    // Calorie constraints
    private Double minCalories;
    private Double maxCalories;

    // prep + cooking time
    private Integer maxTotalTime;

    // Exclusions
    private String excludedIngredients;  // Comma-separated (e.g., "mushrooms,spinach")
    private String excludedDietLabels;    // Comma-separated diet types to exclude
    private String excludedHealthLabels;  // Comma-separated health labels to exclude

    // Macronutrient  (grams per day)
    private Double minProtein;
    private Double maxProtein;
    private Double minCarbs;
    private Double maxCarbs;
    private Double minFat;
    private Double maxFat;
    private Double minFiber;
    private Double maxFiber;

    // Micronutrients (daily values)
    private Double minCalcium;
    private Double minCholesterol;
    private Double minPotassium;
    private Double minSodium;
    private Double minVitaminA;
    private Double minVitaminC;

// Manually written getters and setters for each field (if not using Lombok)

    public String getPreferenceId() {
        return preferenceId;
    }

    public void setPreferenceId(String preferenceId) {
        this.preferenceId = preferenceId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public DietLabel getDietLabel() {
        return dietLabel;
    }

    public void setDietLabel(DietLabel dietLabel) {
        this.dietLabel = dietLabel;
    }

    public Set<HealthLabel> getHealthLabels() {
        return healthLabels;
    }

    public void setHealthLabels(Set<HealthLabel> healthLabels) {
        this.healthLabels = healthLabels;
    }

    public Set<MealType> getMealTypes() {
        return mealTypes;
    }

    public void setMealTypes(Set<MealType> mealTypes) {
        this.mealTypes = mealTypes;
    }

    public Set<CuisineType> getCuisineTypes() {
        return cuisineTypes;
    }

    public void setCuisineTypes(Set<CuisineType> cuisineTypes) {
        this.cuisineTypes = cuisineTypes;
    }

    public Set<DishType> getDishTypes() {
        return dishTypes;
    }

    public void setDishTypes(Set<DishType> dishTypes) {
        this.dishTypes = dishTypes;
    }

    public Double getMinCalories() {
        return minCalories;
    }

    public void setMinCalories(Double minCalories) {
        this.minCalories = minCalories;
    }

    public Double getMaxCalories() {
        return maxCalories;
    }

    public void setMaxCalories(Double maxCalories) {
        this.maxCalories = maxCalories;
    }

    public Integer getMaxTotalTime() {
        return maxTotalTime;
    }

    public void setMaxTotalTime(Integer maxTotalTime) {
        this.maxTotalTime = maxTotalTime;
    }

    public String getExcludedIngredients() {
        return excludedIngredients;
    }

    public void setExcludedIngredients(String excludedIngredients) {
        this.excludedIngredients = excludedIngredients;
    }

    public String getExcludedDietLabels() {
        return excludedDietLabels;
    }

    public void setExcludedDietLabels(String excludedDietLabels) {
        this.excludedDietLabels = excludedDietLabels;
    }

    public String getExcludedHealthLabels() {
        return excludedHealthLabels;
    }

    public void setExcludedHealthLabels(String excludedHealthLabels) {
        this.excludedHealthLabels = excludedHealthLabels;
    }

    public Double getMinProtein() {
        return minProtein;
    }

    public void setMinProtein(Double minProtein) {
        this.minProtein = minProtein;
    }

    public Double getMaxProtein() {
        return maxProtein;
    }

    public void setMaxProtein(Double maxProtein) {
        this.maxProtein = maxProtein;
    }

    public Double getMinCarbs() {
        return minCarbs;
    }

    public void setMinCarbs(Double minCarbs) {
        this.minCarbs = minCarbs;
    }

    public Double getMaxCarbs() {
        return maxCarbs;
    }

    public void setMaxCarbs(Double maxCarbs) {
        this.maxCarbs = maxCarbs;
    }

    public Double getMinFat() {
        return minFat;
    }

    public void setMinFat(Double minFat) {
        this.minFat = minFat;
    }

    public Double getMaxFat() {
        return maxFat;
    }

    public void setMaxFat(Double maxFat) {
        this.maxFat = maxFat;
    }

    public Double getMinFiber() {
        return minFiber;
    }

    public void setMinFiber(Double minFiber) {
        this.minFiber = minFiber;
    }

    public Double getMaxFiber() {
        return maxFiber;
    }

    public void setMaxFiber(Double maxFiber) {
        this.maxFiber = maxFiber;
    }

    public Double getMinCalcium() {
        return minCalcium;
    }

    public void setMinCalcium(Double minCalcium) {
        this.minCalcium = minCalcium;
    }

    public Double getMinCholesterol() {
        return minCholesterol;
    }

    public void setMinCholesterol(Double minCholesterol) {
        this.minCholesterol = minCholesterol;
    }

    public Double getMinPotassium() {
        return minPotassium;
    }

    public void setMinPotassium(Double minPotassium) {
        this.minPotassium = minPotassium;
    }

    public Double getMinSodium() {
        return minSodium;
    }

    public void setMinSodium(Double minSodium) {
        this.minSodium = minSodium;
    }

    public Double getMinVitaminA() {
        return minVitaminA;
    }

    public void setMinVitaminA(Double minVitaminA) {
        this.minVitaminA = minVitaminA;
    }

    public Double getMinVitaminC() {
        return minVitaminC;
    }

    public void setMinVitaminC(Double minVitaminC) {
        this.minVitaminC = minVitaminC;
    }

}
