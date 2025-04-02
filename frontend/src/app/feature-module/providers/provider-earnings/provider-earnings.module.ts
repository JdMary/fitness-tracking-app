import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderEarningsRoutingModule } from './provider-earnings-routing.module';
import { ProviderEarningsComponent } from './provider-earnings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderEarningsComponent
  ],
  imports: [
    CommonModule,
    ProviderEarningsRoutingModule,
    SharedModule
  ]
})
export class ProviderEarningsModule { }
