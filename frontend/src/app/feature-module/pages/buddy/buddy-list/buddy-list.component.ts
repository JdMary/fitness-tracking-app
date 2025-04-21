import { Component, OnInit } from '@angular/core';
import { BuddyRequestService, BuddyRequestFull } from '../services/buddy-request-service.service';
import { AuthService } from '../../../backend-services/user/auth.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-buddy-requests',
  templateUrl: './buddy-list.component.html',
  styleUrls: ['./buddy-list.component.css']
})
export class BuddyListComponent implements OnInit {
  public routes = routes;
  buddyRequests: BuddyRequestFull[] = [];
  filteredRequests: BuddyRequestFull[] = [];
  buddyRequestsCount: number = 0;
  currentPage: number = 1;
  pageSize: number = 8;
  totalPages: number = 1;
  userName : string = '';
  currentFilter: string = 'ALL';

  constructor(private buddyRequestService: BuddyRequestService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadBuddyRequests();
  }

  get paginatedBuddyRequests(): BuddyRequestFull[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredRequests.slice(startIndex, endIndex);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  loadBuddyRequests(): void {
    this.buddyRequestService.getBuddyRequests().subscribe(
      (data) => {
        this.buddyRequests = data;
        this.buddyRequests.forEach(request => {
          if (request.userEmail) {
            this.authService.extractNameFromEmail(request.userEmail).subscribe(
              (name) => {
                request.userName = name;
              },
              (error) => {
                console.error('Error extracting name from email:', error);
              }
            );
          }
        });
        this.filterRequests(this.currentFilter); // Apply initial filter
      }
    );
  }

  filterRequests(status: string): void {
    this.currentFilter = status;
    if (status === 'ALL') {
      this.filteredRequests = this.buddyRequests;
    } else {
      this.filteredRequests = this.buddyRequests.filter(request => request.status === status);
    }
    this.buddyRequestsCount = this.filteredRequests.length;
    this.totalPages = Math.ceil(this.buddyRequestsCount / this.pageSize);
    this.currentPage = 1; // Reset to first page when filtering
  }

  getUserNameFromEmail(email: string): void {
    this.authService.extractNameFromEmail(email).subscribe(
      (name) => {
        console.log(name);
        this.userName = name;
        
      },
      (error) => {
        console.error('Error extracting name from email:', error);
      }
    );
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

  subscribe(requestId: number): void {
    this.buddyRequestService.addPotentialMatch(requestId).subscribe(
      (response) => {
        this.buddyRequests = this.buddyRequests.map(request => 
          request.id === requestId 
            ? { ...request, status: 'WAITING' } 
            : request
        );
      },
      (error) => {
        console.error('Error subscribing to buddy request:', error);
      }
    );
  }
}
