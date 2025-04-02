import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsSettingsRoutingModule } from './sms-settings-routing.module';
import { SmsSettingsComponent } from './sms-settings.component';


@NgModule({
  declarations: [
    SmsSettingsComponent
  ],
  imports: [
    CommonModule,
    SmsSettingsRoutingModule
  ]
})
export class SmsSettingsModule { }
