import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.css']
})
export class AddSubscriptionComponent {
  public routes = routes;
}
