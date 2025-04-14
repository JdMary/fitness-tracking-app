import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Achievement } from './achievement.model'; 

@Injectable({
  providedIn: 'root',
})
export class CustomerAchievementService {
  private apiUrl = 'http://localhost:8222/api/v1/achievements'; 
  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6ImZhcmFoQGVzcHJpdC50biIsImV4cCI6MTc0NDY0MTM3MH0.DxUXt6kNGs_eeHb8kWJ9-dp8_fPxj-LLcsqCaAK4erE";

  constructor(private http: HttpClient) {}

  getAllAchievements(): Observable<Achievement[]> {
    console.log('📞 Appel API pour récupérer les achievements...');
    const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token
    return this.http.get<any[]>(`${this.apiUrl}/liste`, { headers }).pipe(
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
    const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token
    return this.http.delete<void>(`${this.apiUrl}/delete/${achieveId}`, { headers });
  }

  updateAchievement(achievement: Achievement): Observable<Achievement> {
    const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token
    return this.http.put<Achievement>(`${this.apiUrl}/update/${achievement.achieveId}`, achievement, { headers });
  }
  
  getAchievementById(achieveId: string): Observable<Achievement> {
    const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token
    return this.http.get<Achievement>(`${this.apiUrl}/getById/${achieveId}`, { headers });
  }
  
  updateProgress(exerciseId: string, totalSets: number): Observable<string> {
    const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token
    return this.http.put<string>(`${this.apiUrl}/updateProgress/${exerciseId}/${totalSets}`, {}, { headers });
  }
}