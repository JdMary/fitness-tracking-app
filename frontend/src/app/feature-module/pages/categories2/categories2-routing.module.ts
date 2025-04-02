import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Categories2Component } from './categories2.component';

const routes: Routes = [{ path: '', component: Categories2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Categories2RoutingModule { }
