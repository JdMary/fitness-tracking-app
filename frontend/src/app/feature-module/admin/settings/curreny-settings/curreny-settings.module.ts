import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrenySettingsRoutingModule } from './curreny-settings-routing.module';
import { CurrenySettingsComponent } from './curreny-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CurrenySettingsComponent
  ],
  imports: [
    CommonModule,
    CurrenySettingsRoutingModule,
    SharedModule
  ]
})
export class CurrenySettingsModule { }
