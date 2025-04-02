import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-login-phone',
  templateUrl: './login-phone.component.html',
  styleUrls: ['./login-phone.component.css']
})
export class LoginPhoneComponent {
  public routes = routes;
  public passwordClass = false;

  togglePassword() {
    this.passwordClass = !this.passwordClass;
  }
}
