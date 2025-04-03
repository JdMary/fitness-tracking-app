import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerReviewsRoutingModule } from './customer-reviews-routing.module';
import { CustomerReviewsComponent } from './customer-reviews.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerReviewsComponent
  ],
  imports: [
    CommonModule,
    CustomerReviewsRoutingModule,
    SharedModule
  ]
})
export class CustomerReviewsModule { }
