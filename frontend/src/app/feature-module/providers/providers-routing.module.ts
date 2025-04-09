import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersComponent } from './providers.component';

const routes: Routes = [
  {
    path: '',
    component: ProvidersComponent,
    children: [
      {
        path: 'provider-dashboard',
        loadChildren: () =>
          import('./provider-dashboard/provider-dashboard.module').then(
            (m) => m.ProviderDashboardModule
          ),
      },
      {
        path: 'provider-services',
        loadChildren: () =>
          import('./provider-services/provider-services.module').then(
            (m) => m.ProviderServicesModule
          ),
      },
      {
        path: 'provider-booking',
        loadChildren: () =>
          import('./provider-booking/provider-booking.module').then(
            (m) => m.ProviderBookingModule
          ),
      },
      {
        path: 'provider-payout',
        loadChildren: () =>
          import('./provider-payout/provider-payout.module').then(
            (m) => m.ProviderPayoutModule
          ),
      },
      {
        path: 'provider-availability',
        loadChildren: () =>
          import('./provider-availability/provider-availability.module').then(
            (m) => m.ProviderAvailabilityModule
          ),
      },
      {
        path: 'provider-holiday',
        loadChildren: () =>
          import('./provider-holiday/provider-holiday.module').then(
            (m) => m.ProviderHolidayModule
          ),
      },
      {
        path: 'provider-coupons',
        loadChildren: () =>
          import('./provider-coupons/provider-coupons.module').then(
            (m) => m.ProviderCouponsModule
          ),
      },
      {
        path: 'provider-subscription',
        loadChildren: () =>
          import('./provider-subscription/provider-subscription.module').then(
            (m) => m.ProviderSubscriptionModule
          ),
      },
      {
        path: 'provider-offers',
        loadChildren: () =>
          import('./provider-offers/provider-offers.module').then(
            (m) => m.ProviderOffersModule
          ),
      },
      {
        path: 'provider-reviews',
        loadChildren: () =>
          import('./provider-reviews/provider-reviews.module').then(
            (m) => m.ProviderReviewsModule
          ),
      },
      {
        path: 'provider-earnings',
        loadChildren: () =>
          import('./provider-earnings/provider-earnings.module').then(
            (m) => m.ProviderEarningsModule
          ),
      },
      {
        path: 'provider-chat',
        loadChildren: () =>
          import('./provider-chat/provider-chat.module').then(
            (m) => m.ProviderChatModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'add-coupon',
        loadChildren: () =>
          import('./add-coupon/add-coupon.module').then(
            (m) => m.AddCouponModule
          ),
      },
      {
        path: 'add-subscription',
        loadChildren: () =>
          import('./add-subscription/add-subscription.module').then(
            (m) => m.AddSubscriptionModule
          ),
      },
      {
        path: 'provider-addons',
        loadChildren: () =>
          import('./provider-addons/provider-addons.module').then(
            (m) => m.ProviderAddonsModule
          ),
      },
      {
        path: 'provider-book-details',
        loadChildren: () =>
          import('./provider-book-details/provider-book-details.module').then(
            (m) => m.ProviderBookDetailsModule
          ),
      },
      {
        path: 'provider-change-password',
        loadChildren: () =>
          import(
            './provider-change-password/provider-change-password.module'
          ).then((m) => m.ProviderChangePasswordModule),
      },
      {
        path: 'provider-device-management',
        loadChildren: () =>
          import(
            './provider-device-managememt/provider-device-managememt.module'
          ).then((m) => m.ProviderDeviceManagememtModule),
      },
      {
        path: 'provider-login-activity',
        loadChildren: () =>
          import(
            './provider-login-activity/provider-login-activity.module'
          ).then((m) => m.ProviderLoginActivityModule),
      },
      {
        path: 'device-management',
        loadChildren: () =>
          import('./device-management/device-management.module').then(
            (m) => m.DeviceManagementModule
          ),
      },
      {
        path: 'provider-edit-service',
        loadChildren: () =>
          import('./provider-edit-service/provider-edit-service.module').then(
            (m) => m.ProviderEditServiceModule
          ),
      },
      {
        path: 'provider-services-list',
        loadChildren: () =>
          import('./provider-services-list/provider-services-list.module').then(
            (m) => m.ProviderServicesListModule
          ),
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('./notification/notification.module').then(
            (m) => m.NotificationModule
          ),
      },
      {
        path: 'staff-list',
        loadChildren: () =>
          import('./staff-list/staff-list.module').then(
            (m) => m.StaffListModule
          ),
      },
      {
        path: 'customer-list',
        loadChildren: () =>
          import('./customer-list/customer-list.module').then(
            (m) => m.CustomerListModule
          ),
      },
      {
        path: 'provider-enquiry',
        loadChildren: () =>
          import('./provider-enquiry/provider-enquiry.module').then(
            (m) => m.ProviderEnquiryModule
          ),
      },
      {
        path: 'provider-leave-history',
        loadChildren: () =>
          import('./provider-leave-history/provider-leave-history.module').then(
            (m) => m.ProviderLeaveHistoryModule
          ),
      },
      // {
      //   path: 'provider-transaction.',
      //   loadChildren: () =>
      //     import('./provider-transaction./provider-transaction..module').then(
      //       (m) => m.ProviderTransactionModule
      //     ),
      // },
      {
        path: 'customer-details',
        loadChildren: () =>
          import('./customer-details/customer-details.module').then(
            (m) => m.CustomerDetailsModule
          ),
      },
      {
        path: 'customer-grid',
        loadChildren: () =>
          import('./customer-grid/customer-grid.module').then(
            (m) => m.CustomerGridModule
          ),
      },
      { path: 'staff-grid', loadChildren: () => import('./staff-grid/staff-grid.module').then(m => m.StaffGridModule) },
  { path: 'staff-details', loadChildren: () => import('./staff-details/staff-details.module').then(m => m.StaffDetailsModule) },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvidersRoutingModule {}
