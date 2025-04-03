import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerBookingRoutingModule } from './customer-booking-routing.module';
import { CustomerBookingComponent } from './customer-booking.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerBookingComponent
  ],
  imports: [
    CommonModule,
    CustomerBookingRoutingModule,
    SharedModule
  ]
})
export class CustomerBookingModule { }
