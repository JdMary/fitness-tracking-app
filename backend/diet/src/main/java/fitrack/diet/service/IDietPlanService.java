package fitrack.diet.service;

import fitrack.diet.entity.DietPlan;

public interface IDietPlanService {
    DietPlan autoAdjustPlanForWeightChange();

}
