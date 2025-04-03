import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewServicesRoutingModule } from './view-services-routing.module';
import { ViewServicesComponent } from './view-services.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewServicesComponent
  ],
  imports: [
    CommonModule,
    ViewServicesRoutingModule,
    SharedModule
  ]
})
export class ViewServicesModule { }
