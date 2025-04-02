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
    @Column(name = "preference_id")
    private String preferenceId;

    //@Column(nullable = false)
    private String username;

    //@Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private DietLabel dietLabel;

    // Multiple selections
    @ElementCollection(fetch = FetchType.EAGER) //list not separate entity
    @CollectionTable(name = "preference_meal_types",joinColumns = @JoinColumn(name = "preference_id"))
    @Enumerated(EnumType.STRING)
    private Set<MealType> mealTypes = new HashSet<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "preference_health_labels", joinColumns = @JoinColumn(name = "preference_id"))
    @Enumerated(EnumType.STRING)
    private Set<HealthLabel> healthLabels = new HashSet<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "preference_cuisine_types", joinColumns = @JoinColumn(name = "preference_id"))
    @Enumerated(EnumType.STRING)
    private Set<CuisineType> cuisineTypes = new HashSet<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "preference_dish_types", joinColumns = @JoinColumn(name = "preference_id"))
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


}
