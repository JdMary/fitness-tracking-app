import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditOfferRoutingModule } from './edit-offer-routing.module';
import { EditOfferComponent } from './edit-offer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditOfferComponent
  ],
  imports: [
    CommonModule,
    EditOfferRoutingModule,
    SharedModule
  ]
})
export class EditOfferModule { }
