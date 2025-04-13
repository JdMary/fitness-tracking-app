import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { WorkoutsComponent } from './workouts.component';
import { WorkoutPlanModule } from './workout-plan/workout-plan.module';
import { CustomersHeaderComponent } from './common/customers-header/customers-header.component';
import { WorkoutWizardModule } from './workout-wizard/workout-wizard.module';
import { ExerciceComponent } from './exercice/exercice.component';
import { TrainingSessionComponent } from './training-session/training-session.component';

@NgModule({
  declarations: [
    WorkoutsComponent,
    CustomersHeaderComponent,
    ExerciceComponent,
    TrainingSessionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    WorkoutsRoutingModule,
    WorkoutPlanModule,
    WorkoutWizardModule
  ]
})
export class WorkoutsModule { }
