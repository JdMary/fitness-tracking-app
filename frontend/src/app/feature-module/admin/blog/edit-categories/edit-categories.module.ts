import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCategoriesRoutingModule } from './edit-categories-routing.module';
import { EditCategoriesComponent } from './edit-categories.component';


@NgModule({
  declarations: [
    EditCategoriesComponent
  ],
  imports: [
    CommonModule,
    EditCategoriesRoutingModule
  ]
})
export class EditCategoriesModule { }
