import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-provider-subscription',
  templateUrl: './provider-subscription.component.html',
  styleUrls: ['./provider-subscription.component.css']
})
export class ProviderSubscriptionComponent {
  public routes = routes;
}
