import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderProfileSettingsRoutingModule } from './provider-profile-settings-routing.module';
import { ProviderProfileSettingsComponent } from './provider-profile-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    ProviderProfileSettingsRoutingModule,
    SharedModule
  ]
})
export class ProviderProfileSettingsModule { }
