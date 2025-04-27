import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietPlanRoutingModule } from './diet-plan-routing.module';
import { DietPlanComponent } from './diet-plan.component';
import { FormsModule } from '@angular/forms';
import { GenerateDietPlanModule } from './generate-diet-plan/generate-diet-plan.module';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { RouterModule } from '@angular/router';
import { MealDetailsModule } from './meal-details/meal-details.module';
import { AiModule } from './ai/ai.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //BrowserModule,
     MealDetailsModule,
     AiModule,
    DietPlanRoutingModule,
    FormsModule, 
    RouterModule,
    GenerateDietPlanModule,
   

  ],
  exports: [MealDetailsModule]
})
export class DietPlanModule { 
  
}