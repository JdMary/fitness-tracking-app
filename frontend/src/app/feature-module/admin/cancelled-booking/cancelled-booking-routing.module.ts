import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelledBookingComponent } from './cancelled-booking.component';

const routes: Routes = [{ path: '', component: CancelledBookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelledBookingRoutingModule { }
