import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../../../token/token.service';



export interface BuddyMatch {
  email1: string;
  email2: string;
  goal: string;           
  workoutStartTime: Date;  
  duration: number; 
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

}
