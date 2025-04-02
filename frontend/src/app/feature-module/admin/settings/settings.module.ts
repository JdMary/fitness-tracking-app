import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingSidebarComponent } from './common/setting-sidebar/setting-sidebar.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SettingSidebarComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
