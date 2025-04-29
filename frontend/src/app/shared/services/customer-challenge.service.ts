import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Challenge } from '../../feature-module/customers/achievements/models/challenge.model';
import { ChallengeWithUserDTO } from '../../feature-module/customers/achievements/models/ChallengeWithUserDTO.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerChallengeService {
  private apiUrl = 'http://localhost:8222/api/v1/challenges';
  private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('authToken'); // Retrieve token from local storage
        return new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
      }
  
  constructor(private http: HttpClient) {}

  findAllChallenges(): Observable<Challenge[]> {
    console.log(' Appel API pour récupérer les challenges...');
    return this.http.get<any[]>(`${this.apiUrl}/liste`, { headers: this.getHeaders() }).pipe(
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

  //  Recherche par mot-clé et date
  getChallengesByKeywordAndDate(keyword: string, startDate?: string): Observable<Challenge[]> {
    const params: any = { keyword };
    if (startDate) {
      params.startDate = startDate;
    }
    return this.http.get<any[]>(`${this.apiUrl}/findBy`, { headers : this.getHeaders(), params }).pipe(
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

  //  Participer à un challenge
  participate(challengeId: string): Observable<any> {
    console.log('🚀 Appel participation pour challengeId:', challengeId);
    return this.http.put(`${this.apiUrl}/participate/${challengeId}`, {}, { headers: this.getHeaders() });
}


  //  Valider un challenge
validateChallenge(challengeId: string): Observable<any> {
  return this.http.put(`${this.apiUrl}/validate/${challengeId}`, {}, { headers: this.getHeaders() });
}

//  Récupérer les détails d'un challenge
getChallengeById(challengeId: string): Observable<Challenge> {
  console.log(`Fetching challenge with ID: ${challengeId}`);
  return this.http.get<Challenge>(`${this.apiUrl}/getById/${challengeId}`, { headers: this.getHeaders() });
}

//  Récupérer les challenges par utilisateur
getChallengesByUserId(userId: string): Observable<Challenge[]> {
  return this.http.get<Challenge[]>(`${this.apiUrl}/user/${userId}`, { headers: this.getHeaders() });
}
// Récupérer les challenges par utilisateur connnecté 
getMyChallenges(): Observable<Challenge[]> {
  return this.http.get<any[]>(
    `${this.apiUrl}/my-challenges`,
    { headers: this.getHeaders() }
  ).pipe(
    map((challenges: any[]) =>
      challenges.map((challenge: any) => ({
        ...challenge,
        challengeId: challenge.challenge_id || challenge.challengeId
      }))
    )
  );
}


//  Ajouter un challenge
addChallenge(challenge: Challenge): Observable<Challenge> {
  return this.http.post<Challenge>(`${this.apiUrl}/addChallenge`, challenge, { headers: this.getHeaders() });
}

//  Supprimer un challenge
deleteChallenge(challengeId: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/deleteChallenge/${challengeId}`, { headers: this.getHeaders() });
}

//  Mettre à jour un challenge
updateChallenge(challengeId: string, updatedChallenge: any): Observable<any> {
  return this.http.put<any>(
      `${this.apiUrl}/update/${challengeId}`,
      updatedChallenge,
      {headers: this.getHeaders() , responseType: 'text' as 'json' }
  );
}

//generer un challenge a partie d'un user
generateChallengeFromUser(user: {
  fitnessGoals: string;
  height: number;
  weight: number;
  xpPoints: number;
}): Observable<Challenge> {
  return this.http.post<Challenge>(
    `${this.apiUrl}/generate`,
    user,
    { headers: this.getHeaders() }
  );
}
getAllChallengesWithUsers(): Observable<ChallengeWithUserDTO[]> {
  return this.http.get<ChallengeWithUserDTO[]>(
    `${this.apiUrl}/admin/all`,
    { headers: this.getHeaders() }
  );
}

getAllUsers(): Observable<any[]> {
  return this.http.get<any[]>(
    'http://localhost:8222/api/v1/users/retrieve-all-users', 
    { headers: this.getHeaders() }
  );
}


}
