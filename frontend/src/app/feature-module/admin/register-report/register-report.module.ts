import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterReportRoutingModule } from './register-report-routing.module';
import { RegisterReportComponent } from './register-report.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RegisterReportComponent
  ],
  imports: [
    CommonModule,
    RegisterReportRoutingModule,
    SharedModule
  ]
})
export class RegisterReportModule { }
