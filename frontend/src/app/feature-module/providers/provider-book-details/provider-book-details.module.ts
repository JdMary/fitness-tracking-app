import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderBookDetailsRoutingModule } from './provider-book-details-routing.module';
import { ProviderBookDetailsComponent } from './provider-book-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderBookDetailsComponent
  ],
  imports: [
    CommonModule,
    ProviderBookDetailsRoutingModule,
    SharedModule
  ]
})
export class ProviderBookDetailsModule { }
