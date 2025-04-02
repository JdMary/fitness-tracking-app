import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteInformationRoutingModule } from './site-information-routing.module';
import { SiteInformationComponent } from './site-information.component';


@NgModule({
  declarations: [
    SiteInformationComponent
  ],
  imports: [
    CommonModule,
    SiteInformationRoutingModule
  ]
})
export class SiteInformationModule { }
