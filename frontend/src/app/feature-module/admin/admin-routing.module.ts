import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MealDetailsComponent } from './diet-plan/meal-details/meal-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'abuse-reports',
        loadChildren: () =>
          import('./abuse-reports/abuse-reports.module').then(
            (m) => m.AbuseReportsModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.module').then((m) => m.ServicesModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'sub-categories',
        loadChildren: () =>
          import('./sub-categories/sub-categories.module').then(
            (m) => m.SubCategoriesModule
          ),
      },
      {
        path: 'reviews',
        loadChildren: () =>
          import('./reviews/reviews.module').then((m) => m.ReviewsModule),
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('./booking/booking.module').then((m) => m.BookingModule),
      },
      {
        path: 'banktransferlist',
        loadChildren: () =>
          import('./banktransferlist/banktransferlist.module').then(
            (m) => m.BanktransferlistModule
          ),
      },
      {
        path: 'wallet',
        loadChildren: () =>
          import('./wallet/wallet.module').then((m) => m.WalletModule),
      },
      {
        path: 'refund-request',
        loadChildren: () =>
          import('./refund-request/refund-request.module').then(
            (m) => m.RefundRequestModule
          ),
      },
      {
        path: 'cash-on-delivery',
        loadChildren: () =>
          import('./cash-on-delivery/cash-on-delivery.module').then(
            (m) => m.CashOnDeliveryModule
          ),
      },
      {
        path: 'payouts',
        loadChildren: () =>
          import('./payouts/payouts.module').then((m) => m.PayoutsModule),
      },
      {
        path: 'sales-transactions',
        loadChildren: () =>
          import('./sales-transactions/sales-transactions.module').then(
            (m) => m.SalesTransactionsModule
          ),
      },

      {
        path: 'chat',
        loadChildren: () =>
          import('./chat/chat.module').then((m) => m.ChatModule),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'location',
        loadChildren: () =>
          import('./location/location.module').then((m) => m.LocationModule),
      },
      {
        path: 'testimonials',
        loadChildren: () =>
          import('./testimonials/testimonials.module').then(
            (m) => m.TestimonialsModule
          ),
      },
      {
        path: 'membership',
        loadChildren: () =>
          import('./membership/membership.module').then(
            (m) => m.MembershipModule
          ),
      },
      {
        path: 'membership-addons',
        loadChildren: () =>
          import('./membership-addons/membership-addons.module').then(
            (m) => m.MembershipAddonsModule
          ),
      },
      {
        path: 'admin-earnings',
        loadChildren: () =>
          import('./admin-earnings/admin-earnings.module').then(
            (m) => m.AdminEarningsModule
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
        path: 'membership-transaction',
        loadChildren: () =>
          import('./membership-transaction/membership-transaction.module').then(
            (m) => m.MembershipTransactionModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'roles-permissions',
        loadChildren: () =>
          import('./roles-permissions/roles-permissions.module').then(
            (m) => m.RolesPermissionsModule
          ),
      },
      {
        path: 'delete-account-requests',
        loadChildren: () =>
          import(
            './delete-account-requests/delete-account-requests.module'
          ).then((m) => m.DeleteAccountRequestsModule),
      },
      {
        path: 'marketing-coupons',
        loadChildren: () =>
          import('./marketing-coupons/marketing-coupons.module').then(
            (m) => m.MarketingCouponsModule
          ),
      },
      {
        path: 'marketing-service',
        loadChildren: () =>
          import('./marketing-service/marketing-service.module').then(
            (m) => m.MarketingServiceModule
          ),
      },
      {
        path: 'marketing-featured',
        loadChildren: () =>
          import('./marketing-featured/marketing-featured.module').then(
            (m) => m.MarketingFeaturedModule
          ),
      },
      {
        path: 'marketing-newsletter',
        loadChildren: () =>
          import('./marketing-newsletter/marketing-newsletter.module').then(
            (m) => m.MarketingNewsletterModule
          ),
      },
      {
        path: 'cachesystem',
        loadChildren: () =>
          import('./cachesystem/cachesystem.module').then(
            (m) => m.CachesystemModule
          ),
      },
      {
        path: 'email-templates',
        loadChildren: () =>
          import('./email-templates/email-templates.module').then(
            (m) => m.EmailTemplatesModule
          ),
      },
      {
        path: 'sms-templates',
        loadChildren: () =>
          import('./sms-templates/sms-templates.module').then(
            (m) => m.SmsTemplatesModule
          ),
      },
      {
        path: 'contact-messages',
        loadChildren: () =>
          import('./contact-messages/contact-messages.module').then(
            (m) => m.ContactMessagesModule
          ),
      },
      {
        path: 'announcements',
        loadChildren: () =>
          import('./announcements/announcements.module').then(
            (m) => m.AnnouncementsModule
          ),
      },

      {
        path: 'signin',
        loadChildren: () =>
          import('./signin/signin.module').then((m) => m.SigninModule),
      },

      {
        path: 'add-testimonials',
        loadChildren: () =>
          import('./add-testimonials/add-testimonials.module').then(
            (m) => m.AddTestimonialsModule
          ),
      },
      {
        path: 'add-announcement',
        loadChildren: () =>
          import('./add-announcement/add-announcement.module').then(
            (m) => m.AddAnnouncementModule
          ),
      },
      {
        path: 'add-subcategories',
        loadChildren: () =>
          import('./add-subcategories/add-subcategories.module').then(
            (m) => m.AddSubcategoriesModule
          ),
      },
      {
        path: 'add-categories',
        loadChildren: () =>
          import('./add-categories/add-categories.module').then(
            (m) => m.AddCategoriesModule
          ),
      },
      {
        path: 'add-role',
        loadChildren: () =>
          import('./add-role/add-role.module').then((m) => m.AddRoleModule),
      },
      {
        path: 'available-plugins',
        loadChildren: () =>
          import('./available-plugins/available-plugins.module').then(
            (m) => m.AvailablePluginsModule
          ),
      },
      {
        path: 'aws-storage',
        loadChildren: () =>
          import('./aws-storage/aws-storage.module').then(
            (m) => m.AwsStorageModule
          ),
      },
      {
        path: 'cancelled-booking',
        loadChildren: () =>
          import('./cancelled-booking/cancelled-booking.module').then(
            (m) => m.CancelledBookingModule
          ),
      },
      {
        path: 'change-password',
        loadChildren: () =>
          import('./change-password/change-password.module').then(
            (m) => m.ChangePasswordModule
          ),
      },
      {
        path: 'completed-booking',
        loadChildren: () =>
          import('./completed-booking/completed-booking.module').then(
            (m) => m.CompletedBookingModule
          ),
      },

      {
        path: 'contact-messages-view',
        loadChildren: () =>
          import('./contact-messages-view/contact-messages-view.module').then(
            (m) => m.ContactMessagesViewModule
          ),
      },
      {
        path: 'create-menu',
        loadChildren: () =>
          import('./create-menu/create-menu.module').then(
            (m) => m.CreateMenuModule
          ),
      },
      {
        path: 'deleted-services',
        loadChildren: () =>
          import('./deleted-services/deleted-services.module').then(
            (m) => m.DeletedServicesModule
          ),
      },
      {
        path: 'edit-coupon',
        loadChildren: () =>
          import('./edit-coupon/edit-coupon.module').then(
            (m) => m.EditCouponModule
          ),
      },
      {
        path: 'edit-announcement',
        loadChildren: () =>
          import('./edit-announcement/edit-announcement.module').then(
            (m) => m.EditAnnouncementModule
          ),
      },
      {
        path: 'edit-email-template',
        loadChildren: () =>
          import('./edit-email-template/edit-email-template.module').then(
            (m) => m.EditEmailTemplateModule
          ),
      },
      {
        path: 'edit-management',
        loadChildren: () =>
          import('./edit-management/edit-management.module').then(
            (m) => m.EditManagementModule
          ),
      },
      {
        path: 'edit-offer',
        loadChildren: () =>
          import('./edit-offer/edit-offer.module').then(
            (m) => m.EditOfferModule
          ),
      },
      {
        path: 'edit-page',
        loadChildren: () =>
          import('./edit-page/edit-page.module').then((m) => m.EditPageModule),
      },
      {
        path: 'edit-role',
        loadChildren: () =>
          import('./edit-role/edit-role.module').then((m) => m.EditRoleModule),
      },
      {
        path: 'edit-service',
        loadChildren: () =>
          import('./edit-service/edit-service.module').then(
            (m) => m.EditServiceModule
          ),
      },
      {
        path: 'add-challenge',
        loadChildren: () =>
          import('./achievements/challenges/addChallenge/challenges.module').then(
            (m) => m.ChallengesModule
          ),
      },
      {
        path: 'liste-challenges',
        loadChildren: () =>
          import('./achievements/challenges/liste-challenges/liste-challenges.module').then(
            (m) => m.ListeChallengesModule
          ),
      },
    
      {
        path: 'edit-challenge',
        loadChildren: () =>
          import('./achievements/challenges/edit-challenge/edit-challenge.module').then(
            (m) => m.EditChallengeModule
          ),
      },
      {
        path: 'generate-challenge',
        loadChildren: () =>
          import('./achievements/challenges/generate-challenge/generate-challenge.module').then(
            (m) => m.GenerateChallengeModule
          ),
      }
  ,  
  {
    path: 'challenges/details',
    loadChildren: () =>
      import('./achievements/challenges/details-challenge/details-challenge.module')
        .then(m => m.DetailsChallengeModule)
  }
  
  
     ,//ACHIEVEMNTS
      {
      path: 'liste-achievements',
      loadChildren: () =>
        import('./achievements/achievement/liste-achievements/liste-achievements.module').then(
          (m) => m.ListeAchievementsModule
        ),
    },
    
    {
      path: 'edit-achievement',
      loadChildren: () =>
        import('./achievements/achievement/edit-achievement/edit-achievement.module').then(
          (m) => m.EditAchievementModule
        )
    },  
  
        //LEADERBOARD
    
    {
      path: 'liste-leaderboard',
      loadChildren: () =>
        import('./achievements/leaderboard/liste-leaderboard/liste-leaderboard.module').then(
          (m) => m.ListeLeaderboardModule
        ),
    },
   
      {path: 'edit-leaderboard/:boardId',
      loadChildren: () =>
        import('./achievements/leaderboard/edit-leaderboard/edit-leaderboard.module').then(m => m.EditLeaderboardModule)
    }
,    
    {
      
        path: 'add-leaderboard',
        loadChildren: () =>
          import('./achievements/leaderboard/add-leaderboard/add-leaderboard.module').then(
            (m) => m.AddLeaderboardModule
          ),
      },
      {
        path: 'details-leaderboard/:boardId',
        loadChildren: () =>
          import('./achievements/leaderboard/details-leaderboard/details-leaderboard.module').then(
            (m) => m.DetailsLeaderboardModule
          ),
      },
      
      
      
      
      {
        path: 'add-service',
        loadChildren: () =>
          import('./add-service/add-service.module').then(
            (m) => m.AddServiceModule
          ),
      },
      {
        path: 'edit-sms-template',
        loadChildren: () =>
          import('./edit-sms-template/edit-sms-template.module').then(
            (m) => m.EditSmsTemplateModule
          ),
      },
      {
        path: 'edit-subcategories',
        loadChildren: () =>
          import('./edit-subcategories/edit-subcategories.module').then(
            (m) => m.EditSubcategoriesModule
          ),
      },
      {
        path: 'edit-testimonials',
        loadChildren: () =>
          import('./edit-testimonials/edit-testimonials.module').then(
            (m) => m.EditTestimonialsModule
          ),
      },
      {
        path: 'facebook-api',
        loadChildren: () =>
          import('./facebook-api/facebook-api.module').then(
            (m) => m.FacebookApiModule
          ),
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
      },

      {
        path: 'google-api',
        loadChildren: () =>
          import('./google-api/google-api.module').then(
            (m) => m.GoogleApiModule
          ),
      },

      {
        path: 'inactive-services',
        loadChildren: () =>
          import('./inactive-services/inactive-services.module').then(
            (m) => m.InactiveServicesModule
          ),
      },
      {
        path: 'inprogress-booking',
        loadChildren: () =>
          import('./inprogress-booking/inprogress-booking.module').then(
            (m) => m.InprogressBookingModule
          ),
      },
      {
        path: 'menu-management',
        loadChildren: () =>
          import('./menu-management/menu-management.module').then(
            (m) => m.MenuManagementModule
          ),
      },
      {
        path: 'nexmo',
        loadChildren: () =>
          import('./nexmo/nexmo.module').then((m) => m.NexmoModule),
      },

      {
        path: 'pending-booking',
        loadChildren: () =>
          import('./pending-booking/pending-booking.module').then(
            (m) => m.PendingBookingModule
          ),
      },
      {
        path: 'pending-services',
        loadChildren: () =>
          import('./pending-services/pending-services.module').then(
            (m) => m.PendingServicesModule
          ),
      },
      {
        path: 'pending-transferlist',
        loadChildren: () =>
          import('./pending-transferlist/pending-transferlist.module').then(
            (m) => m.PendingTransferlistModule
          ),
      },
      {
        path: 'approved-transferlist',
        loadChildren: () =>
          import('./approved-transferlist/approved-transferlist.module').then(
            (m) => m.ApprovedTransferlistModule
          ),
      },
      {
        path: 'php-mail',
        loadChildren: () =>
          import('./php-mail/php-mail.module').then((m) => m.PhpMailModule),
      },
      {
        path: 'plugins-manager',
        loadChildren: () =>
          import('./plugins-manager/plugins-manager.module').then(
            (m) => m.PluginsManagerModule
          ),
      },

      {
        path: 'rejected-transferlist',
        loadChildren: () =>
          import('./rejected-transferlist/rejected-transferlist.module').then(
            (m) => m.RejectedTransferlistModule
          ),
      },
      {
        path: 'role-permission',
        loadChildren: () =>
          import('./role-permission/role-permission.module').then(
            (m) => m.RolePermissionModule
          ),
      },

      {
        path: 'smtp',
        loadChildren: () =>
          import('./smtp/smtp.module').then((m) => m.SmtpModule),
      },

      {
        path: 'successful-transferlist',
        loadChildren: () =>
          import(
            './successful-transferlist/successful-transferlist.module'
          ).then((m) => m.SuccesfulTransferlistModule),
      },

      {
        path: 'view-services',
        loadChildren: () =>
          import('./view-services/view-services.module').then(
            (m) => m.ViewServicesModule
          ),
      },
      {
        path: 'wallet-history',
        loadChildren: () =>
          import('./wallet-history/wallet-history.module').then(
            (m) => m.WalletHistoryModule
          ),
      },
      {
        path: 'website-settings',
        loadChildren: () =>
          import('./website-settings/website-settings.module').then(
            (m) => m.WebsiteSettingsModule
          ),
      },
      {
        path: 'login-activity',
        loadChildren: () =>
          import('./login-activity/login-activity.module').then(
            (m) => m.LoginActivityModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'device-management',
        loadChildren: () =>
          import('./device-management/device-management.module').then(
            (m) => m.DeviceManagementModule
          ),
      },
      {
        path: 'add-membership',
        loadChildren: () =>
          import('./add-membership/add-membership.module').then(
            (m) => m.AddMembershipModule
          ),
      },
      {
        path: 'forget-password',
        loadChildren: () =>
          import('./forget-password/forget-password.module').then(
            (m) => m.ForgetPasswordModule
          ),
      },
      {
        path: 'active',
        loadChildren: () =>
          import('./active/active.module').then((m) => m.ActiveModule),
      },
      {
        path: 'customer-wallet',
        loadChildren: () =>
          import('./customer-wallet/customer-wallet.module').then(
            (m) => m.CustomerWalletModule
          ),
      },
      {
        path: 'provider-wallet',
        loadChildren: () =>
          import('./provider-wallet/provider-wallet.module').then(
            (m) => m.ProviderWalletModule
          ),
      },
      {
        path: 'refund-report',
        loadChildren: () =>
          import('./refund-report/refund-report.module').then(
            (m) => m.RefundReportModule
          ),
      },
      {
        path: 'register-report',
        loadChildren: () =>
          import('./register-report/register-report.module').then(
            (m) => m.RegisterReportModule
          ),
      },
      {
        path: 'sales-report',
        loadChildren: () =>
          import('./sales-report/sales-report.module').then(
            (m) => m.SalesReportModule
          ),
      },
      {
        path: 'verification-request',
        loadChildren: () =>
          import('./verification-request/verification-request.module').then(
            (m) => m.VerificationRequestModule
          ),
      },
      {
        path: 'sport-facility',
        loadChildren: () => import('./sport-facility/sport-facility.module').then(m => m.SportFacilityModule)
      },
      {
        path: 'list-sport-facility',
        loadChildren: () =>
          import('./sport-facility/list-sport-facility/list-sport-facility.module').then(m => m.ListSportFacilityModule)
      },
      {
        path: 'edit-sport-facility',
        loadChildren: () =>
          import('./sport-facility/edit-sport-facility/edit-sport-facility.module').then(m => m.EditSportFacilityModule)
      },
      {
        path: 'promotion',
        loadChildren: () => import('./promotion/promotion.module').then(m => m.PromotionModule)
      },
      {
        path: 'subscription',
        loadChildren: () =>
          import('./subscription/subscription.module').then(m => m.SubscriptionModule)
      },
      {
        path: 'event',
        loadChildren: () => import('./event/event.module').then(m => m.EventModule)
      },

      
      {
        path: 'provider-sales',
        loadChildren: () =>
          import('./provider-sales/provider-sales.module').then(
            (m) => m.ProviderSalesModule
          ),
      },
      {
        path: 'buddy',
        loadChildren: () =>
          import('./buddy/buddy.module').then((m) => m.BuddyModule),
      },
      {
        path: 'add-user',
        loadChildren: () =>
          import('./add-user/add-user.module').then(
            (m) => m.AddUserModule
          ),
      },
      //////////////dietplan/////////////
        {
          path: 'diet-plan',
          loadChildren: () =>
            import('./diet-plan/diet-plan.module').then((m) => m.DietPlanModule),
        },
        //////test
        {
          path: 'diet-plans',
          loadChildren: () =>
            import('./diet-plan/diet-plan.module').then((m) => m.DietPlanModule),
        },
     
        {
          path: 'diet-plan/meal-details/:id',
          component: MealDetailsComponent,
        },
        {
        path: 'workout',
        loadChildren: () =>
          import('./workout/workout.module').then((m) => m.WorkoutModule),
        }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
