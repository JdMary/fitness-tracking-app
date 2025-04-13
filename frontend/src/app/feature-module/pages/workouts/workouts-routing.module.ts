import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutsComponent } from './workouts.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { ExerciceComponent } from './exercice/exercice.component';

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
      },
      {
        path: 'training-session',
        component: TrainingSessionComponent,
        loadChildren: () =>
          import('./training-session/training-session.module').then(
            (m) => m.TrainingSessionModule
          ),
      },
      {
        path: 'exercice',
        component: ExerciceComponent,
        loadChildren: () =>
          import('./exercice/exercice.module').then(
            (m) => m.ExerciceModule
          ),
      },
      { path: '', redirectTo: 'workout-plan', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutsRoutingModule { }
