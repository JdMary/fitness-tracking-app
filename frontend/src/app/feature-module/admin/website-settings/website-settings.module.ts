import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteSettingsRoutingModule } from './website-settings-routing.module';
import { WebsiteSettingsComponent } from './website-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WebsiteSettingsComponent
  ],
  imports: [
    CommonModule,
    WebsiteSettingsRoutingModule,
    SharedModule
  ]
})
export class WebsiteSettingsModule { }
