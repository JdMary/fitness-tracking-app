import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GdprSettingsRoutingModule } from './gdpr-settings-routing.module';
import { GdprSettingsComponent } from './gdpr-settings.component';


@NgModule({
  declarations: [
    GdprSettingsComponent
  ],
  imports: [
    CommonModule,
    GdprSettingsRoutingModule
  ]
})
export class GdprSettingsModule { }
