import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsCommentsRoutingModule } from './blogs-comments-routing.module';
import { BlogsCommentsComponent } from './blogs-comments.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlogsCommentsComponent
  ],
  imports: [
    CommonModule,
    BlogsCommentsRoutingModule,
    SharedModule
  ]
})
export class BlogsCommentsModule { }
