import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietPlanRoutingModule } from './diet-plan-routing.module';
import { AdminDietPlanComponent } from './diet-plan.component';
import { DietPlanDetailsComponent } from './diet-plan-details/diet-plan-details.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';

@NgModule({
  declarations: [
    AdminDietPlanComponent,
    DietPlanDetailsComponent,
    MealDetailsComponent
  ],
  imports: [
    CommonModule,
    DietPlanRoutingModule
  ]
})
export class DietPlanModule { }
