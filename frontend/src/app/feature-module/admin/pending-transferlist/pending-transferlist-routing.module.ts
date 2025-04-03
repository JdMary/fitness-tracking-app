import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingTransferlistComponent } from './pending-transferlist.component';

const routes: Routes = [{ path: '', component: PendingTransferlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingTransferlistRoutingModule { }
