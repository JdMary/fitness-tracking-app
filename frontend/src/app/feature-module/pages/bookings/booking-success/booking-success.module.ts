import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingSuccessRoutingModule } from './booking-success-routing.module';
import { BookingSuccessComponent } from './booking-success.component';


@NgModule({
  declarations: [
    BookingSuccessComponent
  ],
  imports: [
    CommonModule,
    BookingSuccessRoutingModule
  ]
})
export class BookingSuccessModule { }
