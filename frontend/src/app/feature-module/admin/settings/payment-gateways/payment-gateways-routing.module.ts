import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentGatewaysComponent } from './payment-gateways.component';

const routes: Routes = [{ path: '', component: PaymentGatewaysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentGatewaysRoutingModule { }
