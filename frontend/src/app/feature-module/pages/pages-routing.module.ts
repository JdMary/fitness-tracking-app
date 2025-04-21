import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./about-us/about-us.module').then((m) => m.AboutUsModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.module').then((m) => m.ServicesModule),
      },
      {
        path: 'provider',
        loadChildren: () =>
          import('./providers/providers.module').then((m) => m.ProvidersModule),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'how-it-works',
        loadChildren: () =>
          import('./how-it-works/how-it-works.module').then(
            (m) => m.HowItWorksModule
          ),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'pricing',
        loadChildren: () =>
          import('./pricing/pricing.module').then((m) => m.PricingModule),
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'privacy-policy',
        loadChildren: () =>
          import('./privacy-policy/privacy-policy.module').then(
            (m) => m.PrivacyPolicyModule
          ),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'terms-condition',
        loadChildren: () =>
          import('./terms-condition/terms-condition.module').then(
            (m) => m.TermsConditionModule
          ),
      },
      {
        path: 'search-list',
        loadChildren: () =>
          import('./search-list/search-list.module').then(
            (m) => m.SearchListModule
          ),
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('./maintenance/maintenance.module').then(
            (m) => m.MaintenanceModule
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
        path: 'service-information',
        loadChildren: () =>
          import('./service-information/service-information.module').then(
            (m) => m.ServiceInformationModule
          ),
      },
      {
        path: 'bookings',
        loadChildren: () =>
          import('./bookings/bookings.module').then((m) => m.BookingsModule),
      },

      {
        path: 'coming-soon',
        loadChildren: () =>
          import('./coming-soon/coming-soon.module').then(
            (m) => m.ComingSoonModule
          ),
      },
      {
        path: 'session-expired',
        loadChildren: () =>
          import('./session-expired/session-expired.module').then(
            (m) => m.SessionExpiredModule
          ),
      },
      {
        path: 'installer',
        loadChildren: () =>
          import('./installer/installer.module').then((m) => m.InstallerModule),
      },
      {
        path: 'categories2',
        loadChildren: () =>
          import('./categories2/categories2.module').then(
            (m) => m.Categories2Module
          ),
      },
      {
        path: 'service-request',
        loadChildren: () =>
          import('./service-request/service-request.module').then(
            (m) => m.ServiceRequestModule
          ),
      },
      ///////////////add
      {
        path: 'sport-facility',
        loadChildren: () => import('./sport-facility/sport-facility.module').then(m => m.SportFacilityModule)

      },
      {
        path: 'promotion',
        loadChildren: () => import('./promotion/promotion.module').then(m => m.PromotionModule)
      },
      {
        path: 'subscription',
        loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule)
      },
      {
        path: 'events',
        loadChildren: () => import('./event/event.module').then(m => m.EventModule)
      }
      
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
