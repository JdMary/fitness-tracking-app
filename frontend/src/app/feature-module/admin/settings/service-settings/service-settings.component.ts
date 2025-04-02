import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-service-settings',
  templateUrl: './service-settings.component.html',
  styleUrls: ['./service-settings.component.css']
})
export class ServiceSettingsComponent {
  public routes = routes;
}
