import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleApiRoutingModule } from './google-api-routing.module';
import { GoogleApiComponent } from './google-api.component';


@NgModule({
  declarations: [
    GoogleApiComponent
  ],
  imports: [
    CommonModule,
    GoogleApiRoutingModule
  ]
})
export class GoogleApiModule { }
