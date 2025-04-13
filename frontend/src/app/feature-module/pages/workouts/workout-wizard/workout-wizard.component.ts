import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkoutPlan, TrainingSession, Exercise } from '../models/entities';
import { WorkoutWizardService } from './workout-wizard.service';
import { BrowserDetectService } from '../../../../shared/services/browser-detect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-wizard',
  templateUrl: './workout-wizard.component.html',
  styleUrls: ['./workout-wizard.component.scss']
})
export class WorkoutWizardComponent implements OnInit {
  currentStep = 0;
  workoutForm!: FormGroup;
  trainingSessionForm!: FormGroup;
  exerciseForm!: FormGroup;
  browserInfo: { name: string; version: string } | null = null;
  
  steps = [
    { title: 'Workout Plan', completed: false },
    { title: 'Training Session', completed: false },
    { title: 'Exercises', completed: false }
  ];

  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutWizardService,
    private browserService: BrowserDetectService,
    private router: Router
  ) {
    this.initializeForms();
  }

  ngOnInit() {}

  private initializeForms() {
    this.workoutForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
      startDate: ['', Validators.required],
      difficulty: ['Beginner', Validators.required]
    });

    this.trainingSessionForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
      entryTime: ['', Validators.required],
      exitTime: ['', Validators.required],
      guided: [false],
      exercises: [[]]
    });

    this.exerciseForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      sets: ['', [Validators.required, Validators.min(1)]],
      reps: ['', [Validators.required, Validators.min(1)]],
      difficulty: ['Beginner', Validators.required],
      videoUrl: [''],
      instructions: [''],
      description: ['']
    });
  }
  calculateDuration() {
    const entryTime = this.trainingSessionForm.get('entryTime')?.value;
    const exitTime = this.trainingSessionForm.get('exitTime')?.value;
    if (entryTime && exitTime) {
      const duration = this.calculateTimeDifference(entryTime, exitTime);
      this.trainingSessionForm.patchValue({ duration });
    }
  }

  private calculateTimeDifference(entry: string, exit: string): number {
    const [entryHours, entryMinutes] = entry.split(':').map(Number);
    const [exitHours, exitMinutes] = exit.split(':').map(Number);
    const entryInMinutes = entryHours * 60 + entryMinutes;
    const exitInMinutes = exitHours * 60 + exitMinutes;
    return exitInMinutes - entryInMinutes;
  }
  checkBrowser() {
    this.browserInfo = this.browserService.getBrowserInfo();
  }

  nextStep() {
    if (this.isFormsValid() && this.currentStep < this.steps.length - 1) {
      this.steps[this.currentStep].completed = true;
      this.currentStep++;
    } else {
      alert('Please fill in all required fields for the current step.');
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (this.isFormsValid()) {
      const token = 'mock-token';
      
      // Prepare complete workout plan data
      const workoutPlanData = {
        ...this.workoutForm.value,
        trainingSessions: []
      };

      // Prepare training session data
      const trainingSessionData = {
        ...this.trainingSessionForm.value
      };

      // Prepare exercise data
      const exerciseData = {
        ...this.exerciseForm.value
      };

      // Create the complete chain with error handling
      this.workoutService.createWorkoutPlan(workoutPlanData)
        .subscribe({
          next: (workoutPlan) => {
            const sessionWithPlan = {
              ...trainingSessionData,
              workoutPlanId: workoutPlan.id
            };
            
            this.workoutService.createTrainingSession(sessionWithPlan, token)
              .subscribe({
                next: (session) => {
                  const exerciseWithSession = {
                    ...exerciseData,
                    trainingSessionId: session.id
                  };
                  
                  this.workoutService.createExercise(exerciseWithSession)
                    .subscribe({
                      next: () => {
                        this.router.navigate(['/workouts']);
                      },
                      error: (error) => console.error('Exercise creation failed:', error)
                    });
                },
                error: (error) => console.error('Training session creation failed:', error)
              });
          },
          error: (error) => console.error('Workout plan creation failed:', error)
        });
    }
  }

  public isFormsValid(): boolean {
    // Log form statuses for debugging
    console.log('Workout Form:', this.workoutForm.value, this.workoutForm.valid);
    console.log('Training Session Form:', this.trainingSessionForm.value, this.trainingSessionForm.valid);
    console.log('Exercise Form:', this.exerciseForm.value, this.exerciseForm.valid);

    if (this.currentStep === 2) {
      // On final submit, check all forms
      return this.workoutForm.valid && 
             this.trainingSessionForm.valid && 
             this.exerciseForm.valid;
    } else {
      // During navigation, only check current form
      switch(this.currentStep) {
        case 0:
          return this.workoutForm.valid;
        case 1:
          return this.trainingSessionForm.valid;
        case 2:
          return this.exerciseForm.valid;
        default:
          return false;
      }
    }
  }
}