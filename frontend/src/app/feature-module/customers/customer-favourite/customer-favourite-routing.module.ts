import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFavouriteComponent } from './customer-favourite.component';

const routes: Routes = [{ path: '', component: CustomerFavouriteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerFavouriteRoutingModule { }
