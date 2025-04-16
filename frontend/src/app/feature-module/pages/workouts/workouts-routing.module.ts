import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutsComponent } from './workouts.component';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { WorkoutWizardComponent } from './workout-wizard/workout-wizard.component';
import { WorkoutPlanListComponent } from './workout-plan-list/workout-plan-list.component';
import { WorkoutPlanFormComponent } from './workout-plan-form/workout-plan-form.component';
import { TrainingSessionFormComponent } from './training-session-form/training-session-form.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutsComponent,
    children: [
      {
        path: 'plans',
        children: [
          { path: 'list', component: WorkoutPlanListComponent,
           /* children: [
              { 
                path: ':id/training-session', 
                component: TrainingSessionFormComponent 
              }
            ]*/
          },
          { path: 'create', component: WorkoutPlanFormComponent },
          { path: ':id/training-session', component: TrainingSessionFormComponent }
        ]
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
      { 
        path: '', 
        redirectTo: 'plans', 
        pathMatch: 'full' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutsRoutingModule { }
