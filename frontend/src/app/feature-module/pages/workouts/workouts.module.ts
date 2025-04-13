import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutsRoutingModule } from './workouts-routing.module';
import {WorkoutPlanComponent} from "./workout-plan/workout-plan.component";
import {WorkoutsComponent} from "./workouts.component";
import {WorkoutPlanModule} from "./workout-plan/workout-plan.module";
import {CustomersHeaderComponent} from "./common/customers-header/customers-header.component";



@NgModule({
  declarations: [
    WorkoutsComponent,
  ],
  imports: [
    CommonModule,
    WorkoutsRoutingModule,
    WorkoutPlanModule,

  ]
})
export class WorkoutsModule { }
