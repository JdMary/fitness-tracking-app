import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {
  private apiUrl = environment.apiUrl + '/api/v1/workouts/training-session';

  constructor(private http: HttpClient) { }

  createBulkTrainingSessions(workoutPlanId: number, sessions: any[], token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.post(`${this.apiUrl}/bulk/${workoutPlanId}`, sessions, { headers });
  }

  // Other training session related methods can be added here
}