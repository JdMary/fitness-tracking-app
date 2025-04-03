import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBlogCategoriesRoutingModule } from './edit-blog-categories-routing.module';
import { EditBlogCategoriesComponent } from './edit-blog-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditBlogCategoriesComponent
  ],
  imports: [
    CommonModule,
    EditBlogCategoriesRoutingModule,
    SharedModule
  ]
})
export class EditBlogCategoriesModule { }
