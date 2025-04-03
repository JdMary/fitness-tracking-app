import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderSocialProfileComponent } from './provider-social-profile.component';

const routes: Routes = [{ path: '', component: ProviderSocialProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderSocialProfileRoutingModule { }
