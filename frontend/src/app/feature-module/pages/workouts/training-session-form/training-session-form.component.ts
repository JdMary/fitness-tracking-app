import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingSessionService } from '../services/training-session.service';

@Component({
  selector: 'app-training-session-form',
  templateUrl: './training-session-form.component.html',
  styleUrls: ['./training-session-form.component.scss']
})
export class TrainingSessionFormComponent implements OnInit {
  sessionForm: FormGroup = this.createForm();
  workoutPlanId: number = 0;
  errorMessage: string = ''; // Add a property to store the error message

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private trainingSessionService: TrainingSessionService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.workoutPlanId = +id;
      console.log('Workout Plan ID:', this.workoutPlanId);
    }
    this.addSession(); 
  }

  private createForm(): FormGroup {
    return this.fb.group({
      trainingSessions: this.fb.array([])
    });
  }

  get trainingSessions() {
    return this.sessionForm.get('trainingSessions') as FormArray;
  }

 /* createSessionForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      entryTime: ['', Validators.required],
      exitTime: ['', Validators.required],
      duration: [{value: '', disabled: true}],
      exercises: this.fb.array([])
    });
  }

  createExerciseForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      sets: ['', [Validators.required, Validators.min(1)]],
      reps: ['', [Validators.required, Validators.min(1)]],
      weight: ['', [Validators.required, Validators.min(0)]]
    });
  }*/
    createSessionForm(): FormGroup {
      return this.fb.group({
        guided: [false, Validators.required],
        entryTime: ['', Validators.required],
        exitTime: ['', Validators.required],
        exercises: this.fb.array([])
      });
    }
    
    createExerciseForm(): FormGroup {
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

  addSession() {
    this.trainingSessions.push(this.createSessionForm());
  }

  removeSession(index: number) {
    this.trainingSessions.removeAt(index);
  }

  addExercise(sessionIndex: number) {
    const exercises = this.trainingSessions.at(sessionIndex).get('exercises') as FormArray;
    exercises.push(this.createExerciseForm());
  }

  removeExercise(sessionIndex: number, exerciseIndex: number) {
    const exercises = this.trainingSessions.at(sessionIndex).get('exercises') as FormArray;
    exercises.removeAt(exerciseIndex);
  }

  getExercisesControls(sessionIndex: number) {
    return (this.trainingSessions.at(sessionIndex).get('exercises') as FormArray).controls;
  }

  calculateDuration(sessionIndex: number) {
    const session = this.trainingSessions.at(sessionIndex);
    const entryTime = session.get('entryTime')?.value;
    const exitTime = session.get('exitTime')?.value;
    
    if (entryTime && exitTime) {
      const entry = new Date('1970-01-01T' + entryTime);
      const exit = new Date('1970-01-01T' + exitTime);
      const diff = exit.getTime() - entry.getTime();
      const minutes = Math.round(diff / 60000);
      session.patchValue({ duration: minutes });
    }
  }

  onSubmit() {
    if (this.sessionForm.valid) {
      const trainingSessions = this.trainingSessions.getRawValue();
      console.log('Form data to submit:', trainingSessions);

      this.trainingSessionService.createBulkTrainingSession(this.workoutPlanId, trainingSessions)
        .subscribe({
          next: (response) => {
            console.log('Training sessions added:', response);
            this.router.navigate(['/workouts/training-session']);
          },
          error: (error) => {
            console.error('Error adding training sessions:', error);
            if (error.status === 500 && error.error?.startsWith('Erreur interne')) {
                this.errorMessage = error.error.replace('Erreur interne : ', ''); // Show anything after 'Erreur interne:'
            } else {
              this.errorMessage = 'An unexpected error occurred. Please try again.';
            }
          }
        });
    } else {
      console.log('Form is invalid:', this.sessionForm.errors);
    }
  }

  onCancel() {
    this.router.navigate(['/workouts/plans']);
  }
}