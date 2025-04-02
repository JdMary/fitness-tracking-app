import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseSignupRoutingModule } from './choose-signup-routing.module';
import { ChooseSignupComponent } from './choose-signup.component';


@NgModule({
  declarations: [
    ChooseSignupComponent
  ],
  imports: [
    CommonModule,
    ChooseSignupRoutingModule
  ]
})
export class ChooseSignupModule { }
