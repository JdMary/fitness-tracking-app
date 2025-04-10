import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SportFacilityService {
  private baseUrl = 'http://localhost:8070/api/v1/facility'; 

  constructor(private http: HttpClient) {}

  
  createFacility(facility: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.post(this.baseUrl, facility, { headers });
  }

  getAllFacilities(token: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get<any[]>(this.baseUrl, { headers });
  }

  deleteFacility(id: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.delete(`${this.baseUrl}/${id}`, { headers });
  }

  updateFacility(facility: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.put(this.baseUrl, facility, { headers });
  }
  getFacilityById(id: string, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(`${this.baseUrl}/${id}`, { headers });
  }
  getAllFacilitiesPublic(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  getFacilityPublicById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  
}
