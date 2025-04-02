import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterSettingsRoutingModule } from './footer-settings-routing.module';
import { FooterSettingsComponent } from './footer-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FooterSettingsComponent
  ],
  imports: [
    CommonModule,
    FooterSettingsRoutingModule,
    SharedModule
  ]
})
export class FooterSettingsModule { }
