import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferenceSettingsRoutingModule } from './preference-settings-routing.module';
import { PreferenceSettingsComponent } from './preference-settings.component';


@NgModule({
  declarations: [
    PreferenceSettingsComponent
  ],
  imports: [
    CommonModule,
    PreferenceSettingsRoutingModule
  ]
})
export class PreferenceSettingsModule { }
