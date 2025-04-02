import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialAuthenticationRoutingModule } from './social-authentication-routing.module';
import { SocialAuthenticationComponent } from './social-authentication.component';


@NgModule({
  declarations: [
    SocialAuthenticationComponent
  ],
  imports: [
    CommonModule,
    SocialAuthenticationRoutingModule
  ]
})
export class SocialAuthenticationModule { }
