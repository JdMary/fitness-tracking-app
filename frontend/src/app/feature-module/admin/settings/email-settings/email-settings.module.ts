import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailSettingsRoutingModule } from './email-settings-routing.module';
import { EmailSettingsComponent } from './email-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmailSettingsComponent
  ],
  imports: [
    CommonModule,
    EmailSettingsRoutingModule,
    SharedModule
  ]
})
export class EmailSettingsModule { }
