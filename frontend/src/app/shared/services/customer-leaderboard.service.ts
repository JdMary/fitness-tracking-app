import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaderBoard } from '../../feature-module/customers/achievements/models/customer-leaderboard.model';
import { FullBoardResponse } from '../../feature-module/customers/achievements/models/board-response.model';



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

addLeaderboard(board: LeaderBoard): Observable<LeaderBoard> {
  return this.http.post<LeaderBoard>(`${this.apiUrl}/addBoard`, board, { headers: this.getHeaders() });
}

  deleteLeaderboard(boardId: string): Observable<string> {
    return this.http.delete(`${this.apiUrl}/delete/${boardId}`,{ headers: this.getHeaders(), responseType: 'text' });
  }

updateLeaderboard(leaderBoardId: string, updatedLeaderBoard: any): Observable<any> {
  return this.http.put<any>(
      `${this.apiUrl}/update/${leaderBoardId}`,
      updatedLeaderBoard,
      {headers: this.getHeaders() , responseType: 'text' as 'json' }
  );
}



getLeaderboardById(id: string): Observable<LeaderBoard> {
    return this.http.get<LeaderBoard>(`${this.apiUrl}/getById/${id}`, { headers: this.getHeaders() });
}

getBoardByUserId(userId: string): Observable<FullBoardResponse> {
    return this.http.get<FullBoardResponse>(`${this.apiUrl}/byUser/${userId}`, { headers: this.getHeaders() });
}
getBoardByEmail(email: string): Observable<FullBoardResponse> {
  return this.http.get<FullBoardResponse>(
    `${this.apiUrl}/byEmail/${encodeURIComponent(email)}`,
    { headers: this.getHeaders() }
  );
}

getMyLeaderboard(): Observable<FullBoardResponse> {
  return this.http.get<FullBoardResponse>(`${this.apiUrl}/myLeaderBoard`, {
    headers: this.getHeaders()
  });
}
removeUserFromLeaderboard(userId: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/remove-user-from-board/${userId}`, { headers: this.getHeaders() });
}
}