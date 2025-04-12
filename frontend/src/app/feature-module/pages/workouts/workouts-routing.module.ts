import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkoutsComponent} from "./workouts.component";
import {WorkoutPlanComponent} from "./workout-plan/workout-plan.component";

const routes: Routes = [
  {
    path: '',
    component: WorkoutsComponent,
    children: [
      {
        path: 'workout-plan',
        component: WorkoutPlanComponent,
        loadChildren: () =>
          import('./workout-plan/workout-plan.module').then(
            (m) => m.WorkoutPlanModule
          ),
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutsRoutingModule { }
