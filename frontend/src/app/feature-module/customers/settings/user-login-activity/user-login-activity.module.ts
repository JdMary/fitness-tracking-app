import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginActivityRoutingModule } from './user-login-activity-routing.module';
import { UserLoginActivityComponent } from './user-login-activity.component';


@NgModule({
  declarations: [
    UserLoginActivityComponent
  ],
  imports: [
    CommonModule,
    UserLoginActivityRoutingModule
  ]
})
export class UserLoginActivityModule { }
