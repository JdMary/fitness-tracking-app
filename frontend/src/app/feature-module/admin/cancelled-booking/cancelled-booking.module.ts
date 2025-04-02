import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelledBookingRoutingModule } from './cancelled-booking-routing.module';
import { CancelledBookingComponent } from './cancelled-booking.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CancelledBookingComponent
  ],
  imports: [
    CommonModule,
    CancelledBookingRoutingModule,
    SharedModule
  ]
})
export class CancelledBookingModule { }
