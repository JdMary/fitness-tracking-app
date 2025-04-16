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
  private readonly authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im1haGRpQGdtYWlsLnRuIiwiZXhwIjoxNzQ0NjQ0NDkxfQ.d55T2nA-SF8OdNjxaVSEO1C07fBlUYh9Aswyy59K3Gg';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
  }

  createWorkoutPlan(plan: WorkoutPlan): Observable<WorkoutPlan> {
    return this.http.post<WorkoutPlan>(`${this.baseUrl}/plan/add`, plan, { headers: this.getHeaders() });
  }

  createTrainingSession(session: any): Observable<any> {
    console.log('Creating training session:', session);
    return this.http.post(`${this.baseUrl}/training-session/add`, session, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  createExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(`${this.baseUrl}/exercises/add`, exercise, { headers: this.getHeaders() });
  }

 /* assignSessionToWorkout(workoutPlan: WorkoutPlan): Observable<WorkoutPlan> {
    return this.http.post<WorkoutPlan>(
      `${this.baseUrl}/plan/assign-session`,
      workoutPlan,
      { headers: this.getHeaders() }
    );
  }

  assignExerciseToSession(sessionId: number, exercise: Exercise): Observable<TrainingSession> {
    return this.http.post<TrainingSession>(
      `${this.baseUrl}/training-session/${sessionId}/assign-exercise`,
      exercise,
      { headers: this.getHeaders() }
    );
  }*/

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}