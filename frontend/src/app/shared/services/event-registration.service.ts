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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDUxOTkxNzV9.c8ZPjjorjoWCvcfgCp-zcf8ZfEGrL0eWSfZla_ZR8SA'; // Remplace par celui dynamique si besoin
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  /**
   * Récupérer les inscriptions pour un événement spécifique
   */
  getRegistrationsForEvent(eventId: number): Observable<EventRegistration[]> {
    return this.http.get<EventRegistration[]>(`${this.baseUrl}/event/${eventId}`, {
      headers: this.getAuthHeaders()
    });
  }

  /**
   * Inscription à un événement
   */
  registerToEvent(eventId: number): Observable<EventRegistration> {
    return this.http.post<EventRegistration>(`${this.baseUrl}/register/${eventId}`, {}, {
      headers: this.getAuthHeaders()
    });
  }

  /**
   * Annuler une inscription
   */
  cancelRegistration(registrationId: number): Observable<EventRegistration> {
    return this.http.put<EventRegistration>(`${this.baseUrl}/cancel/${registrationId}`, {}, {
      headers: this.getAuthHeaders()
    });
  }

  /**
   * Récupérer les événements auxquels l'utilisateur est inscrit
   */
  getUserRegistrations(): Observable<EventRegistration[]> {
    return this.http.get<EventRegistration[]>(`${this.baseUrl}/user`, {
      headers: this.getAuthHeaders()
    });
  }

  /**
   * Supprimer une inscription (admin)
   */
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
  
  
  
}
