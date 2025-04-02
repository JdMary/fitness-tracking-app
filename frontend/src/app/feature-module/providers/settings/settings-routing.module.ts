import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'provider-appointment-settings',
        loadChildren: () =>
          import(
            './provider-appointment-settings/provider-appointment-settings.module'
          ).then((m) => m.ProviderAppointmentSettingsModule),
      },
      {
        path: 'provider-profile-settings',
        loadChildren: () =>
          import(
            './provider-profile-settings/provider-profile-settings.module'
          ).then((m) => m.ProviderProfileSettingsModule),
      },
      {
        path: 'provider-social-profile',
        loadChildren: () =>
          import(
            './provider-social-profile/provider-social-profile.module'
          ).then((m) => m.ProviderSocialProfileModule),
      },
      {
        path: 'provider-security-settings',
        loadChildren: () =>
          import(
            './provider-security-settings/provider-security-settings.module'
          ).then((m) => m.ProviderSecuritySettingsModule),
      },
      {
        path: 'provider-plan',
        loadChildren: () =>
          import('./provider-plan/provider-plan.module').then(
            (m) => m.ProviderPlanModule
          ),
      },
      {
        path: 'payment-settings',
        loadChildren: () =>
          import('./payment-settings/payment-settings.module').then(
            (m) => m.PaymentSettingsModule
          ),
      },
      {
        path: 'provider-notifications',
        loadChildren: () =>
          import('./provider-notifications/provider-notifications.module').then(
            (m) => m.ProviderNotificationsModule
          ),
      },
      {
        path: 'provider-connected-apps',
        loadChildren: () =>
          import(
            './provider-connected-apps/provider-connected-apps.module'
          ).then((m) => m.ProviderConnectedAppsModule),
      },
      {
        path: 'verification',
        loadChildren: () =>
          import('./verification/verification.module').then(
            (m) => m.VerificationModule
          ),
      },
      {
        path: 'provider-accounts-settings',
        loadChildren: () =>
          import(
            './provider-accounts-settings/provider-accounts-settings.module'
          ).then((m) => m.ProviderAccountsSettingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
