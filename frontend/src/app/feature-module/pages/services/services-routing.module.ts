import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: 'service-grid',
        loadChildren: () =>
          import('./service-grid/service-grid.module').then(
            (m) => m.ServiceGridModule
          ),
      },
      {
        path: 'service-list',
        loadChildren: () =>
          import('./service-list/service-list.module').then(
            (m) => m.ServiceListModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./search/search.module').then((m) => m.SearchModule),
      },
      {
        path: 'service-details',
        loadChildren: () =>
          import('./service-details/service-details.module').then(
            (m) => m.ServiceDetailsModule
          ),
      },
      {
        path: 'service-details-two',
        loadChildren: () =>
          import('./service-details-two/service-details-two.module').then(
            (m) => m.ServiceDetailsTwoModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
