import { Component, OnInit } from '@angular/core';
import { BuddyMatchServiceService, BuddyMatch } from '../services/buddy-match-service.service';

@Component({
  selector: 'app-buddy-match',
  templateUrl: './buddy-match.component.html',
  styleUrl: './buddy-match.component.css'
})
export class BuddyMatchComponent implements OnInit {
  buddyMatches: BuddyMatch[] = [];
  matchesCount: number = 0;

  constructor(private buddyMatchService: BuddyMatchServiceService) {}

  ngOnInit(): void {
    this.loadBuddyMatches();
  }

  loadBuddyMatches(): void {
    this.buddyMatchService.getBuddyMatches().subscribe({
      next: (matches) => {
        this.buddyMatches = matches;
        this.matchesCount = matches.length;
      },
      error: (error) => {
        console.error('Error fetching buddy matches:', error);
      }
    });
  }
}
