import { Component, OnInit } from '@angular/core';
import { BuddyRequestService, BuddyRequestFull } from '../services/buddy-request-service.service';

@Component({
  selector: 'app-buddy-requests-list',
  templateUrl: './buddy-requests-list.component.html',
  styleUrl: './buddy-requests-list.component.css'
})
export class BuddyRequestsListComponent implements OnInit {
  buddyRequests: BuddyRequestFull[] = [];
  filteredBuddyRequests: BuddyRequestFull[] = [];
  selectedStatus: string = 'ALL';

  constructor(private buddyService: BuddyRequestService) {}

  ngOnInit(): void {
    this.loadBuddyRequests();
    this.filteredBuddyRequests = [...this.buddyRequests];
  }

  loadBuddyRequests() {
    this.buddyService.getBuddyRequests().subscribe(
      requests => this.buddyRequests = requests
    );
  }

  filterByStatus(status: string) {
    this.selectedStatus = status;
    if (status === 'ALL') {
      this.filteredBuddyRequests = [...this.buddyRequests];
    } else {
      this.filteredBuddyRequests = this.buddyRequests.filter(request => request.status === status);
    }
  }
}
