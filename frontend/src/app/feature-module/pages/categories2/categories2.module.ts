import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Categories2RoutingModule } from './categories2-routing.module';
import { Categories2Component } from './categories2.component';


@NgModule({
  declarations: [
    Categories2Component
  ],
  imports: [
    CommonModule,
    Categories2RoutingModule
  ]
})
export class Categories2Module { }
