import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkoutPlanService, WorkoutPlan } from '../services/workout-plan.service';

@Component({
  selector: 'app-workout-plan-form',
  templateUrl: './workout-plan-form.component.html',
  styles: [`
    .breadcrumb-bar {
      background: #f8f9fa;
      padding: 15px 0;
      margin-bottom: 30px;
    }
    .breadcrumb-title {
      color: #333;
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 8px;
    }
    .card {
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      border-radius: 8px;
      border: none;
    }
    .card-body {
      padding: 30px;
    }
    .form-label {
      margin-bottom: 8px;
      color: #464646;
    }
    .form-control, .form-select {
      padding: 10px 15px;
      border-radius: 6px;
      border: 1px solid #ddd;
      transition: all 0.3s ease;
    }
    .form-control:focus, .form-select:focus {
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
    .btn {
      padding: 10px 20px;
      font-weight: 500;
    }
  `]
})
export class WorkoutPlanFormComponent implements OnInit {
  workoutForm: FormGroup;
  goals = ['WEIGHT_LOSS', 'MUSCLE_GAIN', 'ENDURANCE', 'FLEXIBILITY', 'MAINTENANCE'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private workoutPlanService: WorkoutPlanService
  ) {
    this.workoutForm = this.fb.group({
      description: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
      startDate: ['', Validators.required],
      difficulty: ['', Validators.required],
      goal: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.workoutForm.valid) {
      const workoutPlan: WorkoutPlan = {
        ...this.workoutForm.value,
        startDate: new Date(this.workoutForm.value.startDate)
      };
      
      console.log('Form values:', this.workoutForm.value);
      console.log('Workout plan to be submitted:', workoutPlan);

      this.workoutPlanService.createWorkoutPlan(workoutPlan).subscribe({
        next: (response) => {
          console.log('Response from server:', response);
          this.router.navigate(['/workouts/plans/list']);
        },
        error: (error) => {
          console.error('Error creating workout plan:', error);
        }
      });
    } else {
      console.log('Form is invalid:', this.workoutForm.errors);
    }
  }
}