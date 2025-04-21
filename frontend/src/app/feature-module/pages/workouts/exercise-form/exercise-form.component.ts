import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciceService } from '../services/exercice.service';
import { Exercise } from '../models/entities';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss']
})
export class ExerciseFormComponent implements OnInit {
  exerciseForm: FormGroup;
  trainingSessionId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private exerciceService: ExerciceService
  ) {
    this.exerciseForm = this.createExerciseForm();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.trainingSessionId = params['trainingSessionId'] ? +params['trainingSessionId'] : null;
      if (!this.trainingSessionId) {
        this.router.navigate(['/workouts/exercice']);
      }
    });
  }

  private createExerciseForm(): FormGroup {
    return this.fb.group({
      category: ['', Validators.required],
      sets: ['', [Validators.required, Validators.min(1)]],
      reps: ['', [Validators.required, Validators.min(1)]],
      difficulty: ['', Validators.required],
      videoUrl: ['', Validators.required],
      instructions: ['', Validators.required],
      status: [true]
    });
  }

  onSubmit() {
    if (this.exerciseForm.valid && this.trainingSessionId) {
      const exercise: Exercise = this.exerciseForm.value;
      this.exerciceService.addExercise(exercise, this.trainingSessionId)
        .subscribe({
          next: (response) => {
            console.log('Exercise added successfully:', response);
            this.router.navigate(['/workouts/exercice'], {
              queryParams: { trainingSessionId: this.trainingSessionId }
            });
          },
          error: (error) => {
            console.error('Error adding exercise:', error);
          }
        });
    }
  }

  onCancel() {
    if (this.trainingSessionId) {
      this.router.navigate(['/workouts/exercice'], {
        queryParams: { trainingSessionId: this.trainingSessionId }
      });
    } else {
      this.router.navigate(['/workouts/exercice']);
    }
  }
}