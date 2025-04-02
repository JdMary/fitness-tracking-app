import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPayoutComponent } from './add-payout.component';

const routes: Routes = [{ path: '', component: AddPayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPayoutRoutingModule { }
