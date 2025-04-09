import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'localization',
      },
      {
        path: 'localization',
        loadChildren: () =>
          import('./localization/localization.module').then(
            (m) => m.LocalizationModule
          ),
      },
      {
        path: 'tax-rates',
        loadChildren: () =>
          import('./tax-rates/tax-rates.module').then((m) => m.TaxRatesModule),
      },
      {
        path: 'account-settings',
        loadChildren: () =>
          import('./account-settings/account-settings.module').then(
            (m) => m.AccountSettingsModule
          ),
      },
      {
        path: 'appearance',
        loadChildren: () =>
          import('./appearance/appearance.module').then(
            (m) => m.AppearanceModule
          ),
      },
      {
        path: 'authentication-settings',
        loadChildren: () =>
          import(
            './authentication-settings/authentication-settings.module'
          ).then((m) => m.AuthenticationSettingsModule),
      },
      {
        path: 'ban-ip-address',
        loadChildren: () =>
          import('./ban-ip-address/ban-ip-address.module').then(
            (m) => m.BanIpAddressModule
          ),
      },
      {
        path: 'connected-apps',
        loadChildren: () =>
          import('./connected-apps/connected-apps.module').then(
            (m) => m.ConnectedAppsModule
          ),
      },
      {
        path: 'cronjob',
        loadChildren: () =>
          import('./cronjob/cronjob.module').then((m) => m.CronjobModule),
      },
      {
        path: 'currencies',
        loadChildren: () =>
          import('./currencies/currencies.module').then(
            (m) => m.CurrenciesModule
          ),
      },
      {
        path: 'database-backup',
        loadChildren: () =>
          import('./database-backup/database-backup.module').then(
            (m) => m.DatabaseBackupModule
          ),
      },
      {
        path: 'email-settings',
        loadChildren: () =>
          import('./email-settings/email-settings.module').then(
            (m) => m.EmailSettingsModule
          ),
      },
      {
        path: 'footer-settings',
        loadChildren: () =>
          import('./footer-settings/footer-settings.module').then(
            (m) => m.FooterSettingsModule
          ),
      },
      {
        path: 'gdpr-settings',
        loadChildren: () =>
          import('./gdpr-settings/gdpr-settings.module').then(
            (m) => m.GdprSettingsModule
          ),
      },
      {
        path: 'header-settings',
        loadChildren: () =>
          import('./header-settings/header-settings.module').then(
            (m) => m.HeaderSettingsModule
          ),
      },
      {
        path: 'language',
        loadChildren: () =>
          import('./language/language.module').then((m) => m.LanguageModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: 'preference-settings',
        loadChildren: () =>
          import('./preference-settings/preference-settings.module').then(
            (m) => m.PreferenceSettingsModule
          ),
      },
      {
        path: 'security',
        loadChildren: () =>
          import('./security/security.module').then((m) => m.SecurityModule),
      },
      {
        path: 'seo-settings',
        loadChildren: () =>
          import('./seo-settings/seo-settings.module').then(
            (m) => m.SeoSettingsModule
          ),
      },
      {
        path: 'service-settings',
        loadChildren: () =>
          import('./service-settings/service-settings.module').then(
            (m) => m.ServiceSettingsModule
          ),
      },
      {
        path: 'site-information',
        loadChildren: () =>
          import('./site-information/site-information.module').then(
            (m) => m.SiteInformationModule
          ),
      },
      {
        path: 'sms-settings',
        loadChildren: () =>
          import('./sms-settings/sms-settings.module').then(
            (m) => m.SmsSettingsModule
          ),
      },
      {
        path: 'social-authentication',
        loadChildren: () =>
          import('./social-authentication/social-authentication.module').then(
            (m) => m.SocialAuthenticationModule
          ),
      },
      {
        path: 'social-profiles',
        loadChildren: () =>
          import('./social-profiles/social-profiles.module').then(
            (m) => m.SocialProfilesModule
          ),
      },
      {
        path: 'storage-settings',
        loadChildren: () =>
          import('./storage-settings/storage-settings.module').then(
            (m) => m.StorageSettingsModule
          ),
      },
      {
        path: 'system-backup',
        loadChildren: () =>
          import('./system-backup/system-backup.module').then(
            (m) => m.SystemBackupModule
          ),
      },
      {
        path: 'system-information',
        loadChildren: () =>
          import('./system-information/system-information.module').then(
            (m) => m.SystemInformationModule
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
        path: 'provider-settings',
        loadChildren: () =>
          import('./provider-settings/provider-settings.module').then(
            (m) => m.ProviderSettingsModule
          ),
      },
      {
        path: 'payment-gateways',
        loadChildren: () =>
          import('./payment-gateways/payment-gateways.module').then(
            (m) => m.PaymentGatewaysModule
          ),
      },
      {
        path: 'banktransfer',
        loadChildren: () =>
          import('./banktransfer/banktransfer.module').then(
            (m) => m.BanktransferModule
          ),
      },
      {
        path: 'currency-settings',
        loadChildren: () =>
          import('./curreny-settings/curreny-settings.module').then(
            (m) => m.CurrenySettingsModule
          ),
      },
      {
        path: 'email-storage-settings',
        loadChildren: () =>
          import('./email-storage-settings/email-storage-settings.module').then(
            (m) => m.EmailStorageSettingsModule
          ),
      },
      {
        path: 'appointment-settings',
        loadChildren: () =>
          import('./appointment-settings/appointment-settings.module').then(
            (m) => m.AppointmentSettingsModule
          ),
      },
      {
        path: 'typography-settings',
        loadChildren: () =>
          import('./typography-settings/typography-settings.module').then(
            (m) => m.TypographySettingsModule
          ),
      },
      {
        path: 'calendar-settings',
        loadChildren: () =>
          import('./calendar-settings/calendar-settings.module').then(
            (m) => m.CalendarSettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
