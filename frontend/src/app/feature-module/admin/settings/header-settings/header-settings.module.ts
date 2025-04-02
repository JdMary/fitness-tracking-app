import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderSettingsRoutingModule } from './header-settings-routing.module';
import { HeaderSettingsComponent } from './header-settings.component';


@NgModule({
  declarations: [
    HeaderSettingsComponent
  ],
  imports: [
    CommonModule,
    HeaderSettingsRoutingModule
  ]
})
export class HeaderSettingsModule { }
