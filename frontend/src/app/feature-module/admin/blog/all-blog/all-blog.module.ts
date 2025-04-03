import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBlogRoutingModule } from './all-blog-routing.module';
import { AllBlogComponent } from './all-blog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AllBlogComponent
  ],
  imports: [
    CommonModule,
    AllBlogRoutingModule,
    SharedModule
  ]
})
export class AllBlogModule { }
