import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WorkoutPlan, TrainingSession, Exercise } from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class WorkoutWizardService {
  private baseUrl = 'http://localhost:8222/api/v1/workouts';

  constructor(private http: HttpClient) {}

  createWorkoutPlan(workoutPlan: any): Observable<any> {
    console.log('Creating workout plan:', workoutPlan);
    return this.http.post(`${this.baseUrl}/workout-plan/add`, workoutPlan)
      .pipe(catchError(this.handleError));
  }

  createTrainingSession(session: any, token: string): Observable<any> {
    console.log('Creating training session:', session);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/training-session/add`, session, { headers })
      .pipe(catchError(this.handleError));
  }

  createExercise(exercise: any): Observable<any> {
    console.log('Creating exercise:', exercise);
    return this.http.post(`${this.baseUrl}/exercise/add`, exercise)
      .pipe(catchError(this.handleError));
  }

  assignSessionToWorkout(workoutPlan: WorkoutPlan, token: string): Observable<WorkoutPlan> {
    return this.http.post<WorkoutPlan>(
      `${this.baseUrl}/plan/assign-session`,
      workoutPlan,
      { headers: { 'Authorization': token } }
    );
  }

  assignExerciseToSession(sessionId: number, exercise: Exercise, token: string): Observable<TrainingSession> {
    return this.http.post<TrainingSession>(
      `${this.baseUrl}/training-session/${sessionId}/assign-exercise`,
      exercise,
      { headers: { 'Authorization': token } }
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}