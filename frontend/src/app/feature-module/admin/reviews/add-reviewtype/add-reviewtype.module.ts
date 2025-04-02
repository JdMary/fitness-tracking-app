import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddReviewtypeRoutingModule } from './add-reviewtype-routing.module';
import { AddReviewtypeComponent } from './add-reviewtype.component';


@NgModule({
  declarations: [
    AddReviewtypeComponent
  ],
  imports: [
    CommonModule,
    AddReviewtypeRoutingModule
  ]
})
export class AddReviewtypeModule { }
