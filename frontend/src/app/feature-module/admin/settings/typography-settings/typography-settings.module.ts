import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographySettingsRoutingModule } from './typography-settings-routing.module';
import { TypographySettingsComponent } from './typography-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TypographySettingsComponent
  ],
  imports: [
    CommonModule,
    TypographySettingsRoutingModule,
    SharedModule
  ]
})
export class TypographySettingsModule { }
