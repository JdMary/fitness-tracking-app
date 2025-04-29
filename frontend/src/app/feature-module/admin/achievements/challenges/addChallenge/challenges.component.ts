import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerChallengeService } from 'src/app/shared/services/customer-challenge.service';
import { Challenge } from 'src/app/feature-module/customers/achievements/models/challenge.model';
import { ChallengeStatus } from 'src/app/feature-module/customers/achievements/models/challenge-status.enum';
import { User } from'src/app/feature-module/customers/achievements/models/user.model';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  // ✅ Initialisation du challenge
  challenge: Challenge = {
    challengeId: '1',
    title: '',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    description: '',
    xpPoints: 0,
    userId: '',
    status: ChallengeStatus.PENDING,
    reminder15: false,
    participation: false,
    validation: false
  };

  // ✅ Messages et données supplémentaires
  successMessage: string = '';
  errors: { [key: string]: string } = {};
  users: User[] = []; // Liste des utilisateurs

  constructor(
    private challengeService: CustomerChallengeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.challengeService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('❌ Erreur lors du chargement des utilisateurs :', err);
      }
    });
  }

  saveChallenge(): void {
    this.errors = {};
    this.successMessage = '';

    this.challengeService.addChallenge(this.challenge).subscribe({
      next: (response) => {
        console.log('✅ Challenge créé avec succès', response);
        this.successMessage = '✅ Challenge successfully created! Redirecting...';

        setTimeout(() => {
          this.router.navigate(['/admin/liste-challenges']);
        }, 1500);
      },
      error: (errorResponse) => {
        const errorMessage = errorResponse.error;
        console.error('❌ Erreurs reçues :', errorMessage);

        if (typeof errorMessage === 'string') {
          const errorsArray = errorMessage.split('|');
          errorsArray.forEach((error: string) => {
            const trimmedError = error.trim();
            const [key, message] = trimmedError.split(':').map(e => e.trim());
        
            if (key.includes('title')) this.errors['title'] = message;
            else if (key.includes('description')) this.errors['description'] = message;
            else if (key.includes('xpPoints') || key.includes('xp') || key.includes('points')) this.errors['xpPoints'] = message;
            else if (key.includes('start')) this.errors['startDate'] = message;
            else if (key.includes('end')) this.errors['endDate'] = message;
            else if (key.includes('user')) this.errors['userId'] = message;
            else this.errors['general'] = message;
          });
        }
        }
    });
  }

  navigateToList(): void {
    this.router.navigate(['/admin/liste-challenges']);
  }

  clearError(field: string): void {
    if (this.errors[field]) {
      delete this.errors[field];
    }
  }
}