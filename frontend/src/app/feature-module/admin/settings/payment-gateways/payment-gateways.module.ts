import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentGatewaysRoutingModule } from './payment-gateways-routing.module';
import { PaymentGatewaysComponent } from './payment-gateways.component';


@NgModule({
  declarations: [
    PaymentGatewaysComponent
  ],
  imports: [
    CommonModule,
    PaymentGatewaysRoutingModule
  ]
})
export class PaymentGatewaysModule { }
