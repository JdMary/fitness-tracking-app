import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutsComponent } from './workouts.component';
import { CustomersHeaderComponent } from './common/customers-header/customers-header.component';
import { WorkoutWizardModule } from './workout-wizard/workout-wizard.module';
import { ExerciceComponent } from './exercice/exercice.component';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { WorkoutPlanListComponent } from './workout-plan-list/workout-plan-list.component';
import { WorkoutPlanFormComponent } from './workout-plan-form/workout-plan-form.component';
import { TrainingSessionFormComponent } from './training-session-form/training-session-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExerciseFormModule } from './exercise-form/exercise-form.module';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import { TrainingSessionInsightsComponent } from './training-session-insights/training-session-insights.component';
import { ProgressInsightsModule } from './progress-insights/progress-insights.module';
import { VideoUploadModule } from './video-upload/video-upload.module';
import { VideoUploadComponent } from './video-upload/video-upload.component';

@NgModule({
  declarations: [
    WorkoutsComponent,
    CustomersHeaderComponent,
    ExerciceComponent,
    TrainingSessionComponent,
    WorkoutPlanListComponent,
    WorkoutPlanFormComponent,
    TrainingSessionFormComponent,
    ProgressTrackerComponent,
    TrainingSessionInsightsComponent,
    VideoUploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    WorkoutsRoutingModule,
    WorkoutWizardModule,
    SharedModule,
    ExerciseFormModule,
    ProgressInsightsModule,
    
  ]
})
export class WorkoutsModule { }