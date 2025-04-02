import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerBookingComponent } from './customer-booking.component';

const routes: Routes = [{ path: '', component: CustomerBookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerBookingRoutingModule { }
