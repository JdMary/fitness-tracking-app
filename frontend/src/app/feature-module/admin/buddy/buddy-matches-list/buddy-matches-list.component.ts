import { Component, OnInit } from '@angular/core';
import { BuddyRequestService, BuddyMatchFull } from '../services/buddy-request-service.service';

@Component({
  selector: 'app-buddy-matches-list',
  templateUrl: './buddy-matches-list.component.html',
  styleUrl: './buddy-matches-list.component.css'
})
export class BuddyMatchesListComponent implements OnInit {
  buddyMatches: BuddyMatchFull[] = [];
  pageSize: number = 10;
  currentPage: number = 1;
  pageSizeOptions: number[] = [10, 25, 50, 100];

  constructor(private buddyService: BuddyRequestService) {}

  ngOnInit(): void {
    this.loadBuddyMatches();
  }

  loadBuddyMatches() {
    this.buddyService.getBuddyMatches().subscribe(
      matches => this.buddyMatches = matches
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onPageSizeChange(event: any) {
    this.pageSize = event.target.value;
    this.currentPage = 1;
  }

  get paginatedMatches() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.buddyMatches.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.buddyMatches.length / this.pageSize);
  }
}
