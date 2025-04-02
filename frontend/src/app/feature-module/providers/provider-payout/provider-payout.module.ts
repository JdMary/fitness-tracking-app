import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderPayoutRoutingModule } from './provider-payout-routing.module';
import { ProviderPayoutComponent } from './provider-payout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderPayoutComponent
  ],
  imports: [
    CommonModule,
    ProviderPayoutRoutingModule,
    SharedModule
  ]
})
export class ProviderPayoutModule { }
