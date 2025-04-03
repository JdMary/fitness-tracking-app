import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsCategoriesComponent } from './blogs-categories.component';

const routes: Routes = [{ path: '', component: BlogsCategoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsCategoriesRoutingModule { }
