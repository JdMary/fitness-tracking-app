import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingServiceRoutingModule } from './marketing-service-routing.module';
import { MarketingServiceComponent } from './marketing-service.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MarketingServiceComponent
  ],
  imports: [
    CommonModule,
    MarketingServiceRoutingModule,
    SharedModule
  ]
})
export class MarketingServiceModule { }
