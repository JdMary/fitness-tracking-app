import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ProviderBookingRoutingModule } from './provider-booking-routing.module';
import { ProviderBookingComponent } from './provider-booking.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderBookingComponent
  ],
  imports: [
    CommonModule,
    ProviderBookingRoutingModule,
    SharedModule
  ],
  providers: [
    DatePipe
  ]
})
export class ProviderBookingModule { }
