package fitrack.diet.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import fitrack.diet.entity.enumPreference.PlanStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

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

    @Column(unique = true)
    private String username;

    @OneToMany(mappedBy = "dietPlan", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference("dietPlan-meals")
    private List<Meal> meals;

    @Column(nullable = false)
    @Min(value = 1, message = "Must have at least 1 day")
    private Integer numberOfDays;

    @CreatedDate
    private LocalDateTime createdAt;

    private int calorieTarget;
    private int targetProtein;
    private int targetCarbs;

    private Date startDate;
    private Date endDate;

    @LastModifiedDate
    private LocalDateTime lastModified;

//    @ElementCollection
//    @CollectionTable(name = "diet_plan_daily_nutrition", joinColumns = @JoinColumn(name = "diet_plan_id"))
//    private Map<Integer, DailyNutrition> dailyNutrition = new HashMap<>();

    @Enumerated(EnumType.STRING)
    private PlanStatus status;


}
