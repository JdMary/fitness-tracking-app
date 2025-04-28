import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionListComponent } from './training-session-list.component';
import { TrainingSessionListRoutingModule } from './training-session-list-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { WorkoutPlanService } from '../services/workout-plan.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TrainingSessionListComponent
  ],
  imports: [
    CommonModule,
    TrainingSessionListRoutingModule,
    MatSelectModule,
    MatSortModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WorkoutPlanService]
})
export class TrainingSessionListModule { }
