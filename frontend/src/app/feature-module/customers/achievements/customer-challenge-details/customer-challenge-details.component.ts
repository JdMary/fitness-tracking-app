import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Challenge } from '../models/challenge.model';
import { CustomerChallengeService } from '../services/customer-challenge.service';
import { ChallengeStatus } from '../models/challenge-status.enum';

@Component({
  selector: 'app-customer-challenge-details',
  templateUrl: './customer-challenge-details.component.html',
  styleUrls: ['./customer-challenge-details.component.css'],
})
export class CustomerChallengeDetailsComponent implements OnInit, OnDestroy {
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
    this.fetchChallengeDetails();

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
    this.challengeService.getChallengeById(this.challengeId).subscribe({
      next: (data: Challenge) => {
        this.challenge = data;
        if (this.challenge.status === 'ACTIVE' && !this.challenge.participation) {
          this.remainingParticipationTime = this.calculateRemainingParticipationTime();
        }
      },
      error: (error) => console.error('❌ Erreur lors de la récupération du challenge :', error),
    });
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
      next: () => this.fetchChallengeDetails(),
      error: (error) => console.error('❌ Erreur lors de la validation :', error),
    });
  }

  participate(): void {
    if (!this.challenge) return;

    this.challengeService.participate(this.challenge.challengeId).subscribe({
      next: () => this.fetchChallengeDetails(),
      error: (error) => console.error('❌ Erreur lors de la participation :', error),
    });
  }

  goBack(): void {
    this.router.navigate(['/customers/customer-challenge', this.challenge?.userId]);
  }

  calculateRemainingParticipationTime(): string {
    if (!this.challenge?.startDate) return '';

    const startTime = new Date(this.challenge.startDate).getTime();
    const cancelTime = startTime + 5 * 60 * 1000;
    const now = new Date().getTime();
    const timeDiff = cancelTime - now;

    if (timeDiff <= 0) return '⛔ Time is over!';

    const minutes = Math.floor(timeDiff / 1000 / 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);
    return `${minutes} minute(s) and ${seconds} second(s)`;
  }

  formatDuration(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
  
    return `${days}d ${hours}h ${minutes}m`;
  }
  

  getRemainingGeneralTime(): string | null {
    if (!this.challenge) return null;

    const now = new Date();
    const start = new Date(this.challenge.startDate);
    const end = new Date(this.challenge.endDate);

    if (start > now) return this.formatDuration(start.getTime() - now.getTime()) + ' until start';
    if (end > now) return this.formatDuration(end.getTime() - now.getTime()) + ' until end';
    return null;
  }
}
