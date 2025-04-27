import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventRegistration } from '../models/event-registration.model';

@Injectable({
  providedIn: 'root'
})
export class EventRegistrationService {

  private baseUrl = 'http://localhost:8222/api/v1/facilities/registrations';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); 
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getRegistrationsForEvent(eventId: number): Observable<EventRegistration[]> {
    return this.http.get<EventRegistration[]>(`${this.baseUrl}/event/${eventId}`, {
      headers: this.getAuthHeaders()
    });
  }

  
  registerToEvent(eventId: number): Observable<EventRegistration> {
    return this.http.post<EventRegistration>(`${this.baseUrl}/register/${eventId}`, {}, {
      headers: this.getAuthHeaders()
    });
  }

  
  cancelRegistration(registrationId: number): Observable<EventRegistration> {
    return this.http.put<EventRegistration>(`${this.baseUrl}/cancel/${registrationId}`, {}, {
      headers: this.getAuthHeaders()
    });
  }

 
  getUserRegistrations(): Observable<EventRegistration[]> {
    return this.http.get<EventRegistration[]>(`${this.baseUrl}/user`, {
      headers: this.getAuthHeaders()
    });
  }


  deleteRegistrationByAdmin(registrationId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${registrationId}`, {
      headers: this.getAuthHeaders()
    });
  }
  getAllRegistrations(): Observable<EventRegistration[]> {
    return this.http.get<EventRegistration[]>(`${this.baseUrl}/all`, {
      headers: this.getAuthHeaders()
    });
  }
  searchEventRegistrations(token: string, status?: string, keyword?: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    
    let url = `${this.baseUrl}/search?`;
    if (status) {
      url += `status=${encodeURIComponent(status)}&`;
    }
    if (keyword) {
      url += `keyword=${encodeURIComponent(keyword)}`;
    }
  
    return this.http.get<any[]>(url, { headers });
  }
  
  
  
}
