import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModuleComponent } from './feature-module.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureModuleComponent,
    children: [
      {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./customers/customers.module').then((m) => m.CustomersModule),
      },
      {
        path: 'providers',
        loadChildren: () =>
          import('./providers/providers.module').then((m) => m.ProvidersModule),
      },
      {
        path: 'error-page',
        loadChildren: () =>
          import('./error-page/error-page.module').then(
            (m) => m.ErrorPageModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home-seven/home-seven.module').then(
            (m) => m.HomeSevenModule
          ),
      },
      {
        path: 'home-one',
        loadChildren: () =>
          import('./home-seven/home-seven.module').then((m) => m.HomeSevenModule),
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureModuleRoutingModule {}
