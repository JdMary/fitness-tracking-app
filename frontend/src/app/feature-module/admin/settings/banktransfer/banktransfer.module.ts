import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanktransferRoutingModule } from './banktransfer-routing.module';
import { BanktransferComponent } from './banktransfer.component';


@NgModule({
  declarations: [
    BanktransferComponent
  ],
  imports: [
    CommonModule,
    BanktransferRoutingModule
  ]
})
export class BanktransferModule { }
