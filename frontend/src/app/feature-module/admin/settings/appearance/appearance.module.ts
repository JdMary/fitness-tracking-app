import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppearanceRoutingModule } from './appearance-routing.module';
import { AppearanceComponent } from './appearance.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AppearanceComponent
  ],
  imports: [
    CommonModule,
    AppearanceRoutingModule,
    SharedModule
  ]
})
export class AppearanceModule { }
