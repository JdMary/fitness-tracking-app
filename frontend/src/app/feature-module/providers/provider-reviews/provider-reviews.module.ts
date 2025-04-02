import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderReviewsRoutingModule } from './provider-reviews-routing.module';
import { ProviderReviewsComponent } from './provider-reviews.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderReviewsComponent
  ],
  imports: [
    CommonModule,
    ProviderReviewsRoutingModule,
    SharedModule
  ]
})
export class ProviderReviewsModule { }
