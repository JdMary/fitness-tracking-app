import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBlogCategoriesRoutingModule } from './add-blog-categories-routing.module';
import { AddBlogCategoriesComponent } from './add-blog-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddBlogCategoriesComponent
  ],
  imports: [
    CommonModule,
    AddBlogCategoriesRoutingModule,
    SharedModule
  ]
})
export class AddBlogCategoriesModule { }
