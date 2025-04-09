import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Challenge } from './challenge.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerChallengeService {
  private apiUrl = 'http://localhost:8073/api/v1/challenges';

  constructor(private http: HttpClient) {}

  getAllChallenges(): Observable<Challenge[]> {
    console.log('📞 Appel API pour récupérer les challenges...');
    return this.http.get<any[]>(`${this.apiUrl}/liste`).pipe(
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

    return this.http.get<any[]>(`${this.apiUrl}/findBy`, { params }).pipe(
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
    return this.http.put(`${this.apiUrl}/participate/${challengeId}`, {});
  }

  // ✅ Valider un challenge
  validateChallenge(challengeId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/validate/${challengeId}`, {});
  }





  //recuper details 
  getChallengeById(challengeId: string): Observable<Challenge> {
    console.log(`Fetching challenge with ID: ${challengeId}`);
    return this.http.get<Challenge>(`${this.apiUrl}/getById/${challengeId}`);

  }
  getChallengesByUserId(userId: string): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(`${this.apiUrl}/user/${userId}`);
  }
  
  
  

  addChallenge(challenge: Challenge): Observable<Challenge> {
    return this.http.post<Challenge>(`${this.apiUrl}/addChallenge`, challenge);
  }

  deleteChallenge(challengeId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteChallenge/${challengeId}`);
  }
  
  updateChallenge(challengeId: string, updatedChallenge: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/update/${challengeId}`,
      updatedChallenge,
      { responseType: 'text' as 'json' } 
    );
  }
  

}
