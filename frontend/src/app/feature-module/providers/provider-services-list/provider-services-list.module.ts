import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderServicesListRoutingModule } from './provider-services-list-routing.module';
import { ProviderServicesListComponent } from './provider-services-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderServicesListComponent
  ],
  imports: [
    CommonModule,
    ProviderServicesListRoutingModule,
    SharedModule
  ]
})
export class ProviderServicesListModule { }
