import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-provider-signup-subscription',
  templateUrl: './provider-signup-subscription.component.html',
  styleUrls: ['./provider-signup-subscription.component.css']
})
export class ProviderSignupSubscriptionComponent {
  public routes = routes;
}
