import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaypalRoutingModule } from './paypal-routing.module';
import { PaypalComponent } from './paypal.component';


@NgModule({
  declarations: [
    PaypalComponent
  ],
  imports: [
    CommonModule,
    PaypalRoutingModule
  ]
})
export class PaypalModule { }
