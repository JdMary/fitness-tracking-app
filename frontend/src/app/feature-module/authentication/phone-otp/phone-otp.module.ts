import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneOtpRoutingModule } from './phone-otp-routing.module';
import { PhoneOtpComponent } from './phone-otp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PhoneOtpComponent
  ],
  imports: [
    CommonModule,
    PhoneOtpRoutingModule,
    FormsModule
  ]
})
export class PhoneOtpModule { }
