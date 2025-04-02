import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSubcategoriesComponent } from './edit-subcategories.component';

const routes: Routes = [{ path: '', component: EditSubcategoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSubcategoriesRoutingModule { }
