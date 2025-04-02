package fitrack.diet.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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
    private String dietPlanId;

//    @ElementCollection
//    private List<String> ingredients;

    private int preparationTime;
    private int calories;
    private String mealType;
    private boolean logged;
}
