import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InactiveServicesRoutingModule } from './inactive-services-routing.module';
import { InactiveServicesComponent } from './inactive-services.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InactiveServicesComponent
  ],
  imports: [
    CommonModule,
    InactiveServicesRoutingModule,
    SharedModule
  ]
})
export class InactiveServicesModule { }
