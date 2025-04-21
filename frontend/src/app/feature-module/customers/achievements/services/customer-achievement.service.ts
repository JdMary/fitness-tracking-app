import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Achievement } from '../models/achievement.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerAchievementService {
  private apiUrl = 'http://localhost:8222/api/v1/achievements'; 
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Retrieve token from local storage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  constructor(private http: HttpClient) {}

  getAllAchievements(): Observable<Achievement[]> {
    console.log('📞 Appel API pour récupérer les achievements...');
    return this.http.get<any[]>(`${this.apiUrl}/liste`, { headers: this.getHeaders() }).pipe(
      map(data =>
        data.map(item => ({
          achieveId: item.achieveId ?? item.achieve_id ?? '',
          title: item.title ?? '',
          xpPoints: item.xpPoints ?? 0,
          criteria: item.criteria ?? '',
          progress: item.progress ?? 0,
          exerciseId: item.exerciseId ?? item.exercise_id ?? ''
        }))
      )
    );
  }

  deleteAchievement(achieveId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${achieveId}`, { headers: this.getHeaders() });
  }

  updateAchievement(achievement: Achievement): Observable<Achievement> {
    return this.http.put<Achievement>(`${this.apiUrl}/update/${achievement.achieveId}`, achievement, { headers: this.getHeaders() });
  }
  
  getAchievementById(achieveId: string): Observable<Achievement> {
    return this.http.get<Achievement>(`${this.apiUrl}/getById/${achieveId}`,  { headers: this.getHeaders() });
  }
  
  updateProgress(exerciseId: string, totalSets: number): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/updateProgress/${exerciseId}/${totalSets}`, {}, { headers: this.getHeaders() });
  }
}