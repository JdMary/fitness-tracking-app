import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashOnDeliveryComponent } from './cash-on-delivery.component';

const routes: Routes = [{ path: '', component: CashOnDeliveryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashOnDeliveryRoutingModule { }
