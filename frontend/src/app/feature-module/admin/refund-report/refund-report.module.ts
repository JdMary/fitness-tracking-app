import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundReportRoutingModule } from './refund-report-routing.module';
import { RefundReportComponent } from './refund-report.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RefundReportComponent
  ],
  imports: [
    CommonModule,
    RefundReportRoutingModule,
    SharedModule
  ]
})
export class RefundReportModule { }
