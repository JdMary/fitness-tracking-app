package fitrack.diet.entity;

import fitrack.diet.entity.enumPreference.*;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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

    @Column(unique = true)
    private String username;

    //@Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private DietLabel dietLabel;

    // Multiple selections
    @OnDelete(action = OnDeleteAction.CASCADE)
    @ElementCollection(fetch = FetchType.EAGER) //list not separate entity
    @CollectionTable(name = "preference_meal_types",joinColumns = @JoinColumn(name = "preference_id"))
    @Enumerated(EnumType.STRING)
    private Set<MealType> mealTypes = new HashSet<>();

    @OnDelete(action = OnDeleteAction.CASCADE)
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "preference_health_labels", joinColumns = @JoinColumn(name = "preference_id"))
    @Enumerated(EnumType.STRING)
    private Set<HealthLabel> healthLabels = new HashSet<>();

    @OnDelete(action = OnDeleteAction.CASCADE)
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "preference_cuisine_types", joinColumns = @JoinColumn(name = "preference_id"))
    @Enumerated(EnumType.STRING)
    private Set<CuisineType> cuisineTypes = new HashSet<>();

    @OnDelete(action = OnDeleteAction.CASCADE)
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "preference_dish_types", joinColumns = @JoinColumn(name = "preference_id"))
    @Column(name = "dish_types", length = 255) // Specify VARCHAR(255) for the column
    @Enumerated(EnumType.STRING)
    private Set<DishType> dishTypes = new HashSet<>();



    // Calorie constraints
    private Double minCalories;
    private Double maxCalories;

    // prep + cooking time
    private Integer maxTotalTime;

    // Exclusions
    private String excludedIngredients;
    private String excludedDietLabels;
    private String excludedHealthLabels;

    // Macro
    private Double minProtein;
    private Double maxProtein;
    private Double minCarbs;
    private Double maxCarbs;
    private Double minFat;
    private Double maxFat;
    private Double minFiber;
    private Double maxFiber;

    // Micro
    private Double minCalcium;
    private Double minCholesterol;
    private Double minPotassium;
    private Double minSodium;
    private Double minVitaminA;
    private Double minVitaminC;

    public boolean hasCaloriePreferences() {
        return this.minCalories != null || this.maxCalories != null;
    }
    public boolean hasProteinPreferences() {
        return this.minCalories != null || this.maxCalories != null;
    }



}
