import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewTypeRoutingModule } from './review-type-routing.module';
import { ReviewTypeComponent } from './review-type.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ReviewTypeComponent
  ],
  imports: [
    CommonModule,
    ReviewTypeRoutingModule,
    SharedModule
  ]
})
export class ReviewTypeModule { }
