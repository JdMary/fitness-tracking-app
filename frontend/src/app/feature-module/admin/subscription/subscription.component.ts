import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  subscriptions: any[] = [];
  displayedSubscriptions: any[] = [];
pageNumberArray: number[] = [];
serialNumberArray: number[] = [];
currentPage: number = 1;
pageSize: number = 2; 
totalData: number = 0;

selectedValue = '';
selectedList = [
  { value: 'A - Z' },
  { value: 'Z - A' }
];


  token = localStorage.getItem('authToken') || ''; 

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('authToken') || '';
    this.fetchSubscriptions();
  }

  
  fetchSubscriptions(): void {
    this.subscriptionService.getAllSubscriptions(this.token).subscribe({
      next: (res) => {
        this.subscriptions = res;
        this.totalData = res.length;
        this.updateDisplayedSubscriptions();
      },
      error: (err) => console.error('Erreur lors du chargement des abonnements', err)
    });
  }
  updateDisplayedSubscriptions(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedSubscriptions = this.subscriptions.slice(start, end);
    this.pageNumberArray = Array.from({ length: Math.ceil(this.totalData / this.pageSize) }, (_, i) => i + 1);
    this.serialNumberArray = this.displayedSubscriptions.map((_, i) => start + i + 1);
  }
  sortSubscriptions(): void {
    if (this.selectedValue === 'A - Z') {
      this.subscriptions.sort((a, b) => a.ownerEmail.localeCompare(b.ownerEmail));
    } else if (this.selectedValue === 'Z - A') {
      this.subscriptions.sort((a, b) => b.ownerEmail.localeCompare(a.ownerEmail));
    }
  
    this.currentPage = 1;
    this.updateDisplayedSubscriptions();
  }
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const keyword = input?.value.trim();
  
    if (keyword) {
      this.subscriptionService.searchSubscriptions(this.token, keyword).subscribe({
        next: (res) => {
          this.subscriptions = res;
          this.totalData = res.length;
          this.currentPage = 1;
          this.updateDisplayedSubscriptions();
        },
        error: (err) => {
          console.error('Erreur lors de la recherche des abonnements', err);
        }
      });
    } else {
      this.fetchSubscriptions();
    }
  }
  
  
  
  
  PageSize(): void {
    this.currentPage = 1;
    this.sortSubscriptions(); 
  }
  
  moveToPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedSubscriptions();
  }

  deleteSubscription(id: number): void {
    if (confirm('Are you sure you want to delete this subscription?')) {
      this.subscriptionService.deleteSubscription(id).subscribe({
        next: () => {
          
          this.subscriptions = this.subscriptions.filter((sub) => sub.id !== id);
          this.totalData = this.subscriptions.length;
  
         
          const maxPages = Math.ceil(this.totalData / this.pageSize);
  

          if (this.currentPage > maxPages && this.currentPage > 1) {
            this.currentPage--;
          }
  
        
          this.updateDisplayedSubscriptions();
        },
        error: (err) => {
          console.error('Delete failed', err);

        if (err.error && err.error.message) {
          alert('❌ Error: ' + err.error.message);
        } else {
          alert('❌ An unexpected error occurred while deleting the subscription.');
        }
      }
    });
  }
}
  
  


  

  

  
}
