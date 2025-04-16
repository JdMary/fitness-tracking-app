import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkoutPlanService, WorkoutPlan } from '../services/workout-plan.service';

@Component({
  selector: 'app-workout-plan-form',
  templateUrl: './workout-plan-form.component.html'
})
export class WorkoutPlanFormComponent implements OnInit {
  workoutForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private workoutPlanService: WorkoutPlanService
  ) {
    this.workoutForm = this.fb.group({
      description: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
      startDate: ['', Validators.required],
      difficulty: ['', Validators.required]
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