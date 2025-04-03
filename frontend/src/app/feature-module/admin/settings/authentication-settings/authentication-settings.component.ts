import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-authentication-settings',
  templateUrl: './authentication-settings.component.html',
  styleUrls: ['./authentication-settings.component.css']
})
export class AuthenticationSettingsComponent {
  public routes = routes;
}
