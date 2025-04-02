import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingBookingRoutingModule } from './pending-booking-routing.module';
import { PendingBookingComponent } from './pending-booking.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PendingBookingComponent
  ],
  imports: [
    CommonModule,
    PendingBookingRoutingModule,
    SharedModule
  ]
})
export class PendingBookingModule { }
