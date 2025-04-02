import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginActivityRoutingModule } from './login-activity-routing.module';
import { LoginActivityComponent } from './login-activity.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginActivityComponent
  ],
  imports: [
    CommonModule,
    LoginActivityRoutingModule,
    SharedModule
  ]
})
export class LoginActivityModule { }
