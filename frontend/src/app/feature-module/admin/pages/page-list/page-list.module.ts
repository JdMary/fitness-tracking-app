import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageListRoutingModule } from './page-list-routing.module';
import { PageListComponent } from './page-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    PageListRoutingModule,
    SharedModule
  ]
})
export class PageListModule { }
