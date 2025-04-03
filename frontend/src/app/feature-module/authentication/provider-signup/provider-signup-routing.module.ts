import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderSignupComponent } from './provider-signup.component';

const routes: Routes = [{ path: '', component: ProviderSignupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderSignupRoutingModule { }
