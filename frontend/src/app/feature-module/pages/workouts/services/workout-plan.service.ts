import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface WorkoutPlan {
   workoutPlanId?: number;
  description: string;
  duration: number;
  startDate: Date;
  difficulty: string;
  goal: 'WEIGHT_LOSS' | 'MUSCLE_GAIN' | 'ENDURANCE' | 'FLEXIBILITY' | 'MAINTENANCE';

}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

export interface TrainingSession {
  name: string;
  date: string;
  entryTime: string;
  exitTime: string;
  duration: number;
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

  createWorkoutPlan(plan: WorkoutPlan): Observable<WorkoutPlan> {
    return this.http.post<WorkoutPlan>(`${this.baseUrl}/plan/add`, plan, { headers: this.getHeaders() });
  }

  getAllWorkoutPlans(): Observable<WorkoutPlan[]> {
    return this.http.get<WorkoutPlan[]>(`${this.baseUrl}`, { headers: this.getHeaders() });
  }


  getAllPlans(): Observable<WorkoutPlan[]> {
    return this.http.get<WorkoutPlan[]>(`${this.baseUrl}/plan/get-plans`, { headers: this.getHeaders() });
  }

  updateWorkoutPlan(id: number, plan: WorkoutPlan): Observable<WorkoutPlan> {
    return this.http.put<WorkoutPlan>(`${this.baseUrl}/update/${id}`, plan, { headers: this.getHeaders() });
  }

  deleteWorkoutPlan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/plan/delete/${id}`, { headers: this.getHeaders() });
  }

  addTrainingSession(workoutPlanId: number, request: TrainingSessionRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/plan/${workoutPlanId}/assign-session`, request, { 
      headers: this.getHeaders() 
    });
  }
  getProgressTracking(): Observable<any[]> { 
    return this.http.get<any[]>(`${this.baseUrl}/progress-tracker/get-progresses`, { headers: this.getHeaders() });
  }
  }