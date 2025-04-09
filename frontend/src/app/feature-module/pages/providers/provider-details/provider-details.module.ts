import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderDetailsRoutingModule } from './provider-details-routing.module';
import { ProviderDetailsComponent } from './provider-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderDetailsComponent
  ],
  imports: [
    CommonModule,
    ProviderDetailsRoutingModule,
    SharedModule
  ]
})
export class ProviderDetailsModule { }
