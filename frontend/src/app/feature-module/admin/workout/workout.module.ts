import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutComponent } from './workout.component';
import { WorkoutRoutingModule } from './workout-routing.module';


@NgModule({
  declarations: [
    WorkoutComponent,
    
  ],
  imports: [
    CommonModule,
    WorkoutRoutingModule
  ],

})
export class WorkoutModule { }
