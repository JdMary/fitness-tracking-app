import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../../../token/token.service';



export interface BuddyMatch {
  id: number;
  email1: string;
  email2: string;
  name1: string;
  name2: string;
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
  
  private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('authToken'); // Retrieve token from local storage
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    }
  
  getBuddyMatches(): Observable<BuddyMatch[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveByEmail`, { headers: this.getHeaders() });
  }

  getBuddyMatcheByID(id: number): Observable<BuddyMatch> {
    return this.http.get<BuddyMatch>(`${this.apiUrl}/findbyId/${id}`, { headers: this.getHeaders() });
  }
  setReminder(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/setReminder/${id}`, null, { headers: this.getHeaders() });
  }

  unsetReminder(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/unsetReminder/${id}`, null, { headers: this.getHeaders() });
  }
  getEmail(): Observable<String> {
    return this.http.get(`${this.apiUrl}/getEmail`, { 
      headers: this.getHeaders(), 
      responseType: 'text' 
    });
  }

}
