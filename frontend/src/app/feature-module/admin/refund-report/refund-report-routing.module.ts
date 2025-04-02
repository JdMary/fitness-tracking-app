import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefundReportComponent } from './refund-report.component';

const routes: Routes = [{ path: '', component: RefundReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundReportRoutingModule { }
