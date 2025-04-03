import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderDeviceManagememtComponent } from './provider-device-managememt.component';

const routes: Routes = [{ path: '', component: ProviderDeviceManagememtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderDeviceManagememtRoutingModule { }
