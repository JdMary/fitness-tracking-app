import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutRequestRoutingModule } from './payout-request-routing.module';
import { PayoutRequestComponent } from './payout-request.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PayoutRequestComponent
  ],
  imports: [
    CommonModule,
    PayoutRequestRoutingModule,
    SharedModule
  ]
})
export class PayoutRequestModule { }
