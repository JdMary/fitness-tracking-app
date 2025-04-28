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
        path: 'customer-challenge',
        loadChildren: () =>
          import('./achievements/customer-challenge/customer-challenge.module').then(
            (m) => m.CustomerChallengeModule
          ),
      },
      {
        path: 'customer-challenge-details',
        loadChildren: () =>
          import('./achievements/customer-challenge-details/customer-challenge-details.module')
            .then(m => m.CustomerChallengeDetailsModule),
      },
      
      {
        path: 'customer-challenge-details',
        loadChildren: () =>
          import('./achievements/customer-challenge-details/customer-challenge-details.module')
            .then(m => m.CustomerChallengeDetailsModule),
      },
      
      {
        path: 'customer-achievements',
        loadChildren: () =>
          import('./achievements/customer-achievements/customer-achievements.module')
            .then(m => m.CustomerAchievementsModule),
      },
      {
        path: 'customer-achievement-details',
        loadChildren: () => import('./achievements/customer-achievement-details/customer-achievement-details.module')
          .then(m => m.CustomerAchievementDetailsModule),
      }
,      
      
{
  path: 'customer-leaderboard-detail',
  loadChildren: () =>
    import('./achievements/customer-leaderboard-detail/customer-leaderboard-detail.module').then(
      (m) => m.CustomerLeaderboardDetailModule
    )
},
{
  path: 'customer-reward',
  loadChildren: () =>
    import('./achievements/customer-reward/customer-reward.module')
      .then(m => m.CustomerRewardModule)
}
,
{
  path: 'share-on-facebook',
  loadChildren: () =>
    import('./achievements/share-on-facebook/share-on-facebook.module').then(
   
      (m) => m.ShareOnFacebookModule
    )
},    
      {
        path: 'pose-ai',
        loadChildren: () =>
          import('./pose-ai/pose-ai.module').then(
            (m) => m.PoseAiModule
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
  { path: 'customer-achievement-details', loadChildren: () => import('./achievements/customer-achievement-details/customer-achievement-details.module').then(m => m.CustomerAchievementDetailsModule) },
  { path: 'customer-leaderboard', loadChildren: () => import('./achievements/customer-leaderboard/customer-leaderboard.module').then(m => m.CustomerLeaderboardModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
