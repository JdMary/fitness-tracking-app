import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietPlanRoutingModule } from './diet-plan-routing.module';
import { DietPlanComponent } from './diet-plan.component';
import { FormsModule } from '@angular/forms';
import { GenerateDietPlanModule } from './generate-diet-plan/generate-diet-plan.module';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { RouterModule } from '@angular/router';
import { MealDetailsModule } from './meal-details/meal-details.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DietPlanRoutingModule,
    FormsModule, 
    RouterModule,
    GenerateDietPlanModule,
    MealDetailsModule

  ]
})
export class DietPlanModule { 
  
}
