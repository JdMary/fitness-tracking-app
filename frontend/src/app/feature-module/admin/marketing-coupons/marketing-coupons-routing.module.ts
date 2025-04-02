import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketingCouponsComponent } from './marketing-coupons.component';

const routes: Routes = [{ path: '', component: MarketingCouponsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingCouponsRoutingModule { }
