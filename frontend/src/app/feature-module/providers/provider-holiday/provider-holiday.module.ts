import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderHolidayRoutingModule } from './provider-holiday-routing.module';
import { ProviderHolidayComponent } from './provider-holiday.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderHolidayComponent
  ],
  imports: [
    CommonModule,
    ProviderHolidayRoutingModule,
    SharedModule
  ]
})
export class ProviderHolidayModule { }
