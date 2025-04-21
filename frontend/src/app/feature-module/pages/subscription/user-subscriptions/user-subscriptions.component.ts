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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6ImF5YUBlc3ByaXQudG4iLCJleHAiOjE3NDQ3OTk5NzN9.XFO55qL4IR9aW6VqXkCEUmLvMjiLGJQyKk4uJDQQw80'; 
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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6ImF5YUBlc3ByaXQudG4iLCJleHAiOjE3NDQ3OTk5NzN9.XFO55qL4IR9aW6VqXkCEUmLvMjiLGJQyKk4uJDQQw80'; 
  
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
