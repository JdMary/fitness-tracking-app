import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'add-page',
        loadChildren: () =>
          import('./add-page/add-page.module').then((m) => m.AddPageModule),
      },
      {
        path: 'pages-list',
        loadChildren: () =>
          import('./pages-list/pages-list.module').then(
            (m) => m.PagesListModule
          ),
      },
      {
        path: 'page-list',
        loadChildren: () =>
          import('./page-list/page-list.module').then((m) => m.PageListModule),
      },
      
      {
        path: 'paypal',
        loadChildren: () =>
          import('./paypal/paypal.module').then((m) => m.PaypalModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
