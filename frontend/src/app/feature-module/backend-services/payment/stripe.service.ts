import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StripePayment } from '../../models/stripe-payment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  private apiUrl = 'http://localhost:8222/pay/stripe'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }
  private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('authToken'); // Retrieve token from local storage
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    }
  createPayment(PaymentRequest: StripePayment, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.post(`${this.apiUrl}/create-payment`, PaymentRequest, { headers: this.getHeaders() });
  }

  capturePayment(sessionId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/capture-payment`, { 
      params: { sessionId }, 
      headers: this.getHeaders() 
    });
  }
}
