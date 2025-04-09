import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerLeaderboardService } from 'src/app/feature-module/customers/achievements/customer-leaderboard/customer-leaderboard.service';
import { LeaderBoard } from 'src/app/feature-module/customers/achievements/customer-leaderboard/customer-leaderboard.model';

@Component({
  selector: 'app-edit-leaderboard',
  templateUrl: './edit-leaderboard.component.html',
  styleUrls: ['./edit-leaderboard.component.css']
})
export class EditLeaderboardComponent implements OnInit {

  boardId: string | null = null;
  leaderboard: LeaderBoard = {
    boardId: '',
    name: '',
    description: ''
  };

  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private leaderboardService: CustomerLeaderboardService
  ) {}

  ngOnInit(): void {
    // Récupérer le paramètre boardId depuis l'URL
    this.boardId = this.route.snapshot.paramMap.get('boardId');
    console.log('boardId:', this.boardId);
    
    if (!this.boardId) {
      this.errorMessage = 'No Leaderboard ID provided.';
      return;
    }
    
    this.fetchLeaderboardDetails();
  }

  fetchLeaderboardDetails(): void {
    this.leaderboardService.getLeaderboardById(this.boardId!).subscribe({
      next: (data: LeaderBoard) => {
        this.leaderboard = { ...data };
      },
      error: (err) => {
        this.errorMessage = `Failed to load leaderboard: ${err.message}`;
      }
    });
  }

  updateLeaderboard(): void {
    // Réinitialiser les messages
    this.errorMessage = '';
    this.successMessage = '';

    // Validation : vérifier que name et description ne sont pas vides et ont au moins 10 caractères.
    if (!this.leaderboard.name || this.leaderboard.name.trim().length < 10) {
      this.errorMessage = 'Name is required and must be at least 10 characters.';
      return;
    }
    if (!this.leaderboard.description || this.leaderboard.description.trim().length < 10) {
      this.errorMessage = 'Description is required and must be at least 10 characters.';
      return;
    }

    // Si les validations passent, appel du service pour la mise à jour
    this.leaderboardService.updateLeaderboard(this.leaderboard).subscribe({
      next: (updated: LeaderBoard) => {
        this.successMessage = 'Leaderboard updated successfully!';
        setTimeout(() => {
          this.router.navigate(['/admin/achievements/liste-leaderboard']);
        }, 1500);
      },
      error: (err) => {
        this.errorMessage = `Failed to update leaderboard: ${err.error?.message || err.message}`;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/admin/achievements/liste-leaderboard']);
  }
}
