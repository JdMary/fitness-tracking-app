import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerChallengeService } from 'src/app/feature-module/customers/achievements/customer-challenge/customer-challenge.service';
import { Challenge } from 'src/app/feature-module/customers/achievements/customer-challenge/challenge.model';
import { ChallengeStatus } from 'src/app/feature-module/customers/achievements/customer-challenge/challenge-status.enum';

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
    userId: 'userId',
    status: ChallengeStatus.PENDING,
    reminder15: false,
    participation: false,
    validation: false
  };

  // ✅ Messages
  successMessage: string = '';
  errors: { [key: string]: string } = {};

  constructor(
    private challengeService: CustomerChallengeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveChallenge(): void {
    // ✅ Reset messages
    this.errors = {};
    this.successMessage = '';

    this.challengeService.addChallenge(this.challenge).subscribe({
      next: (response) => {
        console.log('✅ Challenge créé avec succès', response);
        this.successMessage = '✅ Challenge successfully created! Redirecting...';

        // ✅ Option : Attendre un peu pour que l'utilisateur voit le message
        setTimeout(() => {
          this.router.navigate(['/admin/liste-challenges']);
        }, 1500); // 1.5 seconde de délai
      },
      error: (errorResponse) => {
        const errorMessage = errorResponse.error;
        console.error('❌ Erreurs reçues :', errorMessage);

        if (typeof errorMessage === 'string') {
          const errorsArray = errorMessage.split('|'); // ✅ Split des erreurs multiples

          errorsArray.forEach((error: string) => {
            const trimmedError = error.trim();
            if (trimmedError.includes('titre')) {
              this.errors['title'] = trimmedError;
            }
            if (trimmedError.includes('description')) {
              this.errors['description'] = trimmedError;
            }
            if (trimmedError.includes('expérience')) {
              this.errors['xpPoints'] = trimmedError;
            }
            if (trimmedError.includes('début')) {
              this.errors['startDate'] = trimmedError;
            }
            if (trimmedError.includes('fin')) {
              this.errors['endDate'] = trimmedError;
            }
          });
        }
      }
    });
  }
  navigateToList(): void {
    this.router.navigate(['/admin/liste-challenges']);
  }
}
