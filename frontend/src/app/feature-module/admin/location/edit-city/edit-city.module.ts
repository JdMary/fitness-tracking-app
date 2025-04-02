import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCityRoutingModule } from './edit-city-routing.module';
import { EditCityComponent } from './edit-city.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditCityComponent
  ],
  imports: [
    CommonModule,
    EditCityRoutingModule,
    SharedModule
  ]
})
export class EditCityModule { }
