import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaderBoard } from '../models/customer-leaderboard.model';
import { FullBoardResponse } from '../customer-leaderboard-detail/board-response.model';



@Injectable({
  providedIn: 'root'
})
export class CustomerLeaderboardService {

  private apiUrl = 'http://localhost:8222/api/v1/leaderBoard';
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6ImZhcmFoQGVzcHJpdC50biIsImV4cCI6MTc0NTI1Mzk0OH0.HLIVYx5lbwNhGw6uzvDFDRHCzAG35gU4eRUkDaU6u9Y";
  constructor(private http: HttpClient) {}

  getAllLeaderboards(): Observable<LeaderBoard[]> {
    const headers = { Authorization: `Bearer ${this.token}` }; 
    return this.http.get<LeaderBoard[]>(`${this.apiUrl}/liste`, { headers });
}
getLeaderboardWithUsers(boardId: string): Observable<any> {
  const headers = { Authorization: `Bearer ${this.token}` }; 
  return this.http.get(`${this.apiUrl}/withUsers/${boardId}`, { headers });
}

  addLeaderboard(board: LeaderBoard): Observable<void> {
    const headers = { Authorization: `Bearer ${this.token}` };
    return this.http.post<void>(`${this.apiUrl}/addBoard`, board);
  }

  deleteLeaderboard(boardId: string): Observable<string> {
    const headers = { Authorization: `Bearer ${this.token}` };
    return this.http.delete(`${this.apiUrl}/delete/${boardId}`, { responseType: 'text' });
  }


  updateLeaderboard(leaderboard: LeaderBoard): Observable<LeaderBoard> {
    const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token
    return this.http.put<LeaderBoard>(`${this.apiUrl}/update/${leaderboard.boardId}`, leaderboard, { headers });
}

getLeaderboardById(id: string): Observable<LeaderBoard> {
    const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token
    return this.http.get<LeaderBoard>(`${this.apiUrl}/getById/${id}`, { headers });
}

getBoardByUserId(userId: string): Observable<FullBoardResponse> {
    const headers = { Authorization: `Bearer ${this.token}` }; // Ajout du token
    return this.http.get<FullBoardResponse>(`${this.apiUrl}/byUser/${userId}`, { headers });
}}