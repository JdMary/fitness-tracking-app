import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPhoneRoutingModule } from './login-phone-routing.module';
import { LoginPhoneComponent } from './login-phone.component';


@NgModule({
  declarations: [
    LoginPhoneComponent
  ],
  imports: [
    CommonModule,
    LoginPhoneRoutingModule
  ]
})
export class LoginPhoneModule { }
