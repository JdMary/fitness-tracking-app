import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderSignupSubscriptionComponent } from './provider-signup-subscription.component';

const routes: Routes = [{ path: '', component: ProviderSignupSubscriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderSignupSubscriptionRoutingModule { }
