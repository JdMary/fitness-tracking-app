import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SportFacilityService {
  private baseUrl = 'http://localhost:8222/api/v1/facilities'; 

  constructor(private http: HttpClient) {}

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  
  createFacility(facilityFormData: FormData, token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, facilityFormData, { headers: this.getAuthHeaders(token) });
  }

 
  getAllFacilitiesPublic(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

 
  getAllFacilities(token: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`, { headers: this.getAuthHeaders(token) });
  }

  
  deleteFacility(id: number, token: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { headers: this.getAuthHeaders(token) });
  }

  
  updateFacility(facility: any, token: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${facility.id}`, facility, { headers: this.getAuthHeaders(token) });
  }


  getFacilityById(id: number, token: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/detail/${id}`, {
      headers: this.getAuthHeaders(token),
    });
  }
  updateFacilityWithImage(formData: FormData, token: string, facilityId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${facilityId}`, formData, {
      headers: this.getAuthHeaders(token)
    });
  }
  createSubscription(subscriptionData: any, token: string, priceType: string, promotionId?: number): Observable<any> {
    const params: any = { priceType };
    if (promotionId) {
      params.promotionId = promotionId;
    }

    return this.http.post(
      `${this.baseUrl}/subscriptions/add`,
      subscriptionData,
      {
        headers: this.getAuthHeaders(token),
        params
      }
    );
    
  }  
  getFilteredFacilities(filters: {
    location?: string,
    sportType?: string,
    availability?: boolean
  }) {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    let query = [];
    if (filters.location) query.push(`location=${filters.location}`);
    if (filters.sportType) query.push(`sportType=${filters.sportType}`);
    if (filters.availability !== undefined) query.push(`availability=${filters.availability}`);
    const queryString = query.length ? `?${query.join('&')}` : '';
  
    return this.http.get<any[]>(`${this.baseUrl}/search${queryString}`, { headers });
  }
  getAllLocations() {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get<string[]>(`${this.baseUrl}/locations`, { headers });
  }
  getAllSportTypes() {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get<string[]>(`${this.baseUrl}/sport-types`, { headers });
  }
  searchFacilities(keyword: string): Observable<any[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any[]>(`${this.baseUrl}/searchback?q=${keyword}`, { headers });
  }
  
  
    
  
}
