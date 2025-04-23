import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietPlanListRoutingModule } from './diet-plan-list-routing.module';
import { DietPlanListComponent } from './diet-plan-list.component';

@NgModule({
  declarations: [
    DietPlanListComponent
  ],
  imports: [
    CommonModule,
    DietPlanListRoutingModule
  ]
})
export class DietPlanListModule { }
