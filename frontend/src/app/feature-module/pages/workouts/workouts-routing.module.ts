import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutsComponent } from './workouts.component';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { WorkoutWizardComponent } from './workout-wizard/workout-wizard.component';
import { WorkoutPlanListComponent } from './workout-plan-list/workout-plan-list.component';
import { WorkoutPlanFormComponent } from './workout-plan-form/workout-plan-form.component';
import { TrainingSessionFormComponent } from './training-session-form/training-session-form.component';
import { E, P } from '@angular/cdk/keycodes';
import { ExerciceComponent } from './exercice/exercice.component';
import { ExerciseFormComponent } from './exercise-form/exercise-form.component';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import { TrainingSessionInsightsComponent } from './training-session-insights/training-session-insights.component';
import { ProgressInsightsComponent } from './progress-insights/progress-insights.component';
const routes: Routes = [
  {
    path: '',
    component: WorkoutsComponent,
    children: [
      {
        path: 'plans',
        children: [
          { 
            path: 'list', 
            component: WorkoutPlanListComponent 
          },
          { path: 'create', component: WorkoutPlanFormComponent },
          { path: ':id/training-session', component: TrainingSessionFormComponent }
        ]
      },
      {
        path: 'training-session',
        component: TrainingSessionComponent,
        children: [
          { path: ':id/exercise-form', component: ExerciseFormComponent }
        ]
      },
      {
        path: 'exercice',
        children: [
          { path: '', component: ExerciceComponent },
          { path: 'form', component: ExerciseFormComponent }
        ]
      },
      {
        path: 'progress-tracker',
        component: ProgressTrackerComponent,
       
      },
      {

        path: 'training-session-insights',
        component: TrainingSessionInsightsComponent
      },
      {
        path: 'progress-insights',
        component: ProgressInsightsComponent,
       
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
