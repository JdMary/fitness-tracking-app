import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedTransferlistComponent } from './approved-transferlist.component';

const routes: Routes = [{ path: '', component: ApprovedTransferlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovedTransferlistRoutingModule { }
