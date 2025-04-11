import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  register(name: string, number: number, email: string, password: string, role: string): Observable<any> {
    const url = `${this.baseUrl}/register`;
    const body = { name, number, email, password, role };
    return this.http.post(url, body);
  }

  extractUsername(token: string): Observable<string> {
    const url = `${this.baseUrl}/extract-username`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<string>(url, { headers });
  }

  extractUserDetails(token: string): Observable<any> {
    const url = `${this.baseUrl}/extract-user-details`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(url, { headers });
  }
}