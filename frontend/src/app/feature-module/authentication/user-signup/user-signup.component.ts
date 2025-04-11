import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../backend-services/user/auth.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  public routes = routes;
  public signupForm: FormGroup;
  public errorMessage: string | null = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['USER', [Validators.required]] // Default role
    });
  }

  public onSubmit(): void {
    if (this.signupForm.valid) {
      const { name, phone, email, password, role } = this.signupForm.value;
      this.authService.register(name, phone, email, password, role).subscribe({
        next: () => {
          this.router.navigate([routes.login]);
        },
        error: (err) => {
          this.errorMessage = 'Registration failed. Please try again.';
          console.error(err);
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }
}