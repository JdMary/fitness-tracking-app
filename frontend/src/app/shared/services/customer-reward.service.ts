import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reward } from '../../feature-module/customers/achievements/models/reward.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerRewardService {
  private apiUrl = 'http://localhost:8222/api/v1/rewards';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getMyRewards(): Observable<Reward[]> {
        return this.http.get<Reward[]>(`${this.apiUrl}/my_rewards`, { headers: this.getHeaders() });
  }
}
