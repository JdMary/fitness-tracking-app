import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerBookingCalendarRoutingModule } from './customer-booking-calendar-routing.module';
import { CustomerBookingCalendarComponent } from './customer-booking-calendar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerBookingCalendarComponent
  ],
  imports: [
    CommonModule,
    CustomerBookingCalendarRoutingModule,
    SharedModule
  ]
})
export class CustomerBookingCalendarModule { }
