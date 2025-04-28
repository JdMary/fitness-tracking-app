import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLeaderboardService } from '../../../../shared/services/customer-leaderboard.service';
import { FullBoardResponse } from '../models/board-response.model';

@Component({
  selector: 'app-customer-leaderboard-detail',
  templateUrl: './customer-leaderboard-detail.component.html',
  styleUrls: ['./customer-leaderboard-detail.component.css']
})
export class CustomerLeaderboardDetailComponent implements OnInit {
  boardDetails: FullBoardResponse | null = null;
  errorMessage: string = '';
  currentUserRank: number | null = null;
  currentUserXP: number | null = null;
  currentUserEmail: string = '';

  constructor(
    private leaderboardService: CustomerLeaderboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchMyLeaderboard();
  }

  fetchMyLeaderboard(): void {
    this.leaderboardService.getMyLeaderboard().subscribe({
      next: (data) => {
        this.boardDetails = data;
        console.log('📊 Board Details:', this.boardDetails.users);

        if (this.boardDetails.users && this.boardDetails.users.length > 0) {
          // ✅ Trie par XP décroissant
          this.boardDetails.users.sort((a, b) => b.xpPoints - a.xpPoints);

          // ✅ Récupère l'email depuis le token
          const token = localStorage.getItem('authToken');
          if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const email = payload.sub;
            this.currentUserEmail = email;

            this.boardDetails.users.forEach((user, index) => {
              user.rank = index + 1;
              if (user.email === email) {
                this.currentUserRank = user.rank;
                this.currentUserXP = user.xpPoints;
              }
            });
          }
        }
      },
      error: (error) => {
        this.errorMessage = '❌ Failed to load your leaderboard.';
        console.error(error);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/customers/liste-leaderboards']);
  }
}
