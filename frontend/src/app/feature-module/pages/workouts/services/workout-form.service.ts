import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WorkoutPlan, TrainingSession, Exercise } from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class WorkoutFormService {
  private workoutPlan = new BehaviorSubject<Partial<WorkoutPlan>>({});
  private trainingSession = new BehaviorSubject<Partial<TrainingSession>>({});
  private exercise = new BehaviorSubject<Partial<Exercise>>({});

  workoutPlan$ = this.workoutPlan.asObservable();
  trainingSession$ = this.trainingSession.asObservable();
  exercise$ = this.exercise.asObservable();

  updateWorkoutPlan(data: Partial<WorkoutPlan>) {
    this.workoutPlan.next({ ...this.workoutPlan.value, ...data });
  }

  updateTrainingSession(data: Partial<TrainingSession>) {
    this.trainingSession.next({ ...this.trainingSession.value, ...data });
  }

  updateExercise(data: Partial<Exercise>) {
    this.exercise.next({ ...this.exercise.value, ...data });
  }

  submitForm() {
    const formData = {
      workoutPlan: this.workoutPlan.value,
      trainingSession: this.trainingSession.value,
      exercise: this.exercise.value
    };
    console.log('Form submitted:', formData);
    return formData;
  }

  reset() {
    this.workoutPlan.next({});
    this.trainingSession.next({});
    this.exercise.next({});
  }
}
