import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface WorkoutPlan {
  workoutPlanId: number;
  description: string;
  username: string;
  category: string;
  difficulty: string;
  status: string;
  duration: number;
  startDate: Date;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;
  trainingSessionId: number;
  videoUrl: string;
  instructions: string;
  status: boolean;
  exerciseId: number;
  category: string;
  difficulty: string;
  username: string;

}

export interface TrainingSession {
  trainingSessionId: number;
  name: string;
  entryTime: string;
  exitTime: string;
  workoutPlanId: number;
  exercises: Exercise[];
}

export interface TrainingSessionRequest {
  workoutPlanId: number;
  trainingSessions: TrainingSession[];
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutPlanService {
  private baseUrl = 'http://localhost:8222/api/v1/workouts';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Retrieve token from local storage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }


  getAllPlans(): Observable<WorkoutPlan[]> {
    return this.http.get<WorkoutPlan[]>(`${this.baseUrl}/plan/get-plans-admin`, { headers: this.getHeaders() });
  }

  updateWorkoutPlan(id: number, plan: WorkoutPlan): Observable<WorkoutPlan> {
    return this.http.put<WorkoutPlan>(`${this.baseUrl}/update/${id}`, plan, { headers: this.getHeaders() });
  }

  deleteWorkoutPlan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/plan/delete/${id}`, { headers: this.getHeaders() });
  }
  getAllSessions(): Observable<TrainingSession[]> { 
    return this.http.get<TrainingSession[]>(`${this.baseUrl}/training-session/get-sessions-admin`, { headers: this.getHeaders() });
  }
  getAllSessionsByWorkout(id: number): Observable<TrainingSession[]> {
    return this.http.get<TrainingSession[]>(`${this.baseUrl}/training-session/get-sessions-by-workout-admin/${id}`, { headers: this.getHeaders() });
  }
  getAllExercicesBySession(id: number): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.baseUrl}/exercises/get-exercices-by-session-admin/${id}`, { headers: this.getHeaders() });
  }
  getAllExercices(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.baseUrl}/exercises/get-exercices-admin`, { headers: this.getHeaders() });
  }   
}