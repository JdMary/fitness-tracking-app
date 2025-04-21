import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerChallengeService } from 'src/app/feature-module/customers/achievements/services/customer-challenge.service';
import { Challenge } from 'src/app/feature-module/customers/achievements/models/challenge.model';
import { ChallengeStatus } from 'src/app/feature-module/customers/achievements/models/challenge-status.enum';


@Component({
  selector: 'app-details-challenge',
  templateUrl: './details-challenge.component.html',
  styleUrls: ['./details-challenge.component.css']
})
export class DetailsChallengeComponent implements OnInit {
  challengeId!: string;
  challenge?: Challenge;
  showFullDescription: boolean = false;

  constructor(
    private route: ActivatedRoute,
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
}