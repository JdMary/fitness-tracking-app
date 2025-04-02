import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategoriesRoutingModule } from './sub-categories-routing.module';
import { SubCategoriesComponent } from './sub-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SubCategoriesComponent
  ],
  imports: [
    CommonModule,
    SubCategoriesRoutingModule,
    SharedModule
  ]
})
export class SubCategoriesModule { }
