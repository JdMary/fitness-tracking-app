package fitrack.diet.service;

import fitrack.diet.entity.DietPlan;
import fitrack.diet.entity.Preference;

public interface IDietPlanService {
   // DietPlan autoAdjustPlanForWeightChange();
    DietPlan addDietPlan(DietPlan dietPlan, String token);

}
