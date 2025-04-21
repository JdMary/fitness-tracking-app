import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Promotion {
  id?: number;
  promoCode: string;
  description: string;
  discountPercentage: number;
  startDate: string;  // ISO string
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
  // On suppose ici que ton gateway expose les promotions sous "/api/v1/facilities/promotions"
  private baseUrl = 'http://localhost:8222/api/v1/facilities/promotions';

  constructor(private http: HttpClient) { }

  // Méthode pour générer les headers avec token pour les appels qui en nécessitent.
  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders().set('Authorization', token);
  }

  /**
   * Récupère toutes les promotions publiquement (aucun token requis)
   */
  getAllPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.baseUrl}/all`);
  }
  
  

  /**
   * Supprime une promotion (nécessite un token valide)
   */
  deletePromotion(promotionId: number, token: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${promotionId}`, { headers: this.getAuthHeaders(token) });
  }

  /**
   * Crée une promotion (nécessite un token)
   */
  addPromotion(promotion: Promotion, token: string): Observable<Promotion> {
    return this.http.post<Promotion>(`${this.baseUrl}/add`, promotion, { headers: this.getAuthHeaders(token) });
  }

  /**
   * Récupère une promotion par son ID (token requis)
   */
  getPromotionById(promotionId: number, token: string): Observable<Promotion> {
    return this.http.get<Promotion>(`${this.baseUrl}/${promotionId}`, { headers: this.getAuthHeaders(token) });
  }

  /**
   * Met à jour une promotion (token requis)
   */
  updatePromotion(promotion: Promotion, token: string): Observable<Promotion> {
    return this.http.put<Promotion>(`${this.baseUrl}/update/${promotion.id}`, promotion, { headers: this.getAuthHeaders(token) });
  }

  /**
   * Récupère la liste des facilities (pour alimenter un dropdown, par exemple)
   * Ici on suppose que l'endpoint est public, sinon ajoute le token.
   */
  getSportFacilities(): Observable<any[]> {
    // Par exemple, si ton endpoint public pour récupérer toutes les facilities est /api/v1/facilities/all :
    return this.http.get<any[]>('http://localhost:8222/api/v1/facilities/all');
  }
  getActivePromotions(token: string): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(
      `${this.baseUrl}/active`,
      { headers: this.getAuthHeaders(token) }
    );
  }
}
