import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise, TrainingSession } from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  private baseUrl = 'http://localhost:8222/api/v1/workouts';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Retrieve token from local storage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllExercicesBySession(id: number): Observable<Exercise[]> {
      return this.http.get<Exercise[]>(`${this.baseUrl}/exercises/get-exercices-by-session/${id}`, { headers: this.getHeaders() });
    }
    getAllExercices(): Observable<Exercise[]> {
        return this.http.get<Exercise[]>(`${this.baseUrl}/exercises/get-exercices`, { headers: this.getHeaders() });
        }
  updateExerciseStatus(exerciseId: number, status: boolean): Observable<any> {
    return this.http.put(`${this.baseUrl}/exercises/update-status/${exerciseId}`, status, { headers: this.getHeaders() });
  }
  addExercise(exercise: Exercise, id: number): Observable<Exercise> {
    return this.http.post<Exercise>(`${this.baseUrl}/exercises/add-exercice-by-session/${id}`, exercise, { headers: this.getHeaders() });
  }
  
}