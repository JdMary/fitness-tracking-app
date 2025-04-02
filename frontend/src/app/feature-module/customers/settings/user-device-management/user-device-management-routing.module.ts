import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDeviceManagementComponent } from './user-device-management.component';

const routes: Routes = [{ path: '', component: UserDeviceManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDeviceManagementRoutingModule { }
