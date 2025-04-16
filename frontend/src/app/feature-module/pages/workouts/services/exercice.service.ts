import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise, TrainingSession } from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  private baseUrl = 'http://localhost:8222/api/v1/workouts';
  private readonly authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im1haGRpQGdtYWlsLnRuIiwiZXhwIjoxNzQ0NzYyMzYxfQ.birMge1UZvZHoVt1iddf_xSv4df0DvziuZgDO53rztg';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
  }

  getAllExercicesBySession(id: number): Observable<Exercise[]> {
      return this.http.get<Exercise[]>(`${this.baseUrl}/exercises/get-exercices-by-session/${id}`, { headers: this.getHeaders() });
    }
    getAllExercices(): Observable<Exercise[]> {
        return this.http.get<Exercise[]>(`${this.baseUrl}/exercises/get-exercices`, { headers: this.getHeaders() });
        }
}