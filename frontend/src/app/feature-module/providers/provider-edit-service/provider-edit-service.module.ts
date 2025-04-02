import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderEditServiceRoutingModule } from './provider-edit-service-routing.module';
import { ProviderEditServiceComponent } from './provider-edit-service.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderEditServiceComponent
  ],
  imports: [
    CommonModule,
    ProviderEditServiceRoutingModule,
    SharedModule
  ]
})
export class ProviderEditServiceModule { }
