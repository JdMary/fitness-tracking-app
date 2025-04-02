import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderPlanComponent } from './provider-plan.component';

const routes: Routes = [{ path: '', component: ProviderPlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderPlanRoutingModule { }
