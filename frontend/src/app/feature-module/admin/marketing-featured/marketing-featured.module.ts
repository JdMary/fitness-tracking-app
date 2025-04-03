import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingFeaturedRoutingModule } from './marketing-featured-routing.module';
import { MarketingFeaturedComponent } from './marketing-featured.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MarketingFeaturedComponent
  ],
  imports: [
    CommonModule,
    MarketingFeaturedRoutingModule,
    SharedModule
  ]
})
export class MarketingFeaturedModule { }
