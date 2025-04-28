import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExerciseFormComponent } from './exercise-form.component';

@NgModule({
  declarations: [
    ExerciseFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ExerciseFormComponent
  ]
})
export class ExerciseFormModule { }