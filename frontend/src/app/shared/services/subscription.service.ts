import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacilityMonthlyRevenue } from '../models/facility-monthly-revenue.model';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private baseUrl = 'http://localhost:8222/api/v1/facilities/subscriptions';

  constructor(private http: HttpClient) {}
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); 
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  getUserSubscriptions(token: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    return this.http.get<any[]>(`${this.baseUrl}/my`, { headers });
  }
  cancelSubscription(subId: number, token: string): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(
      `${this.baseUrl}/cancel/${subId}`,
      {}, 
      {
        headers,
        responseType: 'text' as const 
      }
    );
  }
  getAllSubscriptions(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.baseUrl}/all`, { headers });
  }
  deleteSubscription(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { headers: this.getHeaders() });
  }
  
  
  
  searchUserSubscriptions(token: string, keyword: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.baseUrl}/search?keyword=${keyword}`, { headers });
  }
  filterSubscriptions(token: string, location: string, dateFrom: string, dateTo: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const params = `location=${location}&dateFrom=${dateFrom}&dateTo=${dateTo}`;
    return this.http.get<any[]>(`${this.baseUrl}/filter?${params}`, { headers });
  }
  searchSubscriptions(token: string, keyword: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.baseUrl}/searchadmin?keyword=${keyword}`, { headers });
  }
  getMonthlyRevenueByFacility(token: string): Observable<FacilityMonthlyRevenue[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<FacilityMonthlyRevenue[]>(`${this.baseUrl}/revenue/monthly-by-facility`, { headers });
  }

  
  
}
