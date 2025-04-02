import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceListRoutingModule } from './service-list-routing.module';
import { ServiceListComponent } from './service-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    ServiceListComponent
  ],
  imports: [
    CommonModule,
    ServiceListRoutingModule,
    SharedModule,
    MatSliderModule,
  ]
})
export class ServiceListModule { }
