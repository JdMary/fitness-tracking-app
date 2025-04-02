import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ServiceInformationRoutingModule } from './service-information-routing.module';
import { ServiceInformationComponent } from './service-information.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ServiceInformationComponent
  ],
  imports: [
    CommonModule,
    ServiceInformationRoutingModule,
    SharedModule,
    
  ],
  providers: [
    DatePipe,
  ]
})
export class ServiceInformationModule { }
