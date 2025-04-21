import { Component } from '@angular/core';
import { CustomerChallengeService } from 'src/app/feature-module/customers/achievements/services/customer-challenge.service';
import { Challenge } from 'src/app/feature-module/customers/achievements/models/challenge.model';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router'; // ✅ Ajout de l'import

@Component({
  selector: 'app-generate-challenge',
  templateUrl: './generate-challenge.component.html',
})
export class GenerateChallengeComponent {
  generatedChallenge: Challenge | null = null;
  successMessage: string = '';
  errors: { [key: string]: string } = {};

  constructor(
    private challengeService: CustomerChallengeService,
    private router: Router // ✅ Injection du Router ici
  ) {}

  ngOnInit(): void {
    console.log('✅ Composant GenerateChallenge chargé !');
  }

  generateChallenge() {
    const user = {
      fitnessGoals: 'perte de poids',
      height: 160,
      weight: 55,
      xpPoints: 0,
    };

    this.challengeService.generateChallengeFromUser(user).subscribe({
      next: (challenge) => {
        this.generatedChallenge = challenge;
        console.log('💡 Challenge généré :', this.generatedChallenge);
      },
      error: (err) => {
        console.error('❌ Erreur génération challenge :', err);
      }
    });
  }

  saveChallenge() {
    if (!this.generatedChallenge) return;

    this.errors = {};
    this.successMessage = '';

    this.generatedChallenge.startDate = formatDate(
      this.generatedChallenge.startDate,
      "yyyy-MM-dd'T'HH:mm:ss",
      'en-US'
    );
    this.generatedChallenge.endDate = formatDate(
      this.generatedChallenge.endDate,
      "yyyy-MM-dd'T'HH:mm:ss",
      'en-US'
    );

    console.log('📌 Challenge à sauvegarder :', this.generatedChallenge);

    this.challengeService.addChallenge(this.generatedChallenge).subscribe({
      next: (response) => {
        console.log('✅ Challenge créé avec succès', response);
        this.successMessage = '✅ Challenge successfully created! Redirecting...';
        setTimeout(() => {
          this.router.navigate(['/admin/liste-challenges']); // ✅ Redirection
        }, 1500);
      },
      error: (errorResponse) => {
        const errorMessage = errorResponse.error;
        console.error('❌ Erreurs reçues :', errorMessage);

        if (typeof errorMessage === 'string') {
          const errorsArray = errorMessage.split('|');

          errorsArray.forEach((error: string) => {
            const trimmedError = error.trim();
            if (trimmedError.includes('title')) this.errors['title'] = trimmedError;
            if (trimmedError.includes('description')) this.errors['description'] = trimmedError;
            if (trimmedError.includes('points')) this.errors['xpPoints'] = trimmedError;
            if (trimmedError.includes('start')) this.errors['startDate'] = trimmedError;
            if (trimmedError.includes('end')) this.errors['endDate'] = trimmedError;
          });
        }
      }
    });
  }

  navigateToList(): void {
    this.router.navigate(['/admin/liste-challenges']);
  }
}
