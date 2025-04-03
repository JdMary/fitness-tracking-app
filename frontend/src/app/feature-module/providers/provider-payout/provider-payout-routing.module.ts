import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderPayoutComponent } from './provider-payout.component';

const routes: Routes = [{ path: '', component: ProviderPayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderPayoutRoutingModule { }
