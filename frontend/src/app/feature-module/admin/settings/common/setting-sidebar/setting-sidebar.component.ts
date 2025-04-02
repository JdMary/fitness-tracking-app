import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-setting-sidebar',
  templateUrl: './setting-sidebar.component.html',
  styleUrls: ['./setting-sidebar.component.css']
})
export class SettingSidebarComponent {
public routes = routes;

}
