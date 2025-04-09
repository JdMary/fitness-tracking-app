import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSevenRoutingModule } from './home-seven-routing.module';
import { HomeSevenComponent } from './home-seven.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeSevenHeaderComponent } from './common/home-seven-header/home-seven-header.component';
import { HomeSevenFooterComponent } from './common/home-seven-footer/home-seven-footer.component';


@NgModule({
  declarations: [
    HomeSevenComponent,
    HomeSevenHeaderComponent,
    HomeSevenFooterComponent
   
  ],
  imports: [
    CommonModule,
    HomeSevenRoutingModule,
    SharedModule
  ]
})
export class HomeSevenModule { }
