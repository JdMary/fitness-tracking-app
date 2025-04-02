import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesListRoutingModule } from './pages-list-routing.module';
import { PagesListComponent } from './pages-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PagesListComponent
  ],
  imports: [
    CommonModule,
    PagesListRoutingModule,
    SharedModule
  ]
})
export class PagesListModule { }
