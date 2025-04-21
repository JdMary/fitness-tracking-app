import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorkoutComponent } from './workout.component';
import { WorkoutRoutingModule } from './workout-routing.module';


@NgModule({
  declarations: [
    WorkoutComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    WorkoutRoutingModule
  ],

})
export class WorkoutModule { }
