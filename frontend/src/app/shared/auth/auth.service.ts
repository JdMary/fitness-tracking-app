import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8222/api/v1/users'; // Base URL for the backend API

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Retrieve token from local storage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  // Test endpoint
  testService(): Observable<string> {
    return this.http.get(`${this.baseUrl}/test`, { headers: this.getHeaders(), responseType: 'text' });
  }

  // Retrieve all users
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/retrieve-all-users`, { headers: this.getHeaders() });
  }

  // Add a new user
  addUser(user: any): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/add-user`, user, { headers: this.getHeaders() });
  }

  // Update an existing user with image upload
  updateUser(user: any, file: File): Observable<{ status: number }> {
    const formData = new FormData();
    formData.append('data', new Blob([JSON.stringify(user)], { type: 'application/json' }));
    formData.append('multipartFile', file);
    return this.http.put<{ status: number }>(`${this.baseUrl}/update-user`, formData, { headers : this.getHeaders() });
  }

  // Retrieve a user by ID
  getUserById(idUser: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/retrieve-user-id/${idUser}`, { headers: this.getHeaders() });
  }

  // Retrieve a user by email
  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/retrieve-user-email/${email}`, { headers: this.getHeaders() });
  }

  // Retrieve a user's image by email
  getUserImageByEmail(email: string): Observable<string> {
    return this.http.get(`${this.baseUrl}/retrieve-user-image/${email}`, { headers: this.getHeaders(), responseType: 'text' });
  }

  // Remove a user by ID
  removeUser(idUser: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/remove-user/${idUser}`, { headers: this.getHeaders() });
  }

  // Retrieve user activity statistics
  getUserActivityStats(): Observable<{ activeUsers: number; inactiveUsers: number }> {
    return this.http.get<{ activeUsers: number; inactiveUsers: number }>(
      `${this.baseUrl}/user-activity-stats`,
      { headers: this.getHeaders() }
    );
  }

  // Retrieve user signup statistics
  getUserSignupStats(): Observable<{ [month: string]: number }> {
    return this.http.get<{ [month: string]: number }>(
      `${this.baseUrl}/user-signup-stats`,
      { headers: this.getHeaders() }
    );
  }
}