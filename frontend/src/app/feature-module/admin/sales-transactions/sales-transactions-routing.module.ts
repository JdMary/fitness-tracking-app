import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTransactionsComponent } from './sales-transactions.component';

const routes: Routes = [{ path: '', component: SalesTransactionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesTransactionsRoutingModule { }
