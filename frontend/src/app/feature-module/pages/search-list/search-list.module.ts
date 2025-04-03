import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchListRoutingModule } from './search-list-routing.module';
import { SearchListComponent } from './search-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SearchListComponent
  ],
  imports: [
    CommonModule,
    SearchListRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class SearchListModule { }
