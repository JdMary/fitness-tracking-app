import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrderService } from 'src/app/feature-module/backend-services/payment/order.service';
import { AuthService } from 'src/app/feature-module/backend-services/user/auth.service';
import { UserService } from 'src/app/feature-module/backend-services/user/user.service';
import { UserDetails } from 'src/app/feature-module/models/user-details';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-payment-redirect',
  template: '<p>Processing payment...</p>',
  styleUrls: ['./payment-redirect.component.css']
})
export class PaymentRedirectComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private authService: AuthService,
    private userService: UserService
  ) {}
  public userDetails: any = {};
  ngOnInit(): void {
    const type = this.route.snapshot.data['type'];
    const token = localStorage.getItem('authToken');
    const email$: Observable<string> = token ? this.authService.extractUsername(token) : of('');
    console.log('token:', token);
      console.log('email:', email$);
      email$.subscribe((email) => {
        console.log('email:', email);
        this.userService.getUserByEmail(email).subscribe((user) => {
          console.log('user:', user);
          if (type === 'success') {
            this.handleSuccess(user);
          } else if (type === 'cancel') {
            this.handleCancel();
          }
        });
      });
  }

  private handleSuccess(user: any): void {
    console.log("user details:", this.userDetails);
    this.orderService.getLastUserOrderAndUpdateToPaid(user.id).subscribe((order) => {
      console.log('Payment successful:', order);
      // Handle successful payment logic here, e.g., update user wallet, show success message, etc.
      this.router.navigate([routes.userwallet]); // Redirect to user wallet
    });
  }

  private handleCancel(): void {
    console.log('Payment canceled.');
    this.router.navigate(['/routes.userwallet']); // Redirect to user wallet
  }
}
