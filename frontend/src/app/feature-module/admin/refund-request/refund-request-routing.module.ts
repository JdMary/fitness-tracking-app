import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefundRequestComponent } from './refund-request.component';

const routes: Routes = [{ path: '', component: RefundRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundRequestRoutingModule { }
