import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderLoginActivityComponent } from './provider-login-activity.component';

const routes: Routes = [{ path: '', component: ProviderLoginActivityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderLoginActivityRoutingModule { }
