import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Challenge } from '../customer-challenge/challenge.model';
import { CustomerChallengeService } from '../customer-challenge/customer-challenge.service';
import { ChallengeStatus } from '../customer-challenge/challenge-status.enum';

@Component({
  selector: 'app-customer-challenge-details',
  templateUrl: './customer-challenge-details.component.html',
  styleUrls: ['./customer-challenge-details.component.css'],
})
export class CustomerChallengeDetailsComponent implements OnInit {
  challengeId!: string;
  challenge?: Challenge;
  ChallengeStatus = ChallengeStatus;

  remainingParticipationTime: string = '';
  intervalId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private challengeService: CustomerChallengeService
  ) {}

  ngOnInit(): void {
    this.challengeId = this.route.snapshot.paramMap.get('challengeId')!;
    console.log('✅ Challenge ID récupéré depuis URL :', this.challengeId);

    this.fetchChallengeDetails();

    // ⏱️ Mise à jour dynamique du temps restant toutes les secondes
    this.intervalId = setInterval(() => {
      if (this.challenge && this.challenge.status === 'ACTIVE' && !this.challenge.participation) {
        this.remainingParticipationTime = this.calculateRemainingParticipationTime();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  fetchChallengeDetails(): void {
    this.challengeService.getChallengeById(this.challengeId).subscribe(
      (data: Challenge) => {
        this.challenge = data;
        console.log('✅ Détail du challenge :', data);

        // Initialisation du temps de participation au chargement
        if (this.challenge.status === 'ACTIVE' && !this.challenge.participation) {
          this.remainingParticipationTime = this.calculateRemainingParticipationTime();
        }
      },
      (error) => {
        console.error('❌ Erreur lors de la récupération du challenge :', error);
      }
    );
  }

  getBadgeClass(status: ChallengeStatus): string {
    switch (status) {
      case ChallengeStatus.ACTIVE:
        return 'badge bg-success';
      case ChallengeStatus.PENDING:
        return 'badge bg-warning text-dark';
      case ChallengeStatus.COMPLETED:
        return 'badge bg-primary';
      case ChallengeStatus.CANCELED:
        return 'badge bg-danger';
      case ChallengeStatus.FAILED:
        return 'badge bg-secondary';
      default:
        return 'badge bg-secondary';
    }
  }

  validateChallenge(): void {
    if (!this.challenge) return;

    this.challengeService.validateChallenge(this.challenge.challengeId).subscribe({
      next: (response) => {
        console.log(response.message);
        this.fetchChallengeDetails(); // ✅ Refresh après action
      },
      error: (error) => {
        console.error('❌ Erreur lors de la validation :', error);
      }
    });
  }

  participate(): void {
    if (!this.challenge) return;

    this.challengeService.participate(this.challenge.challengeId).subscribe({
      next: (response) => {
        console.log(response.message);
        this.fetchChallengeDetails(); // ✅ Refresh après action
      },
      error: (error) => {
        console.error('❌ Erreur lors de la participation :', error);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/customers/customer-challenge', this.challenge?.userId]);
  }
  

  // ⏳ Calcul du temps restant global jusqu'à la fin du challenge
  calculateRemainingTime(endDate: string): string {
    const now = new Date().getTime();
    const end = new Date(endDate).getTime();
    const diff = end - now;

    if (diff <= 0) {
      return 'Time is over';
    }

    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    let result = '';
    if (days > 0) result += `${days}d `;
    if (hours > 0 || days > 0) result += `${hours}h `;
    result += `${minutes}min`;

    return result;
  }

  // ⏱️ Calcul du temps restant pour participer (avant annulation automatique après 5min)
  calculateRemainingParticipationTime(): string {
    if (!this.challenge?.startDate) return '';

    const startTime = new Date(this.challenge.startDate).getTime();
    const cancelTime = startTime + 5 * 60 * 1000; // +5 minutes
    const now = new Date().getTime();
    const timeDiff = cancelTime - now;

    if (timeDiff <= 0) {
      return '⛔ Time is over!';
    }

    const minutes = Math.floor(timeDiff / 1000 / 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    return `${minutes} minute(s) and ${seconds} second(s)`;
  }
}
