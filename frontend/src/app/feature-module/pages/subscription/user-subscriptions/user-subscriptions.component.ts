import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';
import { routes } from 'src/app/shared/routes/routes';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-subscriptions',
  templateUrl: './user-subscriptions.component.html',
  styleUrls: ['./user-subscriptions.component.css']
})
export class UserSubscriptionsComponent implements OnInit {
  paginatedSubscription: any[] = [];
  

  currentPage: number = 1;
  pageSize: number = 1;
  totalPages: number = 0;
  subscriptions: any[] = [];
  routes = routes;
  isClassAdded: boolean[] = [];
  isCollapsed = false;

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.loadSubscriptions();
  }

  toggleClass(index: number): void {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  loadSubscriptions(): void {
    const token = localStorage.getItem('authToken') || ''; 
    if (token) {
      this.subscriptionService.getUserSubscriptions(token).subscribe({
        next: (subs) => {
          console.log(' Subscriptions:', subs); 
          this.subscriptions = subs;
          this.totalPages = Math.ceil(this.subscriptions.length / this.pageSize);
          this.currentPage = 1; 
          this.updatePaginatedSubscription();
        },
        error: (err) => {
          console.error(' Error loading subscriptions.', err);
        }
      });
    }
  }
  onSearch(event: Event): void {
    const token = localStorage.getItem('authToken') || '';
    const input = event.target as HTMLInputElement;
    const keyword = input.value.trim();
  
    if (token) {
      this.subscriptionService.searchUserSubscriptions(token, keyword).subscribe({
        next: (subs) => {
          this.subscriptions = subs;
          this.currentPage = 1;
          this.updatePaginatedSubscription();
        },
        error: (err) => {
          console.error('Error searching subscriptions', err);
        }
      });
    }
  }
  
  
  cancelSubscription(subId: number): void {
    const token = localStorage.getItem('authToken') || '';
  
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to cancel this subscription?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.isConfirmed) {
        this.subscriptionService.cancelSubscription(subId, token).subscribe({
          next: (res) => {
            Swal.fire({
              icon: 'success',
              title: 'Cancelled!',
              text: res
            });
            this.loadSubscriptions();
          },
          error: (err) => {
            let message = 'An error occurred.';
            if (err?.error?.message) {
              message = err.error.message;
            } else if (typeof err.error === 'string') {
              try {
                const parsed = JSON.parse(err.error);
                message = parsed.message || message;
              } catch (_) {
                message = err.error;
              }
            }
  
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: message
            });
          }
        });
      }
    });
  }
  
  
  
  
  updatePaginatedSubscription(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedSubscription = this.subscriptions.slice(start, end);
    this.totalPages = Math.ceil(this.subscriptions.length / this.pageSize);
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedSubscription();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedSubscription();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedSubscription();
  }
  
}
