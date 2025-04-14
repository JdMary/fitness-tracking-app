import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerLeaderboardService } from '../customer-leaderboard/customer-leaderboard.service';
import { FullBoardResponse } from './board-response.model';

@Component({
  selector: 'app-customer-leaderboard-detail',
  templateUrl: './customer-leaderboard-detail.component.html',
  styleUrls: ['./customer-leaderboard-detail.component.css']
})
export class CustomerLeaderboardDetailComponent implements OnInit {
  boardDetails: FullBoardResponse | null = null;
  errorMessage: string = '';
  userId: string = '';
  currentUserRank: number | null = null;
  currentUserXP: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private leaderboardService: CustomerLeaderboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId') || '';

    if (this.userId) {
      this.fetchLeaderboardDetails(this.userId);
    } else {
      this.errorMessage = '❌ No user ID provided in the URL.';
    }
  }

  fetchLeaderboardDetails(userId: string): void {
    this.leaderboardService.getBoardByUserId(userId).subscribe({
      next: (data) => {
        this.boardDetails = data;

        if (this.boardDetails.users && this.boardDetails.users.length > 0) {
          // ✅ Trie par XP décroissant
          this.boardDetails.users.sort((a, b) => b.xpPoints - a.xpPoints);

          // ✅ Attribue les rangs
          this.boardDetails.users.forEach((user, index) => {
            user.rank = index + 1;
            if (user.userId === this.userId) {
              this.currentUserRank = user.rank;
              this.currentUserXP = user.xpPoints;
            }
          });
        }
      },
      error: (error) => {
        this.errorMessage = '❌ Failed to load leaderboard details.';
        console.error(error);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/customers/liste-leaderboards']);
  }
}
