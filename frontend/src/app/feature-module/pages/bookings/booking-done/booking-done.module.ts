import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingDoneRoutingModule } from './booking-done-routing.module';
import { BookingDoneComponent } from './booking-done.component';


@NgModule({
  declarations: [
    BookingDoneComponent
  ],
  imports: [
    CommonModule,
    BookingDoneRoutingModule
  ]
})
export class BookingDoneModule { }
