import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'user-list',
        loadChildren: () =>
          import('./user-list/user-list.module').then((m) => m.UserListModule),
      },
      {
        path: 'user-customers',
        loadChildren: () =>
          import('./user-customers/user-customers.module').then(
            (m) => m.UserCustomersModule
          ),
      },
      {
        path: 'user-providers',
        loadChildren: () =>
          import('./user-providers/user-providers.module').then(
            (m) => m.UserProvidersModule
          ),
      },
      {
        path: 'add-provider',
        loadChildren: () =>
          import('./add-provider/add-provider.module').then(
            (m) => m.AddProviderModule
          ),
      },
      {
        path: 'add-user',
        loadChildren: () =>
          import('./add-user/add-user.module').then((m) => m.AddUserModule),
      },
      {
        path: 'edit-provider',
        loadChildren: () =>
          import('./edit-provider/edit-provider.module').then(
            (m) => m.EditProviderModule
          ),
      },
      {
        path: 'edit-user',
        loadChildren: () =>
          import('./edit-user/edit-user.module').then((m) => m.EditUserModule),
      },
      { 
        path: 'add-customer',
        loadChildren: () =>
          import(
            './add-customer/add-customer.module'
          ).then((m) => m.AddCustomerModule),
      },
      {
        path: 'edit-customer',
        loadChildren: () =>
          import('./edit-customer/edit-customer.module').then(
            (m) => m.EditCustomerModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
