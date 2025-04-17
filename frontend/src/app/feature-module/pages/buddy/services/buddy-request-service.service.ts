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

@Injectable({
  providedIn: 'root'
})
export class BuddyRequestService {
  private apiUrl = 'http://localhost:8222/api/v1/buddies/request';
  private token = this.tokenService.getToken();
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getMyBuddyRequests(): Observable<BuddyRequestFull[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    return this.http.get<BuddyRequestFull[]>(`${this.apiUrl}/retrieveByEmail`, { headers });
  }
  getBuddyRequests(): Observable<BuddyRequestFull[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    return this.http.get<BuddyRequestFull[]>(`${this.apiUrl}/retrieveByNotEmail`, { headers });
  }

  addBuddyRequest(buddyRequest: BuddyRequest): Observable<BuddyRequest> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    });
    return this.http.post<BuddyRequest>(`${this.apiUrl}/add`, buddyRequest, { headers });
  }

  addPotentialMatch(id: number): Observable<BuddyRequestFull> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    return this.http.put<BuddyRequestFull>(`${this.apiUrl}/addPotentialMatch/${id}`, null, { headers });
  }

  acceptMatch(id: number): Observable<BuddyMatch> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    return this.http.post<BuddyMatch>(`${this.apiUrl}/acceptMatch/${id}`, null, { headers });
  }
  rejectMatch(id: number): Observable<BuddyRequestFull> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    return this.http.put<BuddyRequestFull>(`${this.apiUrl}/rejectMatch/${id}`, null, { headers });
  }
  
  displayUserName(userEmail: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/displayUser/${userEmail}`);
  }
  findBuddyRequest(id: number): Observable<BuddyRequest> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    return this.http.get<BuddyRequest>(`${this.apiUrl}/findbyId/${id}`, { headers });
  }

  updateBuddyRequest(id: number, request: BuddyRequest): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    return this.http.put(`${this.apiUrl}/update/${id}`, request, { headers });
  }

}

