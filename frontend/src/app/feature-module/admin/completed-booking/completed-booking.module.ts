import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedBookingRoutingModule } from './completed-booking-routing.module';
import { CompletedBookingComponent } from './completed-booking.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CompletedBookingComponent
  ],
  imports: [
    CommonModule,
    CompletedBookingRoutingModule,
    SharedModule
  ]
})
export class CompletedBookingModule { }
