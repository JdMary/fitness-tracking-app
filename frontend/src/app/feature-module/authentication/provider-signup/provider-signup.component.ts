import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-provider-signup',
  templateUrl: './provider-signup.component.html',
  styleUrls: ['./provider-signup.component.css']
})
export class ProviderSignupComponent {
  public routes = routes;
  public passwordClass = false;

  togglePassword() {
    this.passwordClass = !this.passwordClass;
  }
  constructor(private router: Router) {}
  public navigate() {
    this.router.navigate([routes.login]);
  }
}
