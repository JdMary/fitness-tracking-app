import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerLeaderboardService } from 'src/app/shared/services/customer-leaderboard.service';
import { LeaderBoard } from 'src/app/feature-module/customers/achievements/models/customer-leaderboard.model';

@Component({
  selector: 'app-edit-leaderboard',
  templateUrl: './edit-leaderboard.component.html',
  styleUrls: ['./edit-leaderboard.component.css']
})
export class EditLeaderboardComponent implements OnInit {

  boardId!: string;
  leaderboard: LeaderBoard = {
    boardId: '',
    name: '',
    description: ''
  };

  successMessage: string = '';
  errors: { [key: string]: string } = {};

  constructor(
    private route: ActivatedRoute,
    private leaderboardService: CustomerLeaderboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.boardId = this.route.snapshot.paramMap.get('boardId')!;
    this.fetchLeaderboardDetails();
  }

  // Charger les détails du leaderboard
  fetchLeaderboardDetails(): void {
    this.leaderboardService.getLeaderboardById(this.boardId).subscribe({
      next: (data: LeaderBoard) => {
        this.leaderboard = { ...data };
      },
      error: () => {
        this.errors['general'] = '❌ Échec du chargement des détails du leaderboard.';
      }
    });
  }

  // Mettre à jour le leaderboard
  updateLeaderboard(): void {
    this.errors = {};
    this.successMessage = '';
  
    this.leaderboardService.updateLeaderboard(this.boardId, this.leaderboard).subscribe({
      next: () => {
        this.successMessage = '✅ Challenge mis à jour avec succès ! Redirection...';
        setTimeout(() => this.router.navigate(['/admin/liste-challenges']), 1500);
      },
      error: (errorResponse) => {
        console.error('❌ Erreurs reçues :', errorResponse);
        
        if (errorResponse.error && typeof errorResponse.error === 'string') {
          try {
            // Essayer de parser le message d'erreur JSON
            const errorObj = JSON.parse(errorResponse.error);
            if (errorObj.errors) {
              errorObj.errors.forEach((error: string) => {
                if (error.includes('name:')) this.errors['name'] = error.split('name:')[1].trim();
                else if (error.includes('description:')) this.errors['description'] = error.split('description:')[1].trim();
             
              });
            }
          } catch (e) {
            // Si le parsing échoue, traiter comme une erreur simple
            const errorParts = errorResponse.error.split('|');
            errorParts.forEach((part: string) => {
              const [field, message] = part.split(':').map((s: string) => s.trim());
              if (field && message) {
                const cleanField = field.toLowerCase();
                if (cleanField.includes('name')) this.errors['name'] = message;
                else if (cleanField.includes('description')) this.errors['description'] = message;
              
              }
            });
          }
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

}
