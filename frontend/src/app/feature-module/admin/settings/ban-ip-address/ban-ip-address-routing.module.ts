import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanIpAddressComponent } from './ban-ip-address.component';

const routes: Routes = [{ path: '', component: BanIpAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanIpAddressRoutingModule { }
