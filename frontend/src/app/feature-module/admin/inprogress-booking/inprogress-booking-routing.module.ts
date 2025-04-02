import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InprogressBookingComponent } from './inprogress-booking.component';

const routes: Routes = [{ path: '', component: InprogressBookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InprogressBookingRoutingModule { }
