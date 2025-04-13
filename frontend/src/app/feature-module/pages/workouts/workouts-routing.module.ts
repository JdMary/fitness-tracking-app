import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutsComponent } from './workouts.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { WorkoutWizardComponent } from './workout-wizard/workout-wizard.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutsComponent,
    children: [
      {
        path: 'workout-plan',
        component: WorkoutPlanComponent
      },
      {
        path: 'training-session',
        component: TrainingSessionComponent
      },
      {
        path: 'exercice',
        component: ExerciceComponent
      },
      {
        path: 'wizard',
        component: WorkoutWizardComponent
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
