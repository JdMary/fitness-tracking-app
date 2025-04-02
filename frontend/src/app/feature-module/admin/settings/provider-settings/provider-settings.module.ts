import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderSettingsRoutingModule } from './provider-settings-routing.module';
import { ProviderSettingsComponent } from './provider-settings.component';


@NgModule({
  declarations: [
    ProviderSettingsComponent
  ],
  imports: [
    CommonModule,
    ProviderSettingsRoutingModule
  ]
})
export class ProviderSettingsModule { }
