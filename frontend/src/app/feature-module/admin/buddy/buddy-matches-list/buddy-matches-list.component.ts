import { Component, OnInit } from '@angular/core';
import { BuddyRequestService, BuddyMatchFull } from '../services/buddy-request-service.service';
import { AuthService } from '../../../backend-services/user/auth.service';


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

  constructor(private buddyService: BuddyRequestService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadBuddyMatches();
  }

  loadBuddyMatches() {
    this.buddyService.getBuddyMatches().subscribe({
      next: (matches) => {
        this.buddyMatches = matches;
        this.buddyMatches.forEach(match => {
          if (match.email1 && match.email2) {
            this.authService.extractNameFromEmail(match.email1).subscribe(
              (name) => {
                match.name1 = name;
              }
            );
            this.authService.extractNameFromEmail(match.email2).subscribe(
              (name) => {
                match.name2 = name;
              }
            );
          }
        });
      }
    });
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
