import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkoutFormService } from '../services/workout-form.service';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  exerciseForm: FormGroup;
  videoUrl: string | null = null;
  videoFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formService: WorkoutFormService
  ) {
    this.exerciseForm = this.fb.group({
      category: ['', Validators.required],
      sets: ['', [Validators.required, Validators.min(1)]],
      reps: ['', [Validators.required, Validators.min(1)]],
      difficulty: ['', Validators.required],
      instructions: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.formService.exercise$.subscribe(data => {
      if (data) {
        this.exerciseForm.patchValue(data);
      }
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.videoFile = file;
      this.videoUrl = URL.createObjectURL(file);
    }
  }

  onSubmit() {
    if (this.exerciseForm.valid) {
      const formData = {
        ...this.exerciseForm.value,
        videoFile: this.videoFile
      };
      this.formService.updateExercise(formData);
      this.formService.submitForm();
      // Navigate to success page or show success message
    }
  }

  onPrevious() {
    this.formService.updateExercise(this.exerciseForm.value);
    this.router.navigate(['/workouts/training-session']);
  }

  ngOnDestroy() {
    if (this.videoUrl) {
      URL.revokeObjectURL(this.videoUrl);
    }
  }
}
