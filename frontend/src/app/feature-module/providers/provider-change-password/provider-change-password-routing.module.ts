import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderChangePasswordComponent } from './provider-change-password.component';

const routes: Routes = [{ path: '', component: ProviderChangePasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderChangePasswordRoutingModule { }
