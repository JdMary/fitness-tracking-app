import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessfulTransferlistRoutingModule } from './successful-transferlist-routing.module';
import { SuccessfulTransferlistComponent } from './successful-transferlist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SuccessfulTransferlistComponent
  ],
  imports: [
    CommonModule,
    SuccessfulTransferlistRoutingModule,
    SharedModule
  ]
})
export class SuccesfulTransferlistModule { }
