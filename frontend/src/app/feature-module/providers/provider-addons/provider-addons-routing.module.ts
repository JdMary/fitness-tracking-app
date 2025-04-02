import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderAddonsComponent } from './provider-addons.component';

const routes: Routes = [{ path: '', component: ProviderAddonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderAddonsRoutingModule { }
