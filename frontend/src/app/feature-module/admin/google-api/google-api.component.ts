import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-google-api',
  templateUrl: './google-api.component.html',
  styleUrls: ['./google-api.component.css']
})
export class GoogleApiComponent {
  public routes = routes;
}
