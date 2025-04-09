import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-free-trial',
  templateUrl: './free-trial.component.html',
  styleUrls: ['./free-trial.component.css']
})
export class FreeTrialComponent {
  public routes = routes;
  public passwordClass = false;
  togglePassword() {
    this.passwordClass = !this.passwordClass;
  }
  constructor(private router: Router) {}
  public navigate() {
    this.router.navigate([routes.home]);
  }
}
