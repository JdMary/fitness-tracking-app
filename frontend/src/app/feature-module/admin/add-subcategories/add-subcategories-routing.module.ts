import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubcategoriesComponent } from './add-subcategories.component';

const routes: Routes = [{ path: '', component: AddSubcategoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSubcategoriesRoutingModule { }
