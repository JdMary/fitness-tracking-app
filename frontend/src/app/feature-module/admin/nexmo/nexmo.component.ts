import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-nexmo',
  templateUrl: './nexmo.component.html',
  styleUrls: ['./nexmo.component.css']
})
export class NexmoComponent {
  public routes = routes;
}
