import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSubcategoriesRoutingModule } from './edit-subcategories-routing.module';
import { EditSubcategoriesComponent } from './edit-subcategories.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditSubcategoriesComponent
  ],
  imports: [
    CommonModule,
    EditSubcategoriesRoutingModule,
    SharedModule
  ]
})
export class EditSubcategoriesModule { }
