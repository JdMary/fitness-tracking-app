import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderSalesComponent } from './provider-sales.component';

const routes: Routes = [{ path: '', component: ProviderSalesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderSalesRoutingModule { }
