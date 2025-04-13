import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrainingSessionComponent} from "./training-session.component";
import {TrainingSessionRoutingModule} from "./training-session-routing.module";
import {SharedModule} from "../../../../shared/shared.module";
import {WorkoutPlanComponent} from "../workout-plan/workout-plan.component";


@NgModule({
  declarations: [
    TrainingSessionComponent,
    ],
  exports: [
    TrainingSessionComponent
  ],
  imports: [
    CommonModule,
    TrainingSessionRoutingModule,
    SharedModule


  ]
})
export class TrainingSessionModule { }
