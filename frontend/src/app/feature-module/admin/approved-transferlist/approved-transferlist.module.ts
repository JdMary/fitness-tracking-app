import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovedTransferlistRoutingModule } from './approved-transferlist-routing.module';
import { ApprovedTransferlistComponent } from './approved-transferlist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ApprovedTransferlistComponent
  ],
  imports: [
    CommonModule,
    ApprovedTransferlistRoutingModule,
    SharedModule
  ]
})
export class ApprovedTransferlistModule { }
