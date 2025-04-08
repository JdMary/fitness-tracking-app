import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { ListPromotionComponent } from './list-promotion/list-promotion.component';
import { EditPromotionComponent } from './edit-promotion/edit-promotion.component';

const routes: Routes = [
  { path: 'add', component: AddPromotionComponent },
  { path: 'list', component: ListPromotionComponent },
  { path: 'edit/:id', component: EditPromotionComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' } // ✅ très bon pour éviter d’avoir un path vide
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
