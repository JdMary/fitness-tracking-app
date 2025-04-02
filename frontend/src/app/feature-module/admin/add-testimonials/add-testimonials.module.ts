import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTestimonialsRoutingModule } from './add-testimonials-routing.module';
import { AddTestimonialsComponent } from './add-testimonials.component';


@NgModule({
  declarations: [
    AddTestimonialsComponent
  ],
  imports: [
    CommonModule,
    AddTestimonialsRoutingModule
  ]
})
export class AddTestimonialsModule { }
