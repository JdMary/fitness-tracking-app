import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkoutFormService } from '../services/workout-form.service';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styleUrl: './workout-plan.component.css'
})
export class WorkoutPlanComponent implements OnInit {
  workoutForm: FormGroup;
  public currentStep = 0;
  public steps = [
    { title: 'Workout Plan Details', component: 'workout-plan' },
    { title: 'Training Session', component: 'training-session' },
    { title: 'Exercises', component: 'exercises' }
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private formService: WorkoutFormService
  ) {
    this.workoutForm = this.fb.group({
      description: ['', Validators.required],
      duration: ['', Validators.required],
      startDate: ['', Validators.required],
      difficulty: ['Beginner', Validators.required]
    });
  }

  ngOnInit() {
    this.formService.workoutPlan$.subscribe(data => {
      if (data) {
        this.workoutForm.patchValue(data);
      }
    });
  }

  nextStep() {
    if (this.workoutForm.valid) {
      this.formService.updateWorkoutPlan(this.workoutForm.value);
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
        this.router.navigate(['/workouts/' + this.steps[this.currentStep].component]);
      }
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.router.navigate(['/workouts/' + this.steps[this.currentStep].component]);
    }
  }

  isStepActive(index: number): boolean {
    return this.currentStep === index;
  }

  isStepCompleted(index: number): boolean {
    return this.currentStep > index;
  }
}
