import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-provider-settings',
  templateUrl: './provider-settings.component.html',
  styleUrls: ['./provider-settings.component.css']
})
export class ProviderSettingsComponent {
  public routes = routes;
}
