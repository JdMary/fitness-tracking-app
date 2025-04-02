import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashOnDeliveryRoutingModule } from './cash-on-delivery-routing.module';
import { CashOnDeliveryComponent } from './cash-on-delivery.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CashOnDeliveryComponent
  ],
  imports: [
    CommonModule,
    CashOnDeliveryRoutingModule,
    SharedModule
  ]
})
export class CashOnDeliveryModule { }
