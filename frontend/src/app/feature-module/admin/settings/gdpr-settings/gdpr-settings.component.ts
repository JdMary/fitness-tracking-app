import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-gdpr-settings',
  templateUrl: './gdpr-settings.component.html',
  styleUrls: ['./gdpr-settings.component.css']
})
export class GdprSettingsComponent {
  public routes = routes;
}
