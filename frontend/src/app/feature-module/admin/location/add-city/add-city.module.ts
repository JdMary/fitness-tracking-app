import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCityRoutingModule } from './add-city-routing.module';
import { AddCityComponent } from './add-city.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddCityComponent
  ],
  imports: [
    CommonModule,
    AddCityRoutingModule,
    SharedModule
  ]
})
export class AddCityModule { }
