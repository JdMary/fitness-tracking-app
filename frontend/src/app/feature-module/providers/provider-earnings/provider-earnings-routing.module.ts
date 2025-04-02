import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderEarningsComponent } from './provider-earnings.component';

const routes: Routes = [{ path: '', component: ProviderEarningsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderEarningsRoutingModule { }
