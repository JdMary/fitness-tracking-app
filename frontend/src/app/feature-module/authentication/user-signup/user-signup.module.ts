import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserSignupRoutingModule } from './user-signup-routing.module';
import { UserSignupComponent } from './user-signup.component';


@NgModule({
  declarations: [
    UserSignupComponent
  ],
  imports: [
    CommonModule,
    UserSignupRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserSignupModule { }
