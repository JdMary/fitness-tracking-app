import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface WorkoutPlan {
   workoutPlanId?: number;
  description: string;
  duration: number;
  startDate: Date;
  difficulty: string;
  goal: string;
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
  private readonly authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im1haGRpQGdtYWlsLnRuIiwiZXhwIjoxNzQ1ODc0ODA2fQ.OiWGL3swaiEetu8Wq4ba8exD1Con0zvp_YHOzIB8cq8';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
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