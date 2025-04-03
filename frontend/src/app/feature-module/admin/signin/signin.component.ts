import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  public routes = routes;
  public passwordClass = false;
  togglePassword() {
    this.passwordClass = !this.passwordClass;
  }
}
