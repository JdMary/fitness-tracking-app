import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPayoutRoutingModule } from './add-payout-routing.module';
import { AddPayoutComponent } from './add-payout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddPayoutComponent
  ],
  imports: [
    CommonModule,
    AddPayoutRoutingModule,
    SharedModule
  ]
})
export class AddPayoutModule { }
