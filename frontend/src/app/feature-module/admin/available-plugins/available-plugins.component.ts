import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-available-plugins',
  templateUrl: './available-plugins.component.html',
  styleUrls: ['./available-plugins.component.css']
})
export class AvailablePluginsComponent {
  public routes = routes;
}
