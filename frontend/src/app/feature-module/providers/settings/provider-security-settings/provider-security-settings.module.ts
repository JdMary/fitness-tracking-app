import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderSecuritySettingsRoutingModule } from './provider-security-settings-routing.module';
import { ProviderSecuritySettingsComponent } from './provider-security-settings.component';


@NgModule({
  declarations: [
    ProviderSecuritySettingsComponent
  ],
  imports: [
    CommonModule,
    ProviderSecuritySettingsRoutingModule
  ]
})
export class ProviderSecuritySettingsModule { }
