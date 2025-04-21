import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private baseUrl = 'http://localhost:8222/api/v1/facilities/subscriptions';

  constructor(private http: HttpClient) {}

  getUserSubscriptions(token: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // ✅ CORRIGÉ
    return this.http.get<any[]>(`${this.baseUrl}/my`, { headers });
  }
  cancelSubscription(subId: number, token: string): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(
      `${this.baseUrl}/cancel/${subId}`,
      {}, // Le corps de la requête est vide
      {
        headers,
        responseType: 'text' as const // Pour recevoir une chaîne de texte comme réponse (Spring retourne un String)
      }
    );
  }
  getAllSubscriptions(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`http://localhost:8222/api/v1/facilities/subscriptions/all`, { headers });
  }
  deleteSubscription(id: number): Observable<any> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQ3NjY5NzZ9.uUvZIi45ACLfRKJxVyDqnkbxnxAubOsbn4bZfZT_7Xs';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { headers });
  }
  getMonthlyRevenue(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<{ [key: string]: number }>('http://localhost:8222/api/v1/facilities/subscriptions/stats/monthly-revenue', { headers });
  }
  
  getQuarterlyRevenue(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<{ [key: string]: number }>('http://localhost:8222/api/v1/facilities/subscriptions/stats/quarterly-revenue', { headers });
  }
  

  
  
  

  
}
