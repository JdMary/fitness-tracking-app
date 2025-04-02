import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceGridRoutingModule } from './service-grid-routing.module';
import { ServiceGridComponent } from './service-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [
    ServiceGridComponent
  ],
  imports: [
    CommonModule,
    ServiceGridRoutingModule,
    SharedModule,
    MatSliderModule,
  ]
})
export class ServiceGridModule { }
