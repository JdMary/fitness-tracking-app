import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDetailsTwoRoutingModule } from './service-details-two-routing.module';
import { ServiceDetailsTwoComponent } from './service-details-two.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ServiceDetailsTwoComponent
  ],
  imports: [
    CommonModule,
    ServiceDetailsTwoRoutingModule,
    SharedModule
  ]
})
export class ServiceDetailsTwoModule { }
