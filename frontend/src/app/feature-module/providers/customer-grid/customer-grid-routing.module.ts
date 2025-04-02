import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGridComponent } from './customer-grid.component';

const routes: Routes = [{ path: '', component: CustomerGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerGridRoutingModule { }
