import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainingSession } from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {
  private baseUrl = 'http://localhost:8222/api/v1/workouts';
  private readonly authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im1haGRpQGdtYWlsLnRuIiwiZXhwIjoxNzQ0NzYyMzYxfQ.birMge1UZvZHoVt1iddf_xSv4df0DvziuZgDO53rztg';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
  }
  createBulkTrainingSession(id: number, trainingSessions: any[]): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/training-session/bulk/${id}`, trainingSessions, { headers: this.getHeaders() });
  }
  getAllSessions(): Observable<TrainingSession[]> {
      return this.http.get<TrainingSession[]>(`${this.baseUrl}/training-session/get-sessions`, { headers: this.getHeaders() });
    }
  getAllSessionsByWorkout(id: number): Observable<TrainingSession[]> {
      return this.http.get<TrainingSession[]>(`${this.baseUrl}/training-session/get-sessions-by-workout/${id}`, { headers: this.getHeaders() });
    }
    deleteTrainingSession(id: number): Observable<any> {
      return this.http.delete<any>(`${this.baseUrl}/training-session/delete/${id}`, { headers: this.getHeaders() });
    }
}