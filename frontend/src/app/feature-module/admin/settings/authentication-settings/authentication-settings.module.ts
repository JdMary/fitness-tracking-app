import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationSettingsRoutingModule } from './authentication-settings-routing.module';
import { AuthenticationSettingsComponent } from './authentication-settings.component';


@NgModule({
  declarations: [
    AuthenticationSettingsComponent
  ],
  imports: [
    CommonModule,
    AuthenticationSettingsRoutingModule
  ]
})
export class AuthenticationSettingsModule { }
