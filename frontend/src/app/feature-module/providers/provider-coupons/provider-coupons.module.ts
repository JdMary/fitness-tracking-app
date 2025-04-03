import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderCouponsRoutingModule } from './provider-coupons-routing.module';
import { ProviderCouponsComponent } from './provider-coupons.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderCouponsComponent
  ],
  imports: [
    CommonModule,
    ProviderCouponsRoutingModule,
    SharedModule
  ]
})
export class ProviderCouponsModule { }
