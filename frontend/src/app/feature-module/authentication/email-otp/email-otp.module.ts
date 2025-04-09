import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailOtpRoutingModule } from './email-otp-routing.module';
import { EmailOtpComponent } from './email-otp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmailOtpComponent
  ],
  imports: [
    CommonModule,
    EmailOtpRoutingModule,
    FormsModule
  ]
})
export class EmailOtpModule { }
