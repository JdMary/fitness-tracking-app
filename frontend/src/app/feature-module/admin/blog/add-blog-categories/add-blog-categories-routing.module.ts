import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogCategoriesComponent } from './add-blog-categories.component';

const routes: Routes = [{ path: '', component: AddBlogCategoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBlogCategoriesRoutingModule { }
