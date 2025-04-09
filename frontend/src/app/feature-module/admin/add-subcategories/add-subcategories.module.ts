import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSubcategoriesRoutingModule } from './add-subcategories-routing.module';
import { AddSubcategoriesComponent } from './add-subcategories.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddSubcategoriesComponent
  ],
  imports: [
    CommonModule,
    AddSubcategoriesRoutingModule,
    SharedModule
  ]
})
export class AddSubcategoriesModule { }
