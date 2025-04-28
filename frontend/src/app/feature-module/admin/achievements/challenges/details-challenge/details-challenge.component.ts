import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerChallengeService } from 'src/app/shared/services/customer-challenge.service';
import { Challenge } from 'src/app/feature-module/customers/achievements/models/challenge.model';
import { ChallengeStatus } from 'src/app/feature-module/customers/achievements/models/challenge-status.enum';

declare var bootstrap: any; // 👈 Important pour que TypeScript accepte 'bootstrap.Modal'

@Component({
  selector: 'app-details-challenge',
  templateUrl: './details-challenge.component.html',
  styleUrls: ['./details-challenge.component.css']
})
export class DetailsChallengeComponent implements OnInit {
  challengeId!: string;
  challenge?: Challenge;
  showFullDescription: boolean = false;

  selectedChallenge?: Challenge;
  deleteMessage: string = '';
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private challengeService: CustomerChallengeService
  ) {}

  ngOnInit(): void {
    this.challengeId = this.route.snapshot.paramMap.get('id')!;
    this.loadChallenge();
  }

  loadChallenge(): void {
    this.challengeService.getChallengeById(this.challengeId).subscribe({
      next: (data) => {
        this.challenge = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement du challenge :', err);
      }
    });
  }

  toggleDescription(): void {
    this.showFullDescription = !this.showFullDescription;
  }


  navigateToList(): void {
    this.router.navigate(['/admin/liste-challenges']);
  }
  
}
