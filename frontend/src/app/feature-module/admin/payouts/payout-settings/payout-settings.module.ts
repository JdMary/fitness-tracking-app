import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutSettingsRoutingModule } from './payout-settings-routing.module';
import { PayoutSettingsComponent } from './payout-settings.component';


@NgModule({
  declarations: [
    PayoutSettingsComponent
  ],
  imports: [
    CommonModule,
    PayoutSettingsRoutingModule
  ]
})
export class PayoutSettingsModule { }
