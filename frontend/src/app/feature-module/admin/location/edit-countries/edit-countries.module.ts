import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCountriesRoutingModule } from './edit-countries-routing.module';
import { EditCountriesComponent } from './edit-countries.component';


@NgModule({
  declarations: [
    EditCountriesComponent
  ],
  imports: [
    CommonModule,
    EditCountriesRoutingModule
  ]
})
export class EditCountriesModule { }
