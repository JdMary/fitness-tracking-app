import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Challenge } from './challenge.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerChallengeService {
  private apiUrl = 'http://localhost:8222/api/v1/challenges';
  token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6ImZhcmFoQGVzcHJpdC50biIsImV4cCI6MTc0NDY0MTM3MH0.DxUXt6kNGs_eeHb8kWJ9-dp8_fPxj-LLcsqCaAK4erE"
  
  constructor(private http: HttpClient) {}

  getAllChallenges(): Observable<Challenge[]> {
    console.log('📞 Appel API pour récupérer les challenges...');
    const headers = { Authorization: `Bearer ${this.token}` };
    return this.http.get<any[]>(`${this.apiUrl}/liste`, { headers }).pipe(
      map(data =>
        data.map(item => ({
          challengeId: item.challenge_id,
          title: item.title,
          description: item.description,
          startDate: item.startDate,
          endDate: item.endDate,
          status: item.status,
          xpPoints: item.xpPoints,
          participation: item.participation,
          reminder15: item.reminder15,
          userId: item.userId,
          validation: item.validation
        }))
      )
    );
  }

  // ✅ Recherche par mot-clé et date
  getChallengesByKeywordAndDate(keyword: string, startDate?: string): Observable<Challenge[]> {
    const params: any = { keyword };
    if (startDate) {
      params.startDate = startDate;
    }
    const headers = { Authorization: `Bearer ${this.token}` };
    return this.http.get<any[]>(`${this.apiUrl}/findBy`, { headers, params }).pipe(
      map(data =>
        data.map(item => ({
          challengeId: item.challenge_id,
          title: item.title,
          description: item.description,
          startDate: item.startDate,
          endDate: item.endDate,
          status: item.status,
          xpPoints: item.xpPoints,
          participation: item.participation,
          reminder15: item.reminder15,
          userId: item.userId,
          validation: item.validation
        }))
      )
    );
  }

  // ✅ Participer à un challenge
  participate(challengeId: string): Observable<any> {
    console.log('🚀 Appel participation pour challengeId:', challengeId);
    const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token dans les en-têtes
    return this.http.put(`${this.apiUrl}/participate/${challengeId}`, {}, { headers });
}

  // ✅ Valider un challenge
validateChallenge(challengeId: string): Observable<any> {
  const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token dans les en-têtes
  return this.http.put(`${this.apiUrl}/validate/${challengeId}`, {}, { headers });
}

// ✅ Récupérer les détails d'un challenge
getChallengeById(challengeId: string): Observable<Challenge> {
  const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token dans les en-têtes
  console.log(`Fetching challenge with ID: ${challengeId}`);
  return this.http.get<Challenge>(`${this.apiUrl}/getById/${challengeId}`, { headers });
}

// ✅ Récupérer les challenges par utilisateur
getChallengesByUserId(userId: string): Observable<Challenge[]> {
  const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token dans les en-têtes
  return this.http.get<Challenge[]>(`${this.apiUrl}/user/${userId}`, { headers });
}

// ✅ Ajouter un challenge
addChallenge(challenge: Challenge): Observable<Challenge> {
  const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token dans les en-têtes
  return this.http.post<Challenge>(`${this.apiUrl}/addChallenge`, challenge, { headers });
}

// ✅ Supprimer un challenge
deleteChallenge(challengeId: string): Observable<any> {
  const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token dans les en-têtes
  return this.http.delete(`${this.apiUrl}/deleteChallenge/${challengeId}`, { headers });
}

// ✅ Mettre à jour un challenge
updateChallenge(challengeId: string, updatedChallenge: any): Observable<any> {
  const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token dans les en-têtes
  return this.http.put<any>(
      `${this.apiUrl}/update/${challengeId}`,
      updatedChallenge,
      { headers, responseType: 'text' as 'json' }
  );
}
  

}
