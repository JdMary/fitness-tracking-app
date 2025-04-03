import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public routes = routes;
  public passwordClass = false;

  togglePassword1() {
    this.passwordClass = !this.passwordClass;
  }
  constructor(private router: Router) {}
  public navigate() {
    this.router.navigate([routes.home]);
  }
}
