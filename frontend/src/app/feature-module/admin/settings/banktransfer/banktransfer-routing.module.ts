import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanktransferComponent } from './banktransfer.component';

const routes: Routes = [{ path: '', component: BanktransferComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanktransferRoutingModule { }
