import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Booking2RoutingModule } from './booking2-routing.module';
import { Booking2Component } from './booking2.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { materialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    Booking2Component,
   
  ],
  imports: [
    CommonModule,
    Booking2RoutingModule,
    SharedModule,
    materialModule,
    NgbModalModule 
  ]
})
export class Booking2Module { }
