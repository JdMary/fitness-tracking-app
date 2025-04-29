import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealDetailsComponent } from './meal-details.component';

const routes: Routes = [
  { path: '', component: MealDetailsComponent },
  //{ path: 'meal-details/:id', component: MealDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealRoutingModule { }
