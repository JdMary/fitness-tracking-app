import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerBookingCalendarComponent } from './customer-booking-calendar.component';

const routes: Routes = [{ path: '', component: CustomerBookingCalendarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerBookingCalendarRoutingModule { }
