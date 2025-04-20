import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../../token/token.service';

export interface BuddyRequestFull {
  id: number;
  userEmail: string;
  potentialMatch: number;
  status: string;         
  goal: string;           
  workoutStartTime: Date;  
  duration: number;    
  match: any;                
  creationDate: string;      
}
export interface BuddyRequest {
  goal: string;           
  workoutStartTime: String;  
  duration: number;    
}

export interface BuddyMatch {
  requestId: number;
  email1: string;
  email2: string;
}
export interface BuddyMatchFull {
  id: number;
  requestId: number;
  email1: string;
  email2: string;
  creationDate: string;      
}

@Injectable({
  providedIn: 'root'
})
export class BuddyRequestService {
  private apiUrlforRequest = 'http://localhost:8222/api/v1/buddies/request';
  private apiUrlforMatch = 'http://localhost:8222/api/v1/buddies/match';
  private token = this.tokenService.getToken();


  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getBuddyRequests(): Observable<BuddyRequestFull[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    return this.http.get<BuddyRequestFull[]>(`${this.apiUrlforRequest}/retrieve`, { headers });
  }
  getBuddyMatches(): Observable<BuddyMatchFull[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    return this.http.get<BuddyMatchFull[]>(`${this.apiUrlforMatch}/retrieve`, { headers });
  }
  
  getCountByStatus(): Observable<{ [status: string]: number }> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<{ [status: string]: number }>(`${this.apiUrlforRequest}/countByStatus`, { headers });
  }

}

