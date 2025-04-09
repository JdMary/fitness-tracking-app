import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCouponRoutingModule } from './add-coupon-routing.module';
import { AddCouponComponent } from './add-coupon.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddCouponComponent
  ],
  imports: [
    CommonModule,
    AddCouponRoutingModule,
    SharedModule
  ]
})
export class AddCouponModule { }
