import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanIpAddressRoutingModule } from './ban-ip-address-routing.module';
import { BanIpAddressComponent } from './ban-ip-address.component';


@NgModule({
  declarations: [
    BanIpAddressComponent
  ],
  imports: [
    CommonModule,
    BanIpAddressRoutingModule
  ]
})
export class BanIpAddressModule { }
