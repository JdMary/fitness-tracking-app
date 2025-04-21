import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutPlansListComponent } from './workout-plans-list.component';
import { WorkoutPlansListRoutingModule } from './workout-plans-list-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { WorkoutPlanService } from '../services/workout-plan.service';

@NgModule({
  declarations: [
    WorkoutPlansListComponent,
  ],
  imports: [
    CommonModule,
    WorkoutPlansListRoutingModule,
    MatSelectModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [WorkoutPlanService]
})
export class WorkoutPlansListModule { }
