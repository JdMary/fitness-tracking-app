import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanktransferlistComponent } from './banktransferlist.component';

const routes: Routes = [
  { path: '', component: BanktransferlistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanktransferlistRoutingModule {}
