import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-plugins-manager',
  templateUrl: './plugins-manager.component.html',
  styleUrls: ['./plugins-manager.component.css']
})
export class PluginsManagerComponent {
  public routes = routes;
}
