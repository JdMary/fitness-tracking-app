package fitrack.diet.entity;

import fitrack.diet.entity.enumPreference.PlanStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.*;

import java.time.LocalDateTime;
import java.util.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DietPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dietPlanId;

    private String username;

    @ManyToOne
    @JoinColumn(name = "preference_id")
    private Preference preference;

    @OneToMany(mappedBy = "dietPlan", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Meal> meals;

    private Integer numberOfDays;

    private LocalDateTime createdAt;

    private int calorieTarget;
    private int targetProtein;
    private int targetCarbs;

    private Date startDate;
    private Date endDate;

    private String userId;
    private LocalDateTime lastModified;

//    @ElementCollection
//    @CollectionTable(name = "diet_plan_daily_nutrition", joinColumns = @JoinColumn(name = "diet_plan_id"))
//    private Map<Integer, DailyNutrition> dailyNutrition = new HashMap<>();

    @Enumerated(EnumType.STRING)
    private PlanStatus status;


}
