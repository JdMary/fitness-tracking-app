import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-customer-notification',
  templateUrl: './customer-notification.component.html',
  styleUrls: ['./customer-notification.component.css']
})
export class CustomerNotificationComponent {
  public routes = routes;
}
