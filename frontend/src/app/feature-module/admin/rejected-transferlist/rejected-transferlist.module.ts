import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RejectedTransferlistRoutingModule } from './rejected-transferlist-routing.module';
import { RejectedTransferlistComponent } from './rejected-transferlist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RejectedTransferlistComponent
  ],
  imports: [
    CommonModule,
    RejectedTransferlistRoutingModule,
    SharedModule
  ]
})
export class RejectedTransferlistModule { }
