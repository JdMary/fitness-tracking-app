import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingCouponsRoutingModule } from './marketing-coupons-routing.module';
import { MarketingCouponsComponent } from './marketing-coupons.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MarketingCouponsComponent
  ],
  imports: [
    CommonModule,
    MarketingCouponsRoutingModule,
    SharedModule
  ]
})
export class MarketingCouponsModule { }
