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
  private baseUrl = 'http://localhost:8070/api/v1/promotion';

  constructor(private http: HttpClient) { }

  private getHeaders(token: string): HttpHeaders {
    return new HttpHeaders().set('Authorization', token);
  }


  getAllPromotions(token: string): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this.baseUrl, { headers: this.getHeaders(token) });
  }

  deletePromotion(promotionId: number, token: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${promotionId}`, { headers: this.getHeaders(token) });
  }


  addPromotion(promotion: Promotion, token: string): Observable<Promotion> {
    return this.http.post<Promotion>(this.baseUrl, promotion, { headers: this.getHeaders(token) });
  }


  getPromotionById(promotionId: number, token: string): Observable<Promotion> {
    return this.http.get<Promotion>(`${this.baseUrl}/${promotionId}`, { headers: this.getHeaders(token) });
  }

  updatePromotion(promotion: Promotion, token: string): Observable<Promotion> {
    return this.http.put<Promotion>(`${this.baseUrl}/${promotion.id}`, promotion, { headers: this.getHeaders(token) });
  }
  
  getSportFacilities(token: string): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8070/api/v1/facility', { headers: this.getHeaders(token) });
  }
  getActivePromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.baseUrl}/active`);
  }
}
