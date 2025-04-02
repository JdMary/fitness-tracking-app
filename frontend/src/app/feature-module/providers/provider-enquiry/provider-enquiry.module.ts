import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderEnquiryRoutingModule } from './provider-enquiry-routing.module';
import { ProviderEnquiryComponent } from './provider-enquiry.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderEnquiryComponent
  ],
  imports: [
    CommonModule,
    ProviderEnquiryRoutingModule,
    SharedModule
  ]
})
export class ProviderEnquiryModule { }
