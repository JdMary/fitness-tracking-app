import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderBookingComponent } from './provider-booking.component';

const routes: Routes = [{ path: '', component: ProviderBookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderBookingRoutingModule { }
