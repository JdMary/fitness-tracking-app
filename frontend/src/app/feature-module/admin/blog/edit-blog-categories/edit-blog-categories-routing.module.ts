import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBlogCategoriesComponent } from './edit-blog-categories.component';

const routes: Routes = [{ path: '', component: EditBlogCategoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditBlogCategoriesRoutingModule { }
