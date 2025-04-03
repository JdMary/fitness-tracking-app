import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsCommentsComponent } from './blogs-comments.component';

const routes: Routes = [{ path: '', component: BlogsCommentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsCommentsRoutingModule { }
