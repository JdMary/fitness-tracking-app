import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-provider-signup-payment',
  templateUrl: './provider-signup-payment.component.html',
  styleUrls: ['./provider-signup-payment.component.css']
})
export class ProviderSignupPaymentComponent {
  public routes = routes;
}
