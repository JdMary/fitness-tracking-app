import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../../token/token.service';
import { AuthService } from 'src/app/feature-module/backend-services/user/auth.service';


export interface BuddyRequestFull {
  id: number;
  userEmail: string;
  userName: string;
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
  constructor(private http: HttpClient, private tokenService: TokenService, private authService: AuthService ) {}
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Retrieve token from local storage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  getMyBuddyRequests(): Observable<BuddyRequestFull[]> {
    return this.http.get<BuddyRequestFull[]>(`${this.apiUrl}/retrieveByEmail`, { headers: this.getHeaders() });
  }
  getBuddyRequests(): Observable<BuddyRequestFull[]> {
     return this.http.get<BuddyRequestFull[]>(`${this.apiUrl}/retrieveByNotEmail`, { headers: this.getHeaders() });
  }

  addBuddyRequest(buddyRequest: BuddyRequest): Observable<BuddyRequest> {
    return this.http.post<BuddyRequest>(`${this.apiUrl}/add`, buddyRequest, { headers: this.getHeaders() });
  }

  addPotentialMatch(id: number): Observable<BuddyRequestFull> {
    return this.http.put<BuddyRequestFull>(`${this.apiUrl}/addPotentialMatch/${id}`, null, { headers: this.getHeaders() });
  }

  acceptMatch(id: number): Observable<BuddyMatch> {
    return this.http.post<BuddyMatch>(`${this.apiUrl}/acceptMatch/${id}`, null, { headers: this.getHeaders() });
  }
  rejectMatch(id: number): Observable<BuddyRequestFull> {
    return this.http.put<BuddyRequestFull>(`${this.apiUrl}/rejectMatch/${id}`, null, { headers: this.getHeaders() });
  }
  
  displayUserName(userEmail: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/displayUser/${userEmail}`);
  }
  findBuddyRequest(id: number): Observable<BuddyRequest> {
    return this.http.get<BuddyRequest>(`${this.apiUrl}/findbyId/${id}`, { headers: this.getHeaders() });
  }

  updateBuddyRequest(id: number, request: BuddyRequest): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, request, { headers: this.getHeaders() });
  }

}

