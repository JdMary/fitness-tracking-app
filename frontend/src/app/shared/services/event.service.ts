import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';  

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8222/api/v1/facilities/events';
  private baseUrl2 = 'http://localhost:8222/api/v1/facilities/registrations';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); 
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  registerToEvent(eventId: number): Observable<any> {
    return this.http.post(`${this.baseUrl2}/register/${eventId}`, {}, {
      headers: this.getAuthHeaders()
    });
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/all`, {
      headers: this.getAuthHeaders()
    });
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  createEvent(event: Event): Observable<Event> {
    const token = localStorage.getItem('authToken') || ''; 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Event>(`${this.baseUrl}/create`, event, { headers });
  }

  updateEvent(id: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/update/${id}`, event, {
      headers: this.getAuthHeaders()
    });
  }
  searchEvents(keyword: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/search?keyword=${encodeURIComponent(keyword)}` ,{
      headers: this.getAuthHeaders()
    });
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  cancelEvent(id: number): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/cancel/${id}`, null, {
      headers: this.getAuthHeaders()
    });
  }

  getEventsByFacility(facilityId: number): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/facility/${facilityId}`, {
      headers: this.getAuthHeaders()
    });
  }

  getUpcomingEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/upcoming`, {
      headers: this.getAuthHeaders()
    });
  }
}
