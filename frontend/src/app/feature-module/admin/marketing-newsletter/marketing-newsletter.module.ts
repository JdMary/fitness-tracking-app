import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingNewsletterRoutingModule } from './marketing-newsletter-routing.module';
import { MarketingNewsletterComponent } from './marketing-newsletter.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MarketingNewsletterComponent
  ],
  imports: [
    CommonModule,
    MarketingNewsletterRoutingModule,
    SharedModule
  ]
})
export class MarketingNewsletterModule { }
