import { Component, OnInit } from '@angular/core';
import { BuddyMatchServiceService, BuddyMatch } from '../services/buddy-match-service.service';

@Component({
  selector: 'app-buddy-match',
  templateUrl: './buddy-match.component.html',
  styleUrl: './buddy-match.component.css'
})
export class BuddyMatchComponent implements OnInit {
  buddyMatches: (BuddyMatch & { reminderSet?: boolean })[] = [];
  matchesCount: number = 0;
  currentUserEmail: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 4;

  constructor(private buddyMatchService: BuddyMatchServiceService) {}

  ngOnInit(): void {
    this.loadBuddyMatches();
    this.buddyMatchService.getEmail().subscribe({
      next: (email) => {
        this.currentUserEmail = email as string;
      }
    });
  }

  loadBuddyMatches(): void {
    this.buddyMatchService.getBuddyMatches().subscribe({
      next: (matches) => {
        this.buddyMatches = matches.map(match => ({
          ...match,
          reminderSet: match.reminder1 || match.reminder2
        }));
        this.matchesCount = matches.length;
      },
      error: (error) => {
        console.error('Error fetching buddy matches:', error);
      }
    });
  }

  get paginatedBuddyMatches(): (BuddyMatch & { reminderSet?: boolean })[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.buddyMatches.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.buddyMatches.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  setReminder(match: BuddyMatch): void { 
    this.buddyMatchService.getEmail().subscribe({
      next: (email) => {
        this.currentUserEmail = email as string;
        match.reminderSet = !match.reminderSet;
        if (this.currentUserEmail === match.email1) {
          match.reminder1 = match.reminderSet;
        } else {
          match.reminder2 = match.reminderSet;
        }
        this.buddyMatchService.setReminder(match.id).subscribe({
          next: () => {
            console.log('Reminder set successfully');
          }
        });
      }
    });
  }
}
