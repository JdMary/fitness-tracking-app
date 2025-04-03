import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbuseReportsRoutingModule } from './abuse-reports-routing.module';
import { AbuseReportsComponent } from './abuse-reports.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AbuseReportsComponent
  ],
  imports: [
    CommonModule,
    AbuseReportsRoutingModule,
    SharedModule
  ]
})
export class AbuseReportsModule { }
