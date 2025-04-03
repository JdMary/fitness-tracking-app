import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderServicesRoutingModule } from './provider-services-routing.module';
import { ProviderServicesComponent } from './provider-services.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderServicesComponent
  ],
  imports: [
    CommonModule,
    ProviderServicesRoutingModule,
    SharedModule
  ]
})
export class ProviderServicesModule { }
