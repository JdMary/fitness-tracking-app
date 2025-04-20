import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { C } from '@angular/cdk/keycodes';
import { UserDetails } from '../../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8222/api/v1/auth';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const body = { email, password };
    return this.http.post(url, body);
  }

  register(name: string, number: number, email: string, password: string, role: string, image: File): Observable<any> {
    const url = `${this.baseUrl}/register`;
    const formData = new FormData();
    const data = { name, number, email, password, role };
    formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));
    formData.append('multipartFile', image);
    return this.http.post(url, formData);
  }


  extractUsername(token: string): Observable<string> {
    const url = `${this.baseUrl}/extract-username`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    console.log(this.http.get(url, { headers, responseType: 'text' }));
    return this.http.get(url, { headers, responseType: 'text' });
  }

  extractUserDetails(token: string): Observable<UserDetails> {
    const url = `${this.baseUrl}/extract-user-details`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(url, { headers });
  }

  forgotPassword(email: string, options: any = {}): Observable<any> {
    const url = `${this.baseUrl}/forgot-password`;
    return this.http.post(url, { email }, options);
  }

  verifyOTP(email: string, otp: string): Observable<any> {
    const url = `${this.baseUrl}/verify-otp`;
    const params = { email, otp };
    return this.http.post(url, null, { params, responseType: 'text' }); // Expect plain text response
  }

  resetPassword(email: string, newPassword: string): Observable<any> {
    const url = `${this.baseUrl}/reset-password`;
    const body = { email, newPassword };
    return this.http.post(url, body, { responseType: 'text' }); // Expect plain text response
  }

  extractNameFromEmail(email: string): Observable<string> {
    const url = `${this.baseUrl}/extract-name/${email}`;
    return this.http.get(url, { responseType: 'text' });
  }
}