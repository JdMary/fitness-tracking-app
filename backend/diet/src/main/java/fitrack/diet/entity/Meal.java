package fitrack.diet.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import fitrack.diet.entity.enumPreference.*;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mealId;

    private Boolean completed;
    @JsonBackReference("dietPlan-meals")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "diet_plan_id")
    private DietPlan dietPlan;

    private String name;
    @Lob
    @Column(length = 2048)
    private String imageUrl;
    @Lob
    @Column(length = 2048)
    private String recipeUrl;
    private String source; // Recipe source
    private String sourceUrl; // Recipe source URL

    @Enumerated(EnumType.STRING)
    private MealType mealType;

    private Integer dayNumber;

    // prep info
    private Integer prepTimeMinutes;
    private Integer cookTimeMinutes;
    private Integer totalTimeMinutes;
    private Integer servings;

    private Double totalWeight;

    // detailed nutr
    private Double calories;
    private Double protein;
    private Double fat;
    private Double carbs;
    private Double fiber;
    private Double sugar;

    private Double cholesterol;
    private Double sodium;
    private Double calcium;
    private Double magnesium;
    private Double potassium;
    private Double iron;
    private Double zinc;
    private Double phosphorus;
    private Double vitaminA;
    private Double vitaminC;
    private Double vitaminB6;
    private Double vitaminB12;
    private Double vitaminD;
    private Double vitaminE;
    private Double vitaminK;

    @ElementCollection
    @CollectionTable(name = "meal_ingredients", joinColumns = @JoinColumn(name = "meal_id"))
    private List<String> ingredients = new ArrayList<>();

//    @ElementCollection
//    @CollectionTable(name = "meal_ingredient_details", joinColumns = @JoinColumn(name = "meal_id"))
//    private List<IngredientDetail> ingredientDetails = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "meal_diet_labels", joinColumns = @JoinColumn(name = "meal_id"))
    @Enumerated(EnumType.STRING)
    private Set<DietLabel> dietLabels = new HashSet<>();

    @ElementCollection
    @CollectionTable(name = "meal_health_labels", joinColumns = @JoinColumn(name = "meal_id"))
    @Enumerated(EnumType.STRING)
    private Set<HealthLabel> healthLabels = new HashSet<>();

    @ElementCollection
    @CollectionTable(name = "meal_cautions", joinColumns = @JoinColumn(name = "meal_id"))
    private Set<String> cautions = new HashSet<>();

    @ElementCollection
    @CollectionTable(name = "meal_cuisine_types", joinColumns = @JoinColumn(name = "meal_id"))
    @Enumerated(EnumType.STRING)
    private Set<CuisineType> cuisineTypes = new HashSet<>();

    @ElementCollection
    @CollectionTable(name = "meal_dish_types", joinColumns = @JoinColumn(name = "meal_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "dish_types", length = 512)

    private Set<DishType> dishTypes = new HashSet<>();






}
