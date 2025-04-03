import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderSignupPaymentComponent } from './provider-signup-payment.component';

const routes: Routes = [{ path: '', component: ProviderSignupPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderSignupPaymentRoutingModule { }
