import { Component, OnInit } from '@angular/core';
import { BuddyRequestService, BuddyMatchFull } from '../services/buddy-request-service.service';

@Component({
  selector: 'app-buddy-matches-list',
  templateUrl: './buddy-matches-list.component.html',
  styleUrl: './buddy-matches-list.component.css'
})
export class BuddyMatchesListComponent implements OnInit {
  buddyMatches: BuddyMatchFull[] = [];

  constructor(private buddyService: BuddyRequestService) {}

  ngOnInit(): void {
    this.loadBuddyMatches();
  }

  loadBuddyMatches() {
    this.buddyService.getBuddyMatches().subscribe(
      matches => this.buddyMatches = matches
    );
  }
}
