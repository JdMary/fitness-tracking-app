import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InprogressBookingRoutingModule } from './inprogress-booking-routing.module';
import { InprogressBookingComponent } from './inprogress-booking.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InprogressBookingComponent
  ],
  imports: [
    CommonModule,
    InprogressBookingRoutingModule,
    SharedModule
  ]
})
export class InprogressBookingModule { }
