import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../backend-services/user/auth.service';
import { routes } from 'src/app/shared/routes/routes';
import { UserDetails } from '../../models/user-details'; // Import the UserDetails interface

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public routes = routes;
  public loginForm: FormGroup;
  public errorMessage: string | null = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          // Store the token
          localStorage.setItem('authToken', response.token);
          // Fetch user details using the token
          this.authService.extractUserDetails(response.token).subscribe({
            next: (userDetails: UserDetails) => {
              // Navigate based on the user's role
              if (userDetails.role === 'ADMIN') {
                this.router.navigate([this.routes.dashboard]);
              } else {
                this.router.navigate([this.routes.home]);
              }
            },
            error: (err) => {
              this.errorMessage = 'Failed to fetch user details.';
              console.error(err);
            }
          });
        },
        error: (err) => {
          this.errorMessage = 'Login failed. Please check your credentials.';
          console.error(err);
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }
}