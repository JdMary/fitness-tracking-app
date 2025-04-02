import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersComponent } from './providers.component';

const routes: Routes = [
  {
    path: '',
    component: ProvidersComponent,
    children: [
      {
        path: 'providers-list',
        loadChildren: () =>
          import('./providers-list/providers-list.module').then(
            (m) => m.ProvidersListModule
          ),
      },
      {
        path: 'provider-details',
        loadChildren: () =>
          import('./provider-details/provider-details.module').then(
            (m) => m.ProviderDetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvidersRoutingModule {}
