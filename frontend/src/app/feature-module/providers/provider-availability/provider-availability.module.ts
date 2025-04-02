import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ProviderAvailabilityRoutingModule } from './provider-availability-routing.module';
import { ProviderAvailabilityComponent } from './provider-availability.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderAvailabilityComponent
  ],
  imports: [
    CommonModule,
    ProviderAvailabilityRoutingModule,
    SharedModule,
  ],
  providers: [
    DatePipe,
  ]
})
export class ProviderAvailabilityModule { }
