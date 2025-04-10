import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPromotionComponent } from './list-promotion/list-promotion.component';

const routes: Routes = [
  { path: '', component: ListPromotionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
