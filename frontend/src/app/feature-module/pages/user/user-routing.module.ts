import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { PaymentRedirectComponent } from './payment-redirect/payment-redirect.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'user/profile',
        loadChildren: () =>
          import('./user-profile/user-profile.module').then((m) => m.UserProfileModule),
      },
      {
        path: 'user/wallet',
        loadChildren: () =>
          import('./customer-wallet/customer-wallet.module').then((m) => m.CustomerWalletModule),
      },
      {
        path: 'stripepaymentsuccess',
        component: PaymentRedirectComponent,
        data: { type: 'success' },
      },
      {
        path: 'stripepaymentcancel',
        component: PaymentRedirectComponent,
        data: { type: 'cancel' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
