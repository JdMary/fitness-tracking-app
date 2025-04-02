import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanktransferlistRoutingModule } from './banktransferlist-routing.module';
import { BanktransferlistComponent } from './banktransferlist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BanktransferlistComponent
  ],
  imports: [
    CommonModule,
    BanktransferlistRoutingModule,
    SharedModule
  ]
})
export class BanktransferlistModule { }
