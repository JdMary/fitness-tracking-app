import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { LeaderBoard } from 'src/app/feature-module/customers/achievements/models/customer-leaderboard.model';
import { CustomerLeaderboardService } from 'src/app/shared/services/customer-leaderboard.service';

@Component({
  selector: 'app-add-leaderboard',
  templateUrl: './add-leaderboard.component.html',
  styleUrls: ['./add-leaderboard.component.css']
})
export class AddLeaderboardComponent implements OnInit {

  newLeaderboard: LeaderBoard = {
    boardId: '',
    name: '',
    description: ''
  };

  successMessage: string = '';
  errors: { [key: string]: string } = {};

  constructor(
    private leaderboardService: CustomerLeaderboardService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addLeaderboard(): void {
    this.successMessage = '';
    this.errors = {};

    this.leaderboardService.addLeaderboard(this.newLeaderboard).subscribe({
      next: (savedLeaderboard) => {
        this.successMessage = '✅ Leaderboard added successfully!';
        setTimeout(() => {
          this.router.navigate(['/admin/liste-leaderboard']);
        }, 2000);
      },
      error: (errorResponse: HttpErrorResponse) => {
        const msg = errorResponse.error;

        // Si le message d'erreur est une chaîne de texte
        if (typeof msg === 'string') {
          const errorParts = msg.split('|');
          errorParts.forEach((err: string) => {
            const trimmed = err.trim();
            if (trimmed.includes('title')) this.errors['name'] = trimmed;
            if (trimmed.includes('description')) this.errors['description'] = trimmed;
          });
        }
        // Gestion des erreurs générales
        else {
          this.errors['general'] = "An unexpected error occurred.";
        }
      }
    });
  }

  navigateToList(): void {
    this.router.navigate(['/admin/liste-leaderboard']);
  }

  clearError(field: string): void {
    if (this.errors[field]) {
      delete this.errors[field];
    }
  }

  titleCase(str: string): string {
    return str.toLowerCase().split(' ').map((part: string): string => {
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    }).join(' ');
  }
}
