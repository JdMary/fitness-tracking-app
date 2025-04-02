import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPhone1RoutingModule } from './login-phone1-routing.module';
import { LoginPhone1Component } from './login-phone1.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';

@NgModule({
  declarations: [
    LoginPhone1Component
  ],
  imports: [
    CommonModule,
    LoginPhone1RoutingModule,
    SharedModule,
    NgxMatIntlTelInputComponent
  ]
})
export class LoginPhone1Module { }
