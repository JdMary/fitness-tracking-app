import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCountriesRoutingModule } from './add-countries-routing.module';
import { AddCountriesComponent } from './add-countries.component';


@NgModule({
  declarations: [
    AddCountriesComponent
  ],
  imports: [
    CommonModule,
    AddCountriesRoutingModule
  ]
})
export class AddCountriesModule { }
