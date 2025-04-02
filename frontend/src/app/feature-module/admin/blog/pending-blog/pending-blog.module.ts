import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingBlogRoutingModule } from './pending-blog-routing.module';
import { PendingBlogComponent } from './pending-blog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PendingBlogComponent
  ],
  imports: [
    CommonModule,
    PendingBlogRoutingModule,
    SharedModule
  ]
})
export class PendingBlogModule { }
