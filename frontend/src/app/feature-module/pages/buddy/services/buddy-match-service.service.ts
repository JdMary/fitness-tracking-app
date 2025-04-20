import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../../../token/token.service';



export interface BuddyMatch {
  id: number;
  email1: string;
  email2: string;
  goal: string;           
  workoutStartTime: Date;  
  duration: number;
  reminder1: boolean;
  reminder2: boolean;
  reminderSet?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BuddyMatchServiceService {

  private apiUrl = 'http://localhost:8222/api/v1/buddies/match';
  private token = this.tokenService.getToken();
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getBuddyMatches(): Observable<BuddyMatch[]> {
    const headers = { 'Authorization': `Bearer ${this.token}` };
    return this.http.get<any[]>(`${this.apiUrl}/retrieveByEmail`, { headers });
  }

  getBuddyMatcheByID(id: number): Observable<BuddyMatch> {
    const headers = { 'Authorization': `Bearer ${this.token}` };
    return this.http.get<BuddyMatch>(`${this.apiUrl}/findbyId/${id}`, { headers });
  }
  setReminder(id: number): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.token}` };
    return this.http.post<any>(`${this.apiUrl}/setReminder/${id}`, null, { headers });
  }

  unsetReminder(id: number): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.token}` };
    return this.http.post(`${this.apiUrl}/unsetReminder/${id}`, null, { headers });
  }
  getEmail(): Observable<String> {
    const headers = { 'Authorization': `Bearer ${this.token}` };
    return this.http.get(`${this.apiUrl}/getEmail`, { 
      headers, 
      responseType: 'text' 
    });
  }

}
