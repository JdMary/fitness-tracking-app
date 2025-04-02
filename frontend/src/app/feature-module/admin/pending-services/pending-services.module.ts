import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingServicesRoutingModule } from './pending-services-routing.module';
import { PendingServicesComponent } from './pending-services.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PendingServicesComponent
  ],
  imports: [
    CommonModule,
    PendingServicesRoutingModule,
    SharedModule
  ]
})
export class PendingServicesModule { }
