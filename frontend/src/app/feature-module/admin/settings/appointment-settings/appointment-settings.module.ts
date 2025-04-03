import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentSettingsRoutingModule } from './appointment-settings-routing.module';
import { AppointmentSettingsComponent } from './appointment-settings.component';


@NgModule({
  declarations: [
    AppointmentSettingsComponent
  ],
  imports: [
    CommonModule,
    AppointmentSettingsRoutingModule
  ]
})
export class AppointmentSettingsModule { }
