import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsCategoriesRoutingModule } from './blogs-categories-routing.module';
import { BlogsCategoriesComponent } from './blogs-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlogsCategoriesComponent
  ],
  imports: [
    CommonModule,
    BlogsCategoriesRoutingModule,
    SharedModule
  ]
})
export class BlogsCategoriesModule { }
