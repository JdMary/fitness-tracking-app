package fitrack.diet.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Date;

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

    private int dayOfWeek;

    private int calorieTarget;
    private int targetProtein;
    private int targetCarbs;
    private Date startDate;
    private Date endDate;
    private String userId; //ref to user bcs microservice architecture



}
