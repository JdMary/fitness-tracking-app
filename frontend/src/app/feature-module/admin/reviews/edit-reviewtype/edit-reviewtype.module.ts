import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditReviewtypeRoutingModule } from './edit-reviewtype-routing.module';
import { EditReviewtypeComponent } from './edit-reviewtype.component';


@NgModule({
  declarations: [
    EditReviewtypeComponent
  ],
  imports: [
    CommonModule,
    EditReviewtypeRoutingModule
  ]
})
export class EditReviewtypeModule { }
