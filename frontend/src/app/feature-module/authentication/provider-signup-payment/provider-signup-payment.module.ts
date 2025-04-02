import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderSignupPaymentRoutingModule } from './provider-signup-payment-routing.module';
import { ProviderSignupPaymentComponent } from './provider-signup-payment.component';


@NgModule({
  declarations: [
    ProviderSignupPaymentComponent
  ],
  imports: [
    CommonModule,
    ProviderSignupPaymentRoutingModule
  ]
})
export class ProviderSignupPaymentModule { }
