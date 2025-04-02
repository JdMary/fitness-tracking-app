import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizationRoutingModule } from './localization-routing.module';
import { LocalizationComponent } from './localization.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LocalizationComponent
  ],
  imports: [
    CommonModule,
    LocalizationRoutingModule,
    SharedModule
  ]
})
export class LocalizationModule { }
