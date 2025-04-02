import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-payment-gateways',
  templateUrl: './payment-gateways.component.html',
  styleUrls: ['./payment-gateways.component.css']
})
export class PaymentGatewaysComponent {
  public routes = routes;
}
