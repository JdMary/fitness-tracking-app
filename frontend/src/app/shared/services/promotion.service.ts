import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// ✅ Interface bien définie
export interface Promotion {
  id?: number;
  promoCode: string;
  description: string;
  discountPercentage: number;
  startDate: string; // Date au format ISO string
  endDate: string;
  active: boolean;
  sportFacility: {
    id: number; // ✅ Je t’ajoute id pour pouvoir l’utiliser dans Add/Edit
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

  // ✅ Get all promotions
  getAllPromotions(token: string): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this.baseUrl, { headers: this.getHeaders(token) });
  }

  // ✅ Delete promotion
  deletePromotion(promotionId: number, token: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${promotionId}`, { headers: this.getHeaders(token) });
  }

  // ✅ Add promotion
  addPromotion(promotion: Promotion, token: string): Observable<Promotion> {
    return this.http.post<Promotion>(this.baseUrl, promotion, { headers: this.getHeaders(token) });
  }

  // ✅ Get one promotion by id
  getPromotionById(promotionId: number, token: string): Observable<Promotion> {
    return this.http.get<Promotion>(`${this.baseUrl}/${promotionId}`, { headers: this.getHeaders(token) });
  }

  // ✅ Update promotion (attention ici !)
  updatePromotion(promotion: Promotion, token: string): Observable<Promotion> {
    return this.http.put<Promotion>(`${this.baseUrl}/${promotion.id}`, promotion, { headers: this.getHeaders(token) });
  }
  
  getSportFacilities(token: string): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8070/api/v1/facility', { headers: this.getHeaders(token) });
  }
}
