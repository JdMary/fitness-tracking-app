import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-connected-apps',
  templateUrl: './connected-apps.component.html',
  styleUrls: ['./connected-apps.component.css']
})
export class ConnectedAppsComponent {
  public routes = routes;
}
