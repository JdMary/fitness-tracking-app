import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { UserService } from 'src/app/feature-module/backend-services/user/user.service';
import { AuthService } from 'src/app/feature-module/backend-services/user/auth.service';
import { Observable, of } from 'rxjs';
import { StripeService } from 'src/app/feature-module/backend-services/payment/stripe.service';
import { StripePayment } from 'src/app/feature-module/models/stripe-payment';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/feature-module/backend-services/payment/order.service';

@Component({
  selector: 'app-customer-wallet',
  templateUrl: './customer-wallet.component.html',
  styleUrls: ['./customer-wallet.component.css']
})
export class CustomerWalletComponent implements OnInit {
  public routes = routes;
  public userDetails: any = {};
  public isLoggedIn: boolean = false;
  selectedPaymentMethod: string = 'paypal'; // Default payment method
  paymentAmount: number = 0; // Bind this to the amount input field
  public userOrders: any[] = [];

  constructor(
    private userService: UserService, 
    private authService: AuthService, 
    private stripeService: StripeService,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
      const token = localStorage.getItem('authToken');
      this.checkAuthToken();
      if (this.isLoggedIn) {
        const email$: Observable<string> = token ? this.authService.extractUsername(token) : of('');
        //console.log('email:', email$);
        email$.subscribe((email) => {
          this.userService.getUserDetailsByEmail(email).subscribe((user) => {
            console.log('user:', user);
            this.userDetails = user;
            this.loadUserOrders(user.id);
          });
        });
      }
       // Load user orders
    }
    private checkAuthToken(): void {
      this.isLoggedIn = !!localStorage.getItem('authToken'); // Check if token exists
    }

    onSubmitPayment(): void {
      if (this.selectedPaymentMethod === 'stripe') {
        this.createStripePayment();
      } else {
        console.log('Other payment methods are not implemented yet.');
      }
    }

    createStripePayment(): void {
      const paymentRequest: StripePayment = {
        amount: this.paymentAmount*100, // Use the bound amount
        quantity: 1,
        currency: 'USD',
        name: 'Wallet Top-up',
        successUrl: 'http://localhost:4200/stripepaymentsuccess', // Replace with your success URL
        cancelUrl: 'http://localhost:4200/stripepaymentcancel'   // Replace with your cancel URL
      };
  
      const token = localStorage.getItem('authToken');
      if (token) {
        this.stripeService.createPayment(paymentRequest, token).subscribe({
          next: (response) => {
            if (response?.data?.sessionUrl) {
              window.location.href = response.data.sessionUrl; // Redirect to the session URL
            }
          },
          error: (err) => {
            console.error('Payment creation failed:', err);
          }
        });
      }
    }

    private loadUserOrders(id: string): void {
      const token = localStorage.getItem('authToken');
      if (token) {
        this.orderService.getUserOrders(id).subscribe({
          next: (orders) => {
            this.userOrders = orders;
            console.log('User Orders:', this.userOrders);
          },
          error: (err) => {
            console.error('Failed to load user orders:', err);
          }
        });
      }
    }
}
