import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SportFacilityService {
  private baseUrl = 'http://localhost:8070/api/v1/facility'; // ✅ adapte l'URL si besoin

  constructor(private http: HttpClient) {}

  // 🔥 Méthode pour créer une facility
  createFacility(facility: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.post(this.baseUrl, facility, { headers });
  }

  // 🔥 Méthode pour récupérer toutes les facilities
  getAllFacilities(token: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get<any[]>(this.baseUrl, { headers });
  }

  // 🔥 Méthode pour supprimer une facility
  deleteFacility(id: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.delete(`${this.baseUrl}/${id}`, { headers });
  }

  // 🔥 Méthode pour mettre à jour une facility
  updateFacility(facility: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.put(this.baseUrl, facility, { headers });
  }
  getFacilityById(id: string, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(`${this.baseUrl}/${id}`, { headers });
  }
  
}
