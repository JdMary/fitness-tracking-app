import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WorkoutWizardComponent } from './workout-wizard.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WorkoutWizardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: WorkoutWizardComponent }
    ])
  ],
  exports: [WorkoutWizardComponent]
})
export class WorkoutWizardModule { }