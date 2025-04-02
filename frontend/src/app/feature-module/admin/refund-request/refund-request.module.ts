import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundRequestRoutingModule } from './refund-request-routing.module';
import { RefundRequestComponent } from './refund-request.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RefundRequestComponent
  ],
  imports: [
    CommonModule,
    RefundRequestRoutingModule,
    SharedModule
  ]
})
export class RefundRequestModule { }
