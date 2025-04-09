import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayoutRequestComponent } from './payout-request.component';

const routes: Routes = [{ path: '', component: PayoutRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayoutRequestRoutingModule { }
