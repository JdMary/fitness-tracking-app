import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaderBoard } from '../models/customer-leaderboard.model';
import { FullBoardResponse } from '../customer-leaderboard-detail/board-response.model';



@Injectable({
  providedIn: 'root'
})
export class CustomerLeaderboardService {

  private apiUrl = 'http://localhost:8222/api/v1/leaderBoard';
  private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('authToken'); // Retrieve token from local storage
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    }
  constructor(private http: HttpClient) {}

  getAllLeaderboards(): Observable<LeaderBoard[]> {
    return this.http.get<LeaderBoard[]>(`${this.apiUrl}/liste`, { headers : this.getHeaders() });
}
getLeaderboardWithUsers(boardId: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/withUsers/${boardId}`, { headers: this.getHeaders() });
}

  addLeaderboard(board: LeaderBoard): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/addBoard`, board ,{ headers: this.getHeaders() });
  }

  deleteLeaderboard(boardId: string): Observable<string> {
    return this.http.delete(`${this.apiUrl}/delete/${boardId}`,{ headers: this.getHeaders(), responseType: 'text' });
  }


  updateLeaderboard(leaderboard: LeaderBoard): Observable<LeaderBoard> {
    return this.http.put<LeaderBoard>(`${this.apiUrl}/update/${leaderboard.boardId}`, leaderboard, { headers: this.getHeaders() });
}

getLeaderboardById(id: string): Observable<LeaderBoard> {
    return this.http.get<LeaderBoard>(`${this.apiUrl}/getById/${id}`, { headers: this.getHeaders() });
}

getBoardByUserId(userId: string): Observable<FullBoardResponse> {
    return this.http.get<FullBoardResponse>(`${this.apiUrl}/byUser/${userId}`, { headers: this.getHeaders() });
}}