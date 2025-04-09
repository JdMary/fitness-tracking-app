import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarSettingsRoutingModule } from './calendar-settings-routing.module';
import { CalendarSettingsComponent } from './calendar-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CalendarSettingsComponent
  ],
  imports: [
    CommonModule,
    CalendarSettingsRoutingModule,
    SharedModule
  ]
})
export class CalendarSettingsModule { }
