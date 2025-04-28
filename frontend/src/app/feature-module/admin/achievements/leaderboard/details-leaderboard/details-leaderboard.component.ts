import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerLeaderboardService } from 'src/app/shared/services/customer-leaderboard.service';
import { FullBoardResponse } from 'src/app/feature-module/customers/achievements/models/board-response.model';

@Component({
  selector: 'app-details-leaderboard',
  templateUrl: './details-leaderboard.component.html',
  styleUrls: ['./details-leaderboard.component.css']
})
export class DetailsLeaderboardComponent implements OnInit {

  boardId: string | null = null;
  boardDetails: FullBoardResponse | null = null;
  errorMessage: string = '';
  isLoading: boolean = false; // Ajout du loader

  constructor(
    private leaderboardService: CustomerLeaderboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.boardId = this.route.snapshot.paramMap.get('boardId');

    if (!this.boardId) {
      this.errorMessage = 'No leaderboard ID provided.';
      return;
    }

    this.fetchBoardDetails();
  }

  fetchBoardDetails(): void {
    this.isLoading = true; // On commence à loader
    this.leaderboardService.getLeaderboardWithUsers(this.boardId!).subscribe({
      next: (data: FullBoardResponse) => {
        this.boardDetails = data;
        console.log('📊 Board Details:', this.boardDetails);
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = '❌ Failed to load leaderboard details.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/admin/liste-leaderboard']);
  }
  removeUserFromBoard(userId: string): void {
    // Appeler ici le service pour supprimer l'utilisateur du leaderboard
    this.leaderboardService.removeUserFromLeaderboard(userId).subscribe({
      next: (response) => {
      
        this.router.navigate([`/admin/details-leaderboard/${this.boardId}`]);

      },
      error: (error) => {
        this.router.navigate([`/admin/details-leaderboard/${this.boardId}`]);

      }
    });
  }
  
}
