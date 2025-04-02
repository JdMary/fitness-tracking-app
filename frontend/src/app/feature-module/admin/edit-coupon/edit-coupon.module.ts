import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCouponRoutingModule } from './edit-coupon-routing.module';
import { EditCouponComponent } from './edit-coupon.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditCouponComponent
  ],
  imports: [
    CommonModule,
    EditCouponRoutingModule,
    SharedModule
  ]
})
export class EditCouponModule { }
