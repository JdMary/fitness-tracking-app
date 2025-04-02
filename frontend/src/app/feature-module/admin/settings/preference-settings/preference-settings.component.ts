import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-preference-settings',
  templateUrl: './preference-settings.component.html',
  styleUrls: ['./preference-settings.component.css']
})
export class PreferenceSettingsComponent {
  public routes = routes;
}
