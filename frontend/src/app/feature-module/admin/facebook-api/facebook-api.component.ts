import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-facebook-api',
  templateUrl: './facebook-api.component.html',
  styleUrls: ['./facebook-api.component.css']
})
export class FacebookApiComponent {
  public routes = routes;
}
