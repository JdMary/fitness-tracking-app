import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-user-subscriptions',
  templateUrl: './user-subscriptions.component.html',
  styleUrls: ['./user-subscriptions.component.css']
})
export class UserSubscriptionsComponent implements OnInit {
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
    const token = localStorage.getItem('authToken') || ''; // Retrieve token from local storage
    if (token) {
      this.subscriptionService.getUserSubscriptions(token).subscribe({
        next: (subs) => {
          console.log('✅ Subscriptions:', subs); 
          this.subscriptions = subs;
        },
        error: (err) => {
          console.error('❌ Erreur lors du chargement des subscriptions', err);
        }
      });
    }
  }
  cancelSubscription(subId: number): void {
    const token = localStorage.getItem('authToken') || ''; // Retrieve token from local storage
  
    this.subscriptionService.cancelSubscription(subId, token).subscribe({
      next: (res) => {
        alert(res); 
        this.loadSubscriptions(); 
      },
      error: (err) => {
        alert(err?.error?.message || 'Erreur lors de l’annulation.');
      }
    });
  }
  
}
