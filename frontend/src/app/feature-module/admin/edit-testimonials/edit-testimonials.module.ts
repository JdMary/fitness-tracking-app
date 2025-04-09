import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTestimonialsRoutingModule } from './edit-testimonials-routing.module';
import { EditTestimonialsComponent } from './edit-testimonials.component';


@NgModule({
  declarations: [
    EditTestimonialsComponent
  ],
  imports: [
    CommonModule,
    EditTestimonialsRoutingModule
  ]
})
export class EditTestimonialsModule { }
