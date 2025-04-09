import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderDashboardComponent } from './provider-dashboard.component';

const routes: Routes = [{ path: '', component: ProviderDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderDashboardRoutingModule { }
