import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerChallengeService } from 'src/app/feature-module/customers/achievements/customer-challenge/customer-challenge.service';
import { Challenge } from 'src/app/feature-module/customers/achievements/customer-challenge/challenge.model';
import { ChallengeStatus } from 'src/app/feature-module/customers/achievements/customer-challenge/challenge-status.enum';

@Component({
  selector: 'app-edit-challenge',
  templateUrl: './edit-challenge.component.html',
  styleUrls: ['./edit-challenge.component.css']
})
export class EditChallengeComponent implements OnInit {

  challengeId!: string;
  challenge: Challenge = {
    challengeId: '',
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    xpPoints: 0,
    status: ChallengeStatus.PENDING,
    userId: '',
    participation: false,
    reminder15: false,
    validation: false
  };

  originalChallenge?: Challenge;

  statusOptions = [
    { label: 'Pending', value: ChallengeStatus.PENDING },
    { label: 'Failed', value: ChallengeStatus.FAILED },
    { label: 'Canceled', value: ChallengeStatus.CANCELED },
  ];

  successMessage = '';
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private challengeService: CustomerChallengeService
  ) {}

  ngOnInit(): void {
    this.challengeId = this.route.snapshot.paramMap.get('challengeId')!;
    this.fetchChallengeDetails();
  }

  // ✅ Fetch initial challenge details
  fetchChallengeDetails(): void {
    this.challengeService.getChallengeById(this.challengeId).subscribe({
      next: (data) => {
        this.challenge = { ...data };
        this.originalChallenge = { ...data };
      },
      error: () => {
        this.errorMessage = '❌ Failed to load challenge details.';
      }
    });
  }

  // ✅ Form validation
  isFormValid(): boolean {
    const now = new Date();
    const startDate = new Date(this.challenge.startDate);
    const endDate = new Date(this.challenge.endDate);

    if (!this.challenge.title.trim() || !this.challenge.description.trim()) return false;
    if (this.challenge.xpPoints === null || this.challenge.xpPoints <= 0) return false;
    if (this.challenge.status === ChallengeStatus.PENDING && (startDate < now || endDate < now)) return false;
    if (startDate >= endDate) return false;

    return true;
  }

  // ✅ Update challenge method
  updateChallenge(): void {
    this.successMessage = '';
    this.errorMessage = '';

    const now = new Date();
    const startDate = new Date(this.challenge.startDate);
    const endDate = new Date(this.challenge.endDate);

    // Required fields check
    if (!this.challenge.title.trim() || !this.challenge.description.trim() ||
        !this.challenge.startDate || !this.challenge.endDate ||
        this.challenge.xpPoints === undefined || this.challenge.xpPoints === null) {
      this.errorMessage = '🚫 All fields are required.';
      return;
    }

    // XP Points minimum check
    if (this.challenge.xpPoints < 1) {
      this.errorMessage = '🚫 XP Points must be at least 1.';
      return;
    }

    // Dates in future only for PENDING
    if (this.challenge.status === ChallengeStatus.PENDING && (startDate < now || endDate < now)) {
      this.errorMessage = '🚫 For pending status, dates must be in the future.';
      return;
    }

    // Start date before end date
    if (endDate <= startDate) {
      this.errorMessage = '🚫 End date must be after start date.';
      return;
    }

    const originalStatus = this.originalChallenge?.status;
    const originalStartDate = new Date(this.originalChallenge!.startDate).getTime();
    const originalEndDate = new Date(this.originalChallenge!.endDate).getTime();
    const datesChanged = startDate.getTime() !== originalStartDate || endDate.getTime() !== originalEndDate;

    // Change to Pending requires date change
    if (
      this.challenge.status === ChallengeStatus.PENDING &&
      ['FAILED', 'CANCELED', 'ACTIVE'].includes(originalStatus || '') &&
      !datesChanged
    ) {
      this.errorMessage = '🚫 To switch to Pending, you must change the dates.';
      return;
    }

    // Build object to send
    const updatedChallenge = {
      title: this.challenge.title.trim(),
      description: this.challenge.description.trim(),
      startDate: this.challenge.startDate,
      endDate: this.challenge.endDate,
      xpPoints: this.challenge.xpPoints,
      status: this.challenge.status,
      participation: ['FAILED', 'CANCELED', 'PENDING'].includes(this.challenge.status) ? false : this.challenge.participation,
      reminder15: ['FAILED', 'CANCELED', 'PENDING'].includes(this.challenge.status) ? false : this.challenge.reminder15,
      validation: ['FAILED', 'CANCELED', 'PENDING'].includes(this.challenge.status) ? false : this.challenge.validation,
    };

    // ✅ API call
    this.challengeService.updateChallenge(this.challengeId, updatedChallenge).subscribe({
      next: () => {
        this.successMessage = '✅ Challenge successfully updated.';
        setTimeout(() => this.router.navigate(['/admin/liste-challenges']), 1500);
      },
      error: (error) => {
        const errorText = error.error?.message || error.error || 'An error occurred while updating the challenge.';
        this.errorMessage = errorText;
      }
      
    });
  }

  // ✅ Navigation
  navigateToList(): void {
    this.router.navigate(['/admin/liste-challenges']);
  }

  // ✅ Status change handler
  onStatusChange(newStatus: ChallengeStatus): void {
    this.challenge.status = newStatus;

    if (
      newStatus === ChallengeStatus.FAILED ||
      newStatus === ChallengeStatus.CANCELED ||
      newStatus === ChallengeStatus.PENDING
    ) {
      this.challenge.participation = false;
      this.challenge.reminder15 = false;
      this.challenge.validation = false;
    }
  }
}
