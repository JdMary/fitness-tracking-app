import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaderBoard } from './customer-leaderboard.model';
import { FullBoardResponse } from '../customer-leaderboard-detail/board-response.model';



@Injectable({
  providedIn: 'root'
})
export class CustomerLeaderboardService {

  private apiUrl = 'http://localhost:8073/api/v1/leaderBoard';

  constructor(private http: HttpClient) {}

  getAllLeaderboards(): Observable<LeaderBoard[]> {
    return this.http.get<LeaderBoard[]>(`${this.apiUrl}/liste`);
  }

  getLeaderboardWithUsers(boardId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/withUsers/${boardId}`);
  }

  addLeaderboard(board: LeaderBoard): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/addBoard`, board);
  }

  deleteLeaderboard(boardId: string): Observable<string> {
    return this.http.delete(`${this.apiUrl}/delete/${boardId}`, { responseType: 'text' });
  }


  updateLeaderboard(leaderboard: LeaderBoard): Observable<LeaderBoard> {
    return this.http.put<LeaderBoard>(`${this.apiUrl}/update/${leaderboard.boardId}`, leaderboard);
}
getLeaderboardById(id: string): Observable<LeaderBoard> {
    return this.http.get<LeaderBoard>(`${this.apiUrl}/getById/${id}`);
  }
  
  


  getBoardByUserId(userId: string): Observable<FullBoardResponse> {
    return this.http.get<FullBoardResponse>(`${this.apiUrl}/byUser/${userId}`);
  }

}
