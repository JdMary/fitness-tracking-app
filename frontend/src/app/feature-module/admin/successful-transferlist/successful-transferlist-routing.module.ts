import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessfulTransferlistComponent } from './successful-transferlist.component';

const routes: Routes = [{ path: '', component: SuccessfulTransferlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessfulTransferlistRoutingModule { }
