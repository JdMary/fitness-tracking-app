import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookApiRoutingModule } from './facebook-api-routing.module';
import { FacebookApiComponent } from './facebook-api.component';


@NgModule({
  declarations: [
    FacebookApiComponent
  ],
  imports: [
    CommonModule,
    FacebookApiRoutingModule
  ]
})
export class FacebookApiModule { }
