import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicesListComponent } from './exercices-list.component';
import { ExercicesListRoutingModule } from './exercices-list-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { WorkoutPlanService } from '../services/workout-plan.service';


@NgModule({
  declarations: [
    ExercicesListComponent,
    
  ],
  imports: [
    CommonModule,
    ExercicesListRoutingModule,
    MatSelectModule,
    MatSortModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WorkoutPlanService]
  

})
export class ExercicesListModule { }
