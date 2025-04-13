import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkoutPlanComponent } from './workout-plan.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WorkoutPlanComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [WorkoutPlanComponent]
})
export class WorkoutPlanModule { }
