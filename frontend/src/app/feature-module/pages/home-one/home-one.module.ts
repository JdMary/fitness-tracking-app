import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeOneRoutingModule } from './home-one-routing.module';
import { HomeOneComponent } from './home-one.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    HomeOneComponent,
    
  ],
  imports: [
    CommonModule,
    HomeOneRoutingModule,
    SharedModule,
  ]
})
export class HomeOneModule { }
