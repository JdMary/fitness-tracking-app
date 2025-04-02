import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedBookingComponent } from './completed-booking.component';

const routes: Routes = [{ path: '', component: CompletedBookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedBookingRoutingModule { }
