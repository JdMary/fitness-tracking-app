import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRequestRoutingModule } from './service-request-routing.module';
import { ServiceRequestComponent } from './service-request.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ServiceRequestComponent
  ],
  imports: [
    CommonModule,
    ServiceRequestRoutingModule,
    SharedModule
  ]
})
export class ServiceRequestModule { }
