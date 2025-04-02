import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderCouponsComponent } from './provider-coupons.component';

const routes: Routes = [{ path: '', component: ProviderCouponsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderCouponsRoutingModule { }
