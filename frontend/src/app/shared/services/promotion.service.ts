import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Promotion {
  id?: number;
  promoCode: string;
  description: string;
  discountPercentage: number;
  startDate: string;  
  endDate: string;
  active: boolean;
  sportFacility: {
    id: number;
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
 
  private baseUrl = 'http://localhost:8222/api/v1/facilities/promotions';

  constructor(private http: HttpClient) { }

 
  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders().set('Authorization', token);
  }

  getAllPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.baseUrl}/all`);
  }
  
  

  
  deletePromotion(promotionId: number, token: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${promotionId}`, { headers: this.getAuthHeaders(token) });
  }

  
  addPromotion(promotion: Promotion, token: string): Observable<Promotion> {
    return this.http.post<Promotion>(`${this.baseUrl}/add`, promotion, { headers: this.getAuthHeaders(token) });
  }


  getPromotionById(promotionId: number, token: string): Observable<Promotion> {
    return this.http.get<Promotion>(`${this.baseUrl}/${promotionId}`, { headers: this.getAuthHeaders(token) });
  }

  updatePromotion(promotion: Promotion, token: string): Observable<Promotion> {
    return this.http.put<Promotion>(`${this.baseUrl}/update/${promotion.id}`, promotion, { headers: this.getAuthHeaders(token) });
  }

 
  getSportFacilities(): Observable<any[]> {

    return this.http.get<any[]>('http://localhost:8222/api/v1/facilities/all');
  }
  getActivePromotions(token: string): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(
      `${this.baseUrl}/active`,
      { headers: this.getAuthHeaders(token) }
    );
  }

  getFacilityNames(token: string): Observable<string[]> {
    const headers = this.getAuthHeaders(token);
    return this.http.get<string[]>(`${this.baseUrl}/facilitiesnames`, { headers });
  }  
  
  
  getPromotionsByFacility(name: string, token: string): Observable<any[]> {
    const headers = this.getAuthHeaders(token);
    return this.http.get<any[]>(`${this.baseUrl}/by-facility?name=${encodeURIComponent(name)}`, { headers });
  }
  searchPromotions(name: string, token: string): Observable<Promotion[]> {
    const headers = this.getAuthHeaders(token);
    return this.http.get<Promotion[]>(`${this.baseUrl}/search?name=${encodeURIComponent(name)}`, { headers });
  }
  

}
