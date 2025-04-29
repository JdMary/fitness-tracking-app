import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DietPlanRoutingModule } from './diet-plan-routing.module';
import { DietPlanComponent } from './diet-plan.component';

@NgModule({
  declarations: [
    DietPlanComponent
  ],
  imports: [
    CommonModule,        
    FormsModule,   
    RouterModule,      
    DietPlanRoutingModule, 
  ]
})
export class DietPlanModule { }