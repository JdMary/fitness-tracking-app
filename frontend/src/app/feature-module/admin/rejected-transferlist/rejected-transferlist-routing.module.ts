import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RejectedTransferlistComponent } from './rejected-transferlist.component';

const routes: Routes = [{ path: '', component: RejectedTransferlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RejectedTransferlistRoutingModule { }
