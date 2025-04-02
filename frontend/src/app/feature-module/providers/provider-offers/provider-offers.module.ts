import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderOffersRoutingModule } from './provider-offers-routing.module';
import { ProviderOffersComponent } from './provider-offers.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderOffersComponent
  ],
  imports: [
    CommonModule,
    ProviderOffersRoutingModule,
    SharedModule
  ]
})
export class ProviderOffersModule { }
