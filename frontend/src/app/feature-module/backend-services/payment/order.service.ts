import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:8222/api/v1/users';

  constructor(private http: HttpClient) {}
  private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('authToken'); // Retrieve token from local storage
        return new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
      }
  getLastUserOrderAndUpdateToPaid(userId: string): Observable<any> {
    const url = `${this.baseUrl}/last-user-order/${userId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  getUserOrders(userId: string): Observable<any> {
    const url = `${this.baseUrl}/user-orders/${userId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
}