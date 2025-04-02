import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderAppointmentSettingsRoutingModule } from './provider-appointment-settings-routing.module';
import { ProviderAppointmentSettingsComponent } from './provider-appointment-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderAppointmentSettingsComponent
  ],
  imports: [
    CommonModule,
    ProviderAppointmentSettingsRoutingModule,
    SharedModule
  ]
})
export class ProviderAppointmentSettingsModule { }
