import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerFavouriteRoutingModule } from './customer-favourite-routing.module';
import { CustomerFavouriteComponent } from './customer-favourite.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerFavouriteComponent
  ],
  imports: [
    CommonModule,
    CustomerFavouriteRoutingModule,
    SharedModule
  ]
})
export class CustomerFavouriteModule { }
