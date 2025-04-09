import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { LeaderBoard } from 'src/app/feature-module/customers/achievements/customer-leaderboard/customer-leaderboard.model';
import { CustomerLeaderboardService } from 'src/app/feature-module/customers/achievements/customer-leaderboard/customer-leaderboard.service';

@Component({
  selector: 'app-add-leaderboard',
  templateUrl: './add-leaderboard.component.html',
  styleUrls: ['./add-leaderboard.component.css']
})
export class AddLeaderboardComponent implements OnInit {

  // On ne prend en compte que boardId, name et description
  newLeaderboard: LeaderBoard = {
    boardId: '',
    name: '',
    description: ''
  };

  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private leaderboardService: CustomerLeaderboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialisation si nécessaire
  }

  addLeaderboard(): void {
    // Vérification additionnelle dans le TS (optionnelle car le formulaire empêche la soumission)
    if (!this.newLeaderboard.name || this.newLeaderboard.name.trim().length < 10) {
      this.errorMessage = 'Title must be at least 10 characters.';
      return;
    }
    if (!this.newLeaderboard.description || this.newLeaderboard.description.trim().length < 10) {
      this.errorMessage = 'Description must be at least 10 characters.';
      return;
    }

    // Si la validation passe, on envoie la requête au backend
    this.leaderboardService.addLeaderboard(this.newLeaderboard).subscribe({
      next: () => {
        this.successMessage = 'Leaderboard added successfully!';
        // Redirection vers la liste après 2 secondes
        setTimeout(() => {
          this.router.navigate(['/admin/liste-leaderboard']);
        }, 2000);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = `❌ Failed to add leaderboard: ${error.message}`;
      }
    });
  }
  navigateToList(): void {
    this.router.navigate(['/admin/liste-leaderboard']);
  }
}
