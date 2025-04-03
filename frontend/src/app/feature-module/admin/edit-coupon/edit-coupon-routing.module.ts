import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCouponComponent } from './edit-coupon.component';

const routes: Routes = [{ path: '', component: EditCouponComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCouponRoutingModule { }
