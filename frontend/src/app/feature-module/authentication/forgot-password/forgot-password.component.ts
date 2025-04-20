import { Component } from '@angular/core';
import { AuthService } from '../../backend-services/user/auth.service';
import { routes } from 'src/app/shared/routes/routes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  public routes = routes;
  email: string = '';
  message: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log('Submitting forgot password request for email:', this.email); // Debug email
    this.authService.forgotPassword(this.email, { responseType: 'text' as 'json' }).subscribe({
      next: (response: string) => {
        console.log('Response received:', response); // Debug response
        if (response === 'Password reset email sent successfully') {
          this.message = response;
          this.error = '';
          this.router.navigate([routes.emailOtp], { queryParams: { email: this.email } }); // Pass email as query parameter
        } else {
          this.error = 'Unexpected response from the server.';
          this.message = '';
        }
      },
      error: (err: any) => {
        console.error('Error occurred:', err); // Debug error
        this.error = 'An error occurred while sending the password reset email.';
        this.message = '';
      }
    });
  }
}
