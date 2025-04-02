import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [{ path: '', component: SettingsComponent,
children : [
  {
    path : '',
    redirectTo : 'customer-profile',
    pathMatch : 'full'
  },
  {
    path: 'customer-profile',
    loadChildren: () =>
      import('./customer-profile/customer-profile.module').then(
        (m) => m.CustomerProfileModule
      ),
  },
  {
    path: 'customer-notification',
    loadChildren: () =>
      import('./customer-notification/customer-notification.module').then(
        (m) => m.CustomerNotificationModule
      ),
  },
  {
    path: 'security-settings',
    loadChildren: () =>
      import('./security-settings/security-settings.module').then(
        (m) => m.SecuritySettingsModule
      ),
  },
  {
    path: 'connected-apps',
    loadChildren: () =>
      import('./connected-apps/connected-apps.module').then(
        (m) => m.ConnectedAppsModule
      ),
  },
  { path: 'user-device-management', loadChildren: () => import('./user-device-management/user-device-management.module').then(m => m.UserDeviceManagementModule) },
  { path: 'user-login-activity', loadChildren: () => import('./user-login-activity/user-login-activity.module').then(m => m.UserLoginActivityModule) },


]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
