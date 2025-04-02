import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: 'customer-dashboard',
        loadChildren: () =>
          import('./customer-dashboard/customer-dashboard.module').then(
            (m) => m.CustomerDashboardModule
          ),
      },
      {
        path: 'customer-booking',
        loadChildren: () =>
          import('./customer-booking/customer-booking.module').then(
            (m) => m.CustomerBookingModule
          ),
      },
      {
        path: 'customer-favourite',
        loadChildren: () =>
          import('./customer-favourite/customer-favourite.module').then(
            (m) => m.CustomerFavouriteModule
          ),
      },
      {
        path: 'customer-wallet',
        loadChildren: () =>
          import('./customer-wallet/customer-wallet.module').then(
            (m) => m.CustomerWalletModule
          ),
      },
      {
        path: 'customer-reviews',
        loadChildren: () =>
          import('./customer-reviews/customer-reviews.module').then(
            (m) => m.CustomerReviewsModule
          ),
      },
      {
        path: 'customer-chat',
        loadChildren: () =>
          import('./customer-chat/customer-chat.module').then(
            (m) => m.CustomerChatModule
          ),
      },

      {
        path: 'customer-booking-calendar',
        loadChildren: () =>
          import(
            './customer-booking-calendar/customer-booking-calendar.module'
          ).then((m) => m.CustomerBookingCalendarModule),
      },

      {
        path: 'invoice',
        loadChildren: () =>
          import('./invoice/invoice.module').then((m) => m.InvoiceModule),
      },

      {
        path: 'orders',
        loadChildren: () =>
          import('./orders/orders.module').then((m) => m.OrdersModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('./notification/notification.module').then(
            (m) => m.NotificationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
