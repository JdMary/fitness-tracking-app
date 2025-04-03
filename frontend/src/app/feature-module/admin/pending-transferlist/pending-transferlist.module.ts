import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingTransferlistRoutingModule } from './pending-transferlist-routing.module';
import { PendingTransferlistComponent } from './pending-transferlist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PendingTransferlistComponent
  ],
  imports: [
    CommonModule,
    PendingTransferlistRoutingModule,
    SharedModule
  ]
})
export class PendingTransferlistModule { }
