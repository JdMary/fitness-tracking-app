import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderAccountsSettingsRoutingModule } from './provider-accounts-settings-routing.module';
import { ProviderAccountsSettingsComponent } from './provider-accounts-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderAccountsSettingsComponent
  ],
  imports: [
    CommonModule,
    ProviderAccountsSettingsRoutingModule,
    SharedModule
  ]
})
export class ProviderAccountsSettingsModule { }
