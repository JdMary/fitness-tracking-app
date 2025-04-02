import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceSettingsRoutingModule } from './service-settings-routing.module';
import { ServiceSettingsComponent } from './service-settings.component';


@NgModule({
  declarations: [
    ServiceSettingsComponent
  ],
  imports: [
    CommonModule,
    ServiceSettingsRoutingModule
  ]
})
export class ServiceSettingsModule { }
