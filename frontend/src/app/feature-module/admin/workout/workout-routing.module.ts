import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutComponent } from './workout.component';

const routes: Routes = [
  { 
    path: '',
    component: WorkoutComponent ,
    children: [
      {
        path: 'workout-plans-list',
        loadChildren: () =>
          import('./workout-plans-list/workout-plans-list.module').then(
            (m) => m.WorkoutPlansListModule
          ),
      },
      {
        path: 'training-session-list',
        loadChildren: () =>
          import('./training-session-list/training-session-list.module').then(
            (m) => m.TrainingSessionListModule
          ),
      },
      {
        path: 'exercices-list',
        loadChildren: () =>
          import('./exercices-list/exercices-list.module').then(
            (m) => m.ExercicesListModule
          ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutRoutingModule {}
