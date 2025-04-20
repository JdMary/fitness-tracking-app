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
  buddyRequestsCount: number = 0;
  currentPage: number = 1;
  pageSize: number = 6;
  totalPages: number = 1;
  userName : string = '';

  constructor(private buddyRequestService: BuddyRequestService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadBuddyRequests();
    //console.log(this.getUserNameFromEmail("tabib.rami@esprit.tn"));
  }

  get paginatedBuddyRequests(): BuddyRequestFull[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.buddyRequests.slice(startIndex, endIndex);
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
                request.userName = name; // Assuming `userName` is a property in BuddyRequestFull
              },
              (error) => {
                console.error('Error extracting name from email:', error);
              }
            );
          }
        });

        this.buddyRequestsCount = data.length;
        this.totalPages = Math.ceil(this.buddyRequestsCount / this.pageSize);
      }
    );
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
        // Update the local buddy request to reflect the change
        this.buddyRequests = this.buddyRequests.map(request => 
          request.id === requestId 
            ? { ...request, status: 'WAITING' } 
            : request
        );
      },
      (error) => {
        console.error('Error subscribing to buddy request:', error);
        // Handle error (show message to user, etc.)
      }
    );
  }
}
