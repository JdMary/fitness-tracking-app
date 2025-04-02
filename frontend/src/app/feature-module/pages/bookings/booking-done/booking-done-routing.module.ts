import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDoneComponent } from './booking-done.component';

const routes: Routes = [{ path: '', component: BookingDoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingDoneRoutingModule { }
