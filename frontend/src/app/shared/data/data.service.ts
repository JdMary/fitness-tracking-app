import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { routes } from '../routes/routes';
import { apiResultFormat } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  public getProviderPayout(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/provider-payout.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getEvents() {
    return this.http.get<apiResultFormat>('assets/json/calendar.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getProviderCoupons() {
    return this.http.get<apiResultFormat>('assets/json/provider-coupons.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getProviderOffers() {
    return this.http.get<apiResultFormat>('assets/json/provider-offers.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getProviderEarnings() {
    return this.http.get<apiResultFormat>('assets/json/provider-earnings.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getProviderPlan() {
    return this.http.get<apiResultFormat>('assets/json/provider-plan.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getServices() {
    return this.http.get<apiResultFormat>('assets/json/services.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPendingServices() {
    return this.http.get<apiResultFormat>('assets/json/pending-services.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getDeletedServices() {
    return this.http.get<apiResultFormat>('assets/json/deleted-services.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInactiveServices() {
    return this.http.get<apiResultFormat>('assets/json/inactive-services.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getactiveServices() {
    return this.http.get<apiResultFormat>('assets/json/active-services.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCategories() {
    return this.http.get<apiResultFormat>('assets/json/categories.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSubCategories() {
    return this.http.get<apiResultFormat>('assets/json/sub-categories.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getReviewType() {
    return this.http.get<apiResultFormat>('assets/json/review-type.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getReview() {
    return this.http.get<apiResultFormat>('assets/json/review.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPendingTransferlist() {
    return this.http.get<apiResultFormat>('assets/json/pending-transferlist.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getBooking() {
    return this.http.get<apiResultFormat>('assets/json/booking.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPendingBooking() {
    return this.http.get<apiResultFormat>('assets/json/pending-booking.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInprogressBooking() {
    return this.http.get<apiResultFormat>('assets/json/inprogress-booking.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getApprovedTransferlist() {
    return this.http.get<apiResultFormat>('assets/json/approved-transferlist.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCustomerList() {
    return this.http.get<apiResultFormat>('assets/json/customer-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getProviderEnquiry() {
    return this.http.get<apiResultFormat>('assets/json/provider-enquiry.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStaffList() {
    return this.http.get<apiResultFormat>('assets/json/staff-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSuccessfulTransferlist() {
    return this.http.get<apiResultFormat>('assets/json/successful-transferlist.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getRejectedTransferlist() {
    return this.http.get<apiResultFormat>('assets/json/rejected-transferlist.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getBankTransferlist() {
    return this.http.get<apiResultFormat>('assets/json/bank-transferlist.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getWallet() {
    return this.http.get<apiResultFormat>('assets/json/wallet.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getRefundRequest() {
    return this.http.get<apiResultFormat>('assets/json/refund-request.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getProviderWallet() {
    return this.http.get<apiResultFormat>('assets/json/provider-wallet.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCustomerWallet() {
    return this.http.get<apiResultFormat>('assets/json/customer-wallet.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCashOnDelivery() {
    return this.http.get<apiResultFormat>('assets/json/cash-on-delivery.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCompletedBooking() {
    return this.http.get<apiResultFormat>('assets/json/completed-booking.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCancelledBooking() {
    return this.http.get<apiResultFormat>('assets/json/cancelled-booking.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPayoutRequest() {
    return this.http.get<apiResultFormat>('assets/json/payout-request.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSalesTransactions() {
    return this.http.get<apiResultFormat>('assets/json/sales-transactions.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPageList() {
    return this.http.get<apiResultFormat>('assets/json/page-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPagesList() {
    return this.http.get<apiResultFormat>('assets/json/pages-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getBlogsCategories() {
    return this.http.get<apiResultFormat>('assets/json/blogs-categories.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getBlogsComments() {
    return this.http.get<apiResultFormat>('assets/json/blogs-comments.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCountries() {
    return this.http.get<apiResultFormat>('assets/json/countries.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStates() {
    return this.http.get<apiResultFormat>('assets/json/states.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCities() {
    return this.http.get<apiResultFormat>('assets/json/cities.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTestimonials() {
    return this.http.get<apiResultFormat>('assets/json/testimonials.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getFaq() {
    return this.http.get<apiResultFormat>('assets/json/faq.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getAdminEarnings() {
    return this.http.get<apiResultFormat>('assets/json/admin-earnings.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getAdminProviderEarnings() {
    return this.http.get<apiResultFormat>('assets/json/admin-provider-earnings.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getProviderSales() {
    return this.http.get<apiResultFormat>('assets/json/provider-sales.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getMembershipTransaction() {
    return this.http.get<apiResultFormat>('assets/json/membership-transaction.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getUserList() {
    return this.http.get<apiResultFormat>('assets/json/user-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getUserCustomer() {
    return this.http.get<apiResultFormat>('assets/json/user-customer.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getUserProvider() {
    return this.http.get<apiResultFormat>('assets/json/user-provider.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getRolesPermissions() {
    return this.http.get<apiResultFormat>('assets/json/roles-permissions.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getDeleteAccountRequests() {
    return this.http.get<apiResultFormat>('assets/json/delete-account-requests.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getMarketingCoupons() {
    return this.http.get<apiResultFormat>('assets/json/marketing-coupons.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getMarketingService() {
    return this.http.get<apiResultFormat>('assets/json/marketing-services.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getMarketingFeatured() {
    return this.http.get<apiResultFormat>('assets/json/marketing-featured.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getMarketingNewsletter() {
    return this.http.get<apiResultFormat>('assets/json/marketing-newsletter.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getEmailTemplates() {
    return this.http.get<apiResultFormat>('assets/json/email-templates.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSmsTemplates() {
    return this.http.get<apiResultFormat>('assets/json/sms-templates.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getContactMessages() {
    return this.http.get<apiResultFormat>('assets/json/contact-messages.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getAnnouncements() {
    return this.http.get<apiResultFormat>('assets/json/announcements.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTaxRates() {
    return this.http.get<apiResultFormat>('assets/json/tax-rates.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCurrencies() {
    return this.http.get<apiResultFormat>('assets/json/currencies.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSystemBackup() {
    return this.http.get<apiResultFormat>('assets/json/system-backup.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getDatabaseBackup() {
    return this.http.get<apiResultFormat>('assets/json/database-backup.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getAbuseReports() {
    return this.http.get<apiResultFormat>('assets/json/abuse-reports.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSalesReport() {
    return this.http.get<apiResultFormat>('assets/json/sales-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getRegisterReport() {
    return this.http.get<apiResultFormat>('assets/json/register-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getRefundReport() {
    return this.http.get<apiResultFormat>('assets/json/refund-reports.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getContactMessagesView() {
    return this.http.get<apiResultFormat>('assets/json/contact-messages-view.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getMenuManagement() {
    return this.http.get<apiResultFormat>('assets/json/menu-management.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getRolePermission() {
    return this.http.get<apiResultFormat>('assets/json/role-permission.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getLoginActivity() {
    return this.http.get<apiResultFormat>('assets/json/login-activity.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getProvidersDeviceManagement() {
    return this.http.get<apiResultFormat>('assets/json/providers-device-management.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getVerificationRequest() {
    return this.http.get<apiResultFormat>('assets/json/verification-request.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public viewServices = [
    {
      img: 'assets/img/services/service-slider-01.jpg',
      gallery: 'assets/admin/img/gallery/gallery-big-01.jpg',
    },
    {
      img: 'assets/img/services/service-slider-02.jpg',
      gallery: 'assets/admin/img/gallery/gallery-big-02.jpg',
    },
    {
      img: 'assets/img/services/service-slider-03.jpg',
      gallery: 'assets/admin/img/gallery/gallery-big-03.jpg',
    },
    {
      img: 'assets/img/services/service-slider-04.jpg',
      gallery: 'assets/admin/img/gallery/gallery-big-02.jpg',
    },
    {
      img: 'assets/img/services/service-slider-05.jpg',
      gallery: 'assets/admin/img/gallery/gallery-big-02.jpg',
    },
    {
      img: 'assets/img/services/service-slider-06.jpg',
      gallery: 'assets/admin/img/gallery/gallery-big-02.jpg',
    },
    {
      img: 'assets/img/services/service-slider-03.jpg',
      gallery: 'assets/admin/img/gallery/gallery-big-02.jpg',
    },
    {
      img: 'assets/img/services/service-slider-02.jpg',
      gallery: 'assets/admin/img/gallery/gallery-big-02.jpg',
    },
  ];
  public header = [ //lahni tnajm tbad l header (front office)
    {
      tittle: 'Facilities',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Browse facilities',
          routes: routes.customerDashboard, // badalha 7asb l route mte3k
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Promotions',
          routes: routes.customerBooking, // badalha 7asb l route mte3k
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Buddy',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Browse buddy requests',
          routes: routes.customerDashboard, // badalha 7asb l route mte3k
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Past buddy matches',
          routes: routes.customerBooking, // badalha 7asb l route mte3k
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Workout',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Workout plans',
          routes: routes.workoutPlans,
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'View Plans',
              routes: routes.workoutPlansList,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Create Plan',
              routes: routes.createWorkoutPlan,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            }
          ],
        },
        {
          menuValue: 'Training sessions',
          routes: routes.trainingSessions,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Exercices',
          routes: routes.exercises, // badalha 7asb l route mte3k
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Create Full Workout',
          routes: routes.workoutWizard,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Health & Diet',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Diet plan',
          routes: routes.customerDashboard, // badalha 7asb l route mte3k
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Generate',
              routes: routes.serviceDetails, // badalha 7asb l route mte3k
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Log',
              routes: routes.serviceDetailstwo,// badalha 7asb l route mte3k
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Nutrition Analysis',
              routes: routes.serviceDetailstwo,// badalha 7asb l route mte3k
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            }

          ],
        },
        {
          menuValue: 'Preferences',
          routes: routes.customerBooking, // badalha 7asb l route mte3k
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Leaderboard',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'View Leaderboard',
          routes: routes.customerDashboard, // badalha 7asb l route mte3k
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Rewards',
          routes: routes.customerBooking, // badalha 7asb l route mte3k
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Challenges',
          routes: routes.customerBooking, // badalha 7asb l route mte3k
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Achievements',
          routes: routes.customerBooking, // badalha 7asb l route mte3k
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Customers',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          routes: routes.customerDashboard,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Booking',
          routes: routes.customerBooking,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Favorites',
          routes: routes.customerFavourite,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Wallet',
          routes: routes.customerWallet,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Reviews',
          routes: routes.customerReviews,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Chat',
          routes: routes.customerChat,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Settings',
          routes: routes.customerProfile,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Services',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Service Grid',
          routes: routes.serviceGrid,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Service List',
          routes: routes.serviceList,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Service Details',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Service Details 1',
              routes: routes.serviceDetails,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Service Details 2',
              routes: routes.serviceDetailstwo,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            }

          ],
        },
        {
          menuValue: 'Search',
          routes: routes.search,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Providers',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Providers List',
              routes: routes.providersList,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Providers Details',
              routes: routes.providerDetails,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Categories',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Categories 1',
              routes: routes.categories,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Categories 2',
              routes: routes.categories2,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Create Service',
          routes: routes.serviceInformation,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },

    {
      tittle: 'Providers',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          routes: routes.providerDashboard,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'My Services',
          routes: routes.providerServices,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Booking',
          routes: routes.providerBooking,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Payout',
          routes: routes.providerPayout,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Settings',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Appointment Settings',
              routes: routes.providerAppointmentSettings,
              hasSubRoute: false,
              showSubRoute: false,
              last: 'provider-appointment-settings',
              subMenus: [],
            },
            {
              menuValue: 'Account Settings',
              routes: routes.providerProfileSettings,
              hasSubRoute: false,
              showSubRoute: false,
              last: 'provider-profile-settings',
              subMenus: [],
            },
            {
              menuValue: 'Social Profiles',
              routes: routes.providerSocialProfile,
              hasSubRoute: false,
              showSubRoute: false,
              last: 'provider-social-profile',
              subMenus: [],
            },
            {
              menuValue: 'Security',
              routes: routes.providerSecuritySettings,
              hasSubRoute: false,
              showSubRoute: false,
              last: 'provider-security-settings',
              subMenus: [],
            },
            {
              menuValue: 'Plan & Billings',
              routes: routes.providerPlan,
              hasSubRoute: false,
              showSubRoute: false,
              last: 'provider-plan',
              subMenus: [],
            },
            {
              menuValue: 'Notifications',
              routes: routes.providerNotifcations,
              hasSubRoute: false,
              showSubRoute: false,
              last: 'instructor-grid',
              subMenus: [],
            },
            {
              menuValue: 'Connected Apps',
              routes: routes.providerConnectedApps,
              hasSubRoute: false,
              showSubRoute: false,
              last: 'provider-notifications',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Availability',
          routes: routes.providerAvailability,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Holidays & Leave',
          routes: routes.providerHoliday,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Coupons',
          routes: routes.providerCoupons,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Offers',
          routes: routes.providerOffers,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Reviews',
          routes: routes.providerReviews,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Earnings',
          routes: routes.providerEarnings,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Chat',
          routes: routes.providerChat,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Pages',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'About',
          routes: routes.aboutUs,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Blog',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Blog Grid',
              routes: routes.blogGrid,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Blog List',
              routes: routes.blogList,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Blog Details',
              routes: routes.blogDetails,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },

          ],
        },
        {
          menuValue: 'Contact Us',
          routes: routes.contactUs,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'How It Works',
          routes: routes.howItWorks,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Error Page',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: '404 Error',
              routes: routes.error404,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: '500 Error',
              routes: routes.error500,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Authentication',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Login',
              routes: routes.login,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Customer Signup',
              routes: routes.Register,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Provider Signup',
              routes: routes.providerSignup,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },

            {
              menuValue: 'Reset Password',
              routes: routes.resetPassword,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },

            {
              menuValue: 'Phone OTP',
              routes: routes.phoneOtp,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Email OTP',
              routes: routes.emailOtp,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Free Trial',
              routes: routes.freeTrial,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Booking',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Booking 1',
              routes: routes.booking,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Booking 2',
              routes: routes.booking2,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Booking Checkout',
              routes: routes.bookingPayment,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Booking Success',
              routes: routes.bookingSuccess,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Booking Details',
              routes: routes.bookingDetails,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Categories',
          routes: routes.categories,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Pricing Plan',
          routes: routes.pricing,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'FAQ',
          routes: routes.faq,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Maintenance',
          routes: routes.maintenance,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Coming Soon',
          routes: routes.comingSoon,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Privacy Policy',
          routes: routes.privacyPolicy,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Terms & Conditions',
          routes: routes.termsCondition,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Installer',
          routes: routes.installer,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },
    // {
    //   tittle: 'Blog',
    //   showAsTab: false,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Blog Grid',
    //       routes: routes.blogGrid,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Blog List',
    //       routes: routes.blogList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       subMenus: [],
    //     },
    //     {
    //       menuValue: 'Blog Details',
    //       routes: routes.blogDetails,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       subMenus: [],
    //     },
    //   ],
    // },
  ];
  public providersSidebar = [
    {
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.providerDashboard,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-layout-grid',
          subMenus: [],
        },
        {
          menuValue: 'My Services',
          route: routes.providerServices,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-briefcase',
          subMenus: [],
        },
        {
          menuValue: 'Bookings',
          route: routes.providerBooking,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-calendar-month',
          subMenus: [],
        },
        {
          menuValue: 'Staffs',
          route: routes.staffList,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-users',
          subMenus: [],
        },
        {
          menuValue: 'Customers',
          route: routes.customerList,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-user',
          subMenus: [],
        },
        {
          menuValue: 'Payout',
          route: routes.providerPayout,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-wallet',
          subMenus: [],
        },
        // {
        //   menuValue: 'Holidays & Leave',
        //   route: routes.providerHoliday,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'icon-calendar',
        //   subMenus: [],
        // },
        // {
        //   menuValue: 'Availability',
        //   route: routes.providerAvailability,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'icon-clock',
        //   subMenus: [],
        // },
        {
          menuValue: 'Holidays & Leave',
          route: routes.providerHoliday,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-calendar',
          subMenus: [],
        },
        {
          menuValue: 'Coupons',
          route: routes.providerCoupons,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-ticket',
          subMenus: [],
        },
        // {
        //   menuValue: 'Subscription',
        //   route: routes.providerSubscription,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'icon-dollar-sign',
        //   subMenus: [],
        // },
        {
          menuValue: 'Offers',
          route: routes.providerOffers,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-square-percentage',
          subMenus: [],
        },
        {
          menuValue: 'Reviews',
          route: routes.providerReviews,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-star',
          subMenus: [],
        },
        {
          menuValue: 'Enquiries',
          route: routes.providerEnquiry,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-mail',
          subMenus: [],
        },
        {
          menuValue: 'Earnings',
          route: routes.providerEarnings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-cash-banknote',
          subMenus: [],
        },
        {
          menuValue: 'Chat',
          route: routes.providerChat,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ti-messages',
          subMenus: [],
        },
      ],
    },
  ];
  public adminSidebar = [ //lahni tnajem tbal side bar mta3 l admin (back office)
    {
      tittle: 'Home',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.dashboard,
          icon: 'icon-grid',
        },
      ],
    },
    {
      tittle: 'Services',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Facilities',
          hasSubRoute: true,
          showSubRoute: false,
          route: routes.service, //badl 7asb l route mte3k
          icon: 'icon-briefcase',
          subMenus: [
            {
              menuValue: 'Add Service',
              route: routes. addServices, //badl 7asb l route mte3k
            },
            {
              menuValue: 'Services',
              route: routes.service, //badl 7asb l route mte3k
            },
            {
              menuValue: 'Service Settings',
              route: routes.serviceSettings, //badl 7asb l route mte3k
            },
          ],
        },
        {
          menuValue: 'Buddy',
          hasSubRoute: true,
          showSubRoute: false,
          route: routes.service, //badl 7asb l route mte3k
          icon: 'icon-briefcase',
          subMenus: [
            {
              menuValue: 'Add Service',
              route: routes. addServices, //badl 7asb l route mte3k
            },
            {
              menuValue: 'Services',
              route: routes.service, //badl 7asb l route mte3k
            },
            {
              menuValue: 'Service Settings',
              route: routes.serviceSettings, //badl 7asb l route mte3k
            },
          ],
        },
        {
          menuValue: 'Workout',
          hasSubRoute: true,
          showSubRoute: false,
          route: routes.service, //badl 7asb l route mte3k
          icon: 'icon-briefcase',
          subMenus: [
            {
              menuValue: 'Add Service',
              route: routes. addServices, //badl 7asb l route mte3k
            },
            {
              menuValue: 'Services',
              route: routes.service, //badl 7asb l route mte3k
            },
            {
              menuValue: 'Service Settings',
              route: routes.serviceSettings, //badl 7asb l route mte3k
            },
          ],
        },
        {
          menuValue: 'Healt & diet',
          hasSubRoute: true,
          showSubRoute: false,
          route: routes.service, //badl 7asb l route mte3k
          icon: 'icon-briefcase',
          subMenus: [
            {
              menuValue: 'Add Service',
              route: routes. addServices, //badl 7asb l route mte3k
            },
            {
              menuValue: 'Services',
              route: routes.service, //badl 7asb l route mte3k
            },
            {
              menuValue: 'Service Settings',
              route: routes.serviceSettings, //badl 7asb l route mte3k
            },
          ],
        },
        {
          menuValue: 'Leaderboard',
          hasSubRoute: true,
          showSubRoute: false,
          route: routes.service, //badl 7asb l route mte3k
          icon: 'icon-briefcase',
          subMenus: [
            {
              menuValue: 'Add Service',
              route: routes. addServices, //badl 7asb l route mte3k
            },
            {
              menuValue: 'Services',
              route: routes.service, //badl 7asb l route mte3k
            },
            {
              menuValue: 'Service Settings',
              route: routes.serviceSettings, //badl 7asb l route mte3k
            },
          ],
        },
        {
          menuValue: 'User',
          hasSubRoute: true,
          showSubRoute: false,
          route: routes.service, //badl 7asb l route mte3k
          icon: 'icon-briefcase',
          subMenus: [
            {
              menuValue: 'Add Service',
              route: routes. addServices, //badl 7asb l route mte3k
            },
            {
              menuValue: 'Services',
              route: routes.service, //badl 7asb l route mte3k
            },
            {
              menuValue: 'Service Settings',
              route: routes.serviceSettings, //badl 7asb l route mte3k
            },
          ],
        },
        {
          menuValue: 'Services',
          hasSubRoute: true,
          showSubRoute: false,
          route: routes.service,
          icon: 'icon-briefcase',
          subMenus: [
            {
              menuValue: 'Add Service',
              route: routes. addServices,
            },
            {
              menuValue: 'Services',
              route: routes.service,
            },
            {
              menuValue: 'Service Settings',
              route: routes.serviceSettings,
            },
          ],
        },
        {
          menuValue: 'Categories',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.category,
          icon: 'icon-file-text',
        },
        {
          menuValue: 'Sub Categories',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.subCategories,
          icon: 'icon-clipboard',
        },
        {
          menuValue: 'Review',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'icon-star',
          subMenus: [
            {
              menuValue: 'Review Type',
              route: routes.reviewType,
            },
            {
              menuValue: 'Review',
              route: routes.review,
            },
          ],
        },
      ],
    },
    {
      tittle: 'Booking',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Bookings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.adminBooking,
          icon: 'icon-grid',
        },
      ],
    },
    {
      tittle: 'FINANCE & ACCOUNTS',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Bank Transfer',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.banktransferlist,
          icon: 'icon-file',
        },
        {
          menuValue: 'Wallet',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.wallet,
          icon: 'icon-credit-card',
        },
        {
          menuValue: 'Refund Request',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.refundRequest,
          icon: 'icon-git-pull-request',
        },
        {
          menuValue: 'Cash on Delivery',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.cashOnDelivery,
          icon: 'icon-dollar-sign',
        },
        {
          menuValue: 'Payouts',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'icon-credit-card',
          subMenus: [
            {
              menuValue: 'Payout Requests',
              route: routes.payoutRequest,
            },
            {
              menuValue: 'Payout Settings',
              route: routes.payoutSettings,
            },
          ],
        },
        {
          menuValue: 'Sales Transactions',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.salesTransactions,
          icon: 'icon-bar-chart',
        }

      ],
    },
    {
      tittle: 'Others',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Chat',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.chat,
          icon: 'icon-message-square',
        },
      ],
    },
    {
      tittle: 'Content',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Pages',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'icon-file',
          subMenus: [
            {
              menuValue: 'Add Page',
              route: routes.addPage,
            },
            {
              menuValue: 'Pages',
              route: routes.pageList,
            },
            {
              menuValue: 'Pages List',
              route: routes.pagesList,
            },
          ],
        },
        {
          menuValue: 'Blog',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'icon-file-text',
          subMenus: [
            {
              menuValue: 'All Blog',
              route: routes.allBlog,
            },
            {
              menuValue: 'Add Blog',
              route: routes.addBlog,
            },
            {
              menuValue: 'Categories',
              route: routes.blogsCategories,
            },
            {
              menuValue: 'Blog Comments',
              route: routes.blogsComments,
            },
          ],
        },
        {
          menuValue: 'Location',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'icon-map-pin',
          subMenus: [
            {
              menuValue: 'Countries',
              route: routes.countries,
            },
            {
              menuValue: 'States',
              route: routes.states,
            },
            {
              menuValue: 'Cities',
              route: routes.cities,
            },
          ],
        },
        {
          menuValue: 'Testimonials',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.testimonials,
          icon: 'icon-star',
        },
        {
          menuValue: 'FAQ',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.faqAdmin,
          icon: 'icon-help-circle',
        },
      ],
    },
    {
      tittle: 'MEMBERSHIP',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Membership',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.membership,
          icon: 'icon-user',
        },
        {
          menuValue: 'Membership Addons',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.membershipAddons,
          icon: 'icon-user-plus',
        },
      ],
    },
    {
      tittle: 'REPORTS',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Admin Earnings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.adminEarnings,
          icon: 'icon-user',
        },
        {
          menuValue: 'Provider Earnings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.providerEarningsAdmin,
          icon: 'icon-dollar-sign',
        },
        {
          menuValue: 'Provider Sales',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.providersales,
          icon: 'icon-dollar-sign',
        },

        {
          menuValue: 'Provider Wallet',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.providerWallets,
          icon: 'icon-credit-card',
        },
        {
          menuValue: 'Customer Wallet',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.customerWallets,
          icon: 'icon-user',
        },
        {
          menuValue: 'Membership Transaction',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.membershipTransaction,
          icon: 'icon-tv',
        },
        {
          menuValue: 'Refund Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.refundReport,
          icon: 'icon-file-text',
        },
        {
          menuValue: 'Register Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.registerReport,
          icon: 'icon-git-pull-request',
        },
        {
          menuValue: 'Sales Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.salesReport,
          icon: 'icon-bar-chart',
        },
      ],
    },
    {
      tittle: 'USER MANAGEMENT',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Users',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'icon-user',
          subMenus: [
            {
              menuValue: 'Users',
              route: routes.userList,
            },
            {
              menuValue: 'Customers',
              route: routes.userCustomers,
            },
            {
              menuValue: 'Providers',
              route: routes.userProviders,
            },

          ],
        },
        {
          menuValue: 'Roles & Permissions',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.rolesPermissions,
          icon: 'icon-file',
        },
        {
          menuValue: 'Delete Account Requests',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.deleteAccountRequests,
          icon: 'icon-trash-2',
        },
        {
          menuValue: 'Verification Requests',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.verificationRequest,
          icon: 'icon-dollar-sign',
        },
      ],
    },
    {
      tittle: 'MARKETING',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Coupons',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.marketingCoupons,
          icon: 'icon-bookmark',
        },
        {
          menuValue: 'Service Offers',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.marketingService,
          icon: 'icon-briefcase',
        },
        {
          menuValue: 'Featured Services',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.marketingFeatured,
          icon: 'icon-briefcase',
        },
        {
          menuValue: 'Email Newsletter',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.marketingNewsletter,
          icon: 'icon-mail',
        },
      ],
    },
    {
      tittle: 'MANAGEMENT',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Cache System',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.cachesystem,
          icon: 'icon-user',
        },
        {
          menuValue: 'Email Templates',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.emailTemplates,
          icon: 'icon-mail',
        },
        {
          menuValue: 'Sms Templates',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.smsTemplates,
          icon: 'icon-message-square',
        }

      ],
    },
    {
      tittle: 'SUPPORT',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Contact Messages',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.contactMessages,
          icon: 'icon-message-square',
        },
        {
          menuValue: 'Abuse Reports',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.abuseReports,
          icon: 'icon-file-text',
        },
        {
          menuValue: 'Announcements',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.announcements,
          icon: 'icon-volume-2',
        },
      ],
    },
    {
      tittle: 'SETTINGS',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Settings',
          hasSubRoute: false,
          showSubRoute: false,
          base:'settings',
          route: routes.localization,
          icon: 'icon-settings',
        },
        {
          menuValue: 'Logout',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.signin,
          icon: 'icon-log-out',
        },
      ],
    },
  ];
  public blogGrid = [
    {
      work: 'Computer',
      date: '28 Sep 2022',
      img1: 'assets/img/services/service-19.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      role: 'Admin',
      para1: 'How to Fix a Computer in Just 3 Steps?',
      para2:
        'Sed ut perspiciatis omnis natus error voluptatem architecto beatae vitae dicta sunt explicabo.',
    },
    {
      work: 'Construction',
      date: '28 Sep 2022',
      img1: 'assets/img/services/service-10.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      role: 'Admin',
      para1: 'Lorem ipsum dolor sit amet, consectetur sed do',
      para2:
        'Sed ut perspiciatis omnis natus error voluptatem architecto beatae vitae dicta sunt explicabo.',
    },
    {
      work: 'Car Wash',
      date: '28 Sep 2022',
      img1: 'assets/img/services/service-08.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      role: 'Admin',
      para1: 'Lorem ipsum dolor sit amet, consectetur sed do',
      para2:
        'Sed ut perspiciatis omnis natus error voluptatem architecto beatae vitae dicta sunt explicabo.',
    },
    {
      work: 'Electrical',
      date: '28 Sep 2022',
      img1: 'assets/img/services/service-19.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      role: 'Admin',
      para1: 'Lorem ipsum dolor sit amet, consectetur sed do',
      para2:
        'Sed ut perspiciatis omnis natus error voluptatem architecto beatae vitae dicta sunt explicabo.',
    },
    {
      work: 'Cleaning',
      date: '28 Sep 2022',
      img1: 'assets/img/services/service-09.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      role: 'Admin',
      para1: 'Lorem ipsum dolor sit amet, consectetur sed do',
      para2:
        'Sed ut perspiciatis omnis natus error voluptatem architecto beatae vitae dicta sunt explicabo.',
    },
    {
      work: 'Interior',
      date: '28 Sep 2022',
      img1: 'assets/img/services/service-07.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      role: 'Admin',
      para1: 'Lorem ipsum dolor sit amet, consectetur sed do',
      para2:
        'Sed ut perspiciatis omnis natus error voluptatem architecto beatae vitae dicta sunt explicabo.',
    },
  ];
  public serviceGrid = [
    {
      work: 'Car Wash',
      service: 'Car Repair Services',
      country: 'Maryland City, USA',
      points: '4.9',
      price1: '$50.00',
      img1: 'assets/img/services/service-04.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      like: false,
    },
    {
      work: 'Construction',
      service: 'Toughened Glass Fitting Services',
      country: 'New Jersey, USA',
      points: '4.9',
      price1: '$25.00',
      img1: 'assets/img/services/service-02.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      like: true,
    },
    {
      work: 'Computer',
      service: 'Computer & Server AMC Service',
      country: 'California, USA',
      points: '4.9',
      price1: '$20.00',
      price2: '$35.00',
      img1: 'assets/img/services/service-06.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      like: false,
    },
    {
      work: 'Interior',
      service: 'Interior Designing',
      country: 'Maryland, USA',
      points: '4.9',
      price1: '$5.00',
      price2: '$25.00',
      img1: 'assets/img/services/service-07.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      like: true,
    },
    {
      work: 'Car Wash',
      service: 'Steam Car Wash',
      country: 'Montana, USA',
      points: '4.9',
      price1: '$14.00',
      img1: 'assets/img/services/service-08.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      like: false,
    },
    {
      work: 'Electrical',
      service: 'Electric Panel Repairing Service',
      country: 'Texas, USA',
      points: '4.9',
      price1: '$45',
      img1: 'assets/img/services/service-01.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      like: false,
    },
    {
      work: 'Cleaning',
      service: 'House Cleaning Services',
      country: 'Georgia',
      points: '4.9',
      price1: '$10.00',
      img1: 'assets/img/services/service-09.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      like: false,
    },
    {
      work: 'Construction',
      service: 'Commercial Painting Services',
      country: 'Alabama, USA',
      points: '4.9',
      price1: '$10.00',
      price2: '$15.00',
      img1: 'assets/img/services/service-05.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      like: false,
    },
    {
      work: 'Construction',
      service: 'Building Construction Services',
      country: 'Montana, USA',
      points: '4.9',
      price1: '$75',
      img1: 'assets/img/services/service-10.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      like: false,
    },
    {
      work: 'Plumbing',
      service: 'Plumbing Services',
      country: 'Virginia, USA',
      points: '4.9',
      price1: '$15.00',
      price2: '$45.00',
      img1: 'assets/img/services/service-11.jpg',
      img2: 'assets/img/profiles/avatar-07.jpg',
      like: false,
    },
    {
      work: 'Carpentry',
      service: 'Wooden Carpentry Work',
      country: 'Alabama, USA',
      points: '4.9',
      price1: '$32.00',
      price2: '$35.00',
      img1: 'assets/img/services/service-03.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      like: false,
    },
    {
      work: 'Construction',
      service: 'Painting Services',
      country: 'Virginia, USA',
      points: '4.9',
      price1: '$150.00',
      img1: 'assets/img/services/service-13.jpg',
      img2: 'assets/img/profiles/avatar-07.jpg',
      like: false,
    },
  ];
  public serviceList = [
    {
      work: 'Car Wash',
      service: 'Car Repair Services',
      country: 'Maryland City, MD, USA',
      points: '4.9',
      price1: '$25.00',
      price2: '$35.00',
      img1: 'assets/img/services/service-04.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      like: false
    },
    {
      work: 'Construction',
      service: 'Toughened Glass Fitting Services',
      country: 'New Jersey, USA',
      points: '4.9',
      price1: '$30.00',
      price2: '$35.00',
      img1: 'assets/img/services/service-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      like: false
    },
    {
      work: 'Computer',
      service: 'Computer & Server AMC Service',
      country: 'California, USA',
      points: '4.9',
      price1: '$30.00',
      price2: '$35.00',
      img1: 'assets/img/services/service-06.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      like: false
    },
    {
      work: 'Interior',
      service: 'Interior Designing',
      country: 'Maryland, USA',
      points: '4.9',
      price1: '$15.00',
      price2: '$25.00',
      img1: 'assets/img/services/service-07.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      like: false
    },
    {
      work: 'Cleaning',
      service: 'House Cleaning Services',
      country: 'Georgia',
      points: '4.9',
      price1: '$55.00',
      price2: '$60.00',
      img1: 'assets/img/services/service-09.jpg',
      img2: 'assets/img/profiles/avatar-09.jpg',
      like: false
    },
    {
      work: 'Construction',
      service: 'Building Construction Services',
      country: 'Montana, USA',
      points: '4.9',
      price1: '$45.00',
      price2: '$50.00',
      img1: 'assets/img/services/service-10.jpg',
      img2: 'assets/img/profiles/avatar-09.jpg',
      like: false
    },
  ];
  public search = [
    {
      work: 'Car Wash',
      service: 'Car Repair Services',
      country: 'Maryland City, USA',
      points: '4.9',
      price1: '$50.00',
      img1: 'assets/img/services/service-04.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      like: false,
    },
    {
      work: 'Construction',
      service: 'Toughened Glass Fitting Services',
      country: 'New Jersey, USA',
      points: '4.9',
      price1: '$25.00',
      img1: 'assets/img/services/service-02.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      like: true,
    },
    {
      work: 'Computer',
      service: 'Computer & Server AMC Service',
      country: 'California, USA',
      points: '4.9',
      price1: '$20.00',
      price2: '$35.00',
      img1: 'assets/img/services/service-06.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      like: false,
    },
    {
      work: 'Interior',
      service: 'Interior Designing',
      country: 'Maryland, USA',
      points: '4.9',
      price1: '$5.00',
      price2: '$25.00',
      img1: 'assets/img/services/service-07.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      like: true,
    },
    {
      work: 'Car Wash',
      service: 'Steam Car Wash',
      country: 'Montana, USA',
      points: '4.9',
      price1: '$14.00',
      img1: 'assets/img/services/service-08.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      like: false,
    },
    {
      work: 'Electrical',
      service: 'Electric Panel Repairing Service',
      country: 'Texas, USA',
      points: '4.9',
      price1: '$45',
      img1: 'assets/img/services/service-01.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      like: false,
    },
    {
      work: 'Cleaning',
      service: 'House Cleaning Services',
      country: 'Georgia',
      points: '4.9',
      price1: '$10.00',
      img1: 'assets/img/services/service-09.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      like: false,
    },
    {
      work: 'Construction',
      service: 'Commercial Painting Services',
      country: 'Alabama, USA',
      points: '4.9',
      price1: '$10.00',
      price2: '$15.00',
      img1: 'assets/img/services/service-05.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      like: false,
    },
    {
      work: 'Construction',
      service: 'Building Construction Services',
      country: 'Montana, USA',
      points: '4.9',
      price1: '$75',
      img1: 'assets/img/services/service-10.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      like: false,
    },
    {
      work: 'Plumbing',
      service: 'Plumbing Services',
      country: 'Virginia, USA',
      points: '4.9',
      price1: '$15.00',
      price2: '$45.00',
      img1: 'assets/img/services/service-11.jpg',
      img2: 'assets/img/profiles/avatar-07.jpg',
      like: false,
    },
    {
      work: 'Carpentry',
      service: 'Wooden Carpentry Work',
      country: 'Alabama, USA',
      points: '4.9',
      price1: '$32.00',
      price2: '$35.00',
      img1: 'assets/img/services/service-03.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      like: false,
    },
    {
      work: 'Construction',
      service: 'Painting Services',
      country: 'Virginia, USA',
      points: '4.9',
      price1: '$150.00',
      img1: 'assets/img/services/service-13.jpg',
      img2: 'assets/img/profiles/avatar-07.jpg',
      like: false,
    },
  ];
  public featuredServices = [
    {
      img1: 'assets/img/providers/provider-18.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      country: 'New Jersey, USA',
      points: '4.9',
      newPrice: '$25.00',
      oldPrice: '$35.00',
      title: 'Electric Panel Repairing Service',
      work: 'Cleaning',
      like: false,
    },
    {
      img1: 'assets/img/providers/provider-14.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      country: 'Montana, USA',
      points: '4.9',
      newPrice: '$45.00',
      title: 'Toughened Glass Fitting Services',
      work: 'Construction',
      like: false,
    },
    {
      img1: 'assets/img/providers/provider-24.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      country: 'Montana, USA',
      points: '4.9',
      newPrice: '$45.00',
      title: 'Wooden Carpentry Work',
      work: 'Carpentry',
      like: false,
    },
    {
      img1: 'assets/img/providers/provider-23.jpgg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      country: 'Georgia, USA',
      points: '4.9',
      newPrice: '$45.00',
      title: 'Plumbing Services',
      work: 'Construction',
      like: false,
    },
  ];
  public popularServices = [
    {
      img1: 'assets/img/providers/provider-13.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      country: 'Maryland City, MD, USA',
      points: '4.9',
      newPrice: '$20.00',
      oldPrice: '$35.00',
      title: 'Car Repair Services',
      work: 'Car Wash',
      like: false,
    },
    {
      img1: 'assets/img/providers/provider-20.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      country: 'Alabama, USA',
      points: '4.9',
      newPrice: '$500.00',
      title: 'Commercial Painting Services',
      work: 'Cleaning',
      like: false,
    },
    {
      img1: 'assets/img/providers/provider-15.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      country: 'California, USA',
      points: '4.9',
      newPrice: '$80.00',
      oldPrice: '$96.00',
      title: 'Computer & Server AMC Service',
      work: 'Computer',
      like: false,
    },

    {
      img1: 'assets/img/providers/provider-19.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      country: 'Georgia, USA',
      points: '4.9',
      newPrice: '$500.00',
      title: 'Steam Car Wash',
      work: 'Cleaning',
      like: false,
    },
  ];
  public clientFeedbacks = [
    {
      para: 'Versatile and user-friendly platform for freelancers and businesses alike',
      name: 'Sophie Moore',
      role: 'Director',
      img: 'assets/img/profiles/avatar-01.jpg',
    },
    {
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      name: 'Mike Hussy',
      role: 'Lead',
      img: 'assets/img/profiles/avatar-02.jpg',
    },
    {
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      name: 'John Doe',
      role: 'CEO',
      img: 'assets/img/profiles/avatar-03.jpg',
    },
  ];
  public partners = [
    {
      img: 'assets/img/partner/partner1.svg',
    },
    {
      img: 'assets/img/partner/partner2.svg',
    },
    {
      img: 'assets/img/partner/partner3.svg',
    },
    {
      img: 'assets/img/partner/partner4.svg',
    },
    {
      img: 'assets/img/partner/partner5.svg',
    },
    {
      img: 'assets/img/partner/partner6.svg',
    },
  ];
  public largestMarketplace = [
    {
      img: 'assets/img/banner.jpg',
    },
    {
      img: 'assets/img/banner-02.jpg',
    },
    {
      img: 'assets/img/banner-03.jpg',
    },
  ];
  public featuredServices2 = [
    {
      img1: 'assets/img/services/service-01.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      country: 'New Jersey, USA',
      points: '(10)',
      newPrice: '$25.00',
      oldPrice: '$35.00',
      title: 'Electric Panel Repairing Service',
      work: 'Cleaning',
      number: '+1 123 456 7890',
      name: 'Jeny Doe',
      like: false,
    },
    {
      img1: 'assets/img/services/service-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      country: 'Montana, USA',
      points: '(10)',
      oldPrice: '$45.00',
      title: 'Toughened Glass Fitting Services',
      work: 'Construction',
      number: '+1 123 456 7890',
      name: 'Nick John',
      like: false,
    },
    {
      img1: 'assets/img/services/service-03.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      country: 'Montana, USA',
      points: '(10)',
      oldPrice: '$45.00',
      title: 'Wooden Carpentry Work',
      work: 'Carpentry',
      number: '+1 123 456 7890',
      name: 'James',
      like: false,
    },
    {
      img1: 'assets/img/services/service-11.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      country: 'Georgia, USA',
      points: '(10)',
      oldPrice: '$45.00',
      title: 'Plumbing Services',
      work: 'Construction',
      number: '+1 123 456 7890',
      name: 'John Doe',
      like: false,
    },
  ];
  public popularServices2 = [
    {
      img1: 'assets/img/services/service-04.jpg',
      img2: 'assets/img/profiles/avatar-01.jpg',
      country: 'New Jersey, USA',
      points: '(10)',
      newPrice: '$25.00',
      oldPrice: '$35.00',
      title: 'Electric Panel Repairing Service',
      work: 'Cleaning',
      number: '870-893-9351',
      name: 'Jeny Doe',
      like: false,
    },
    {
      img1: 'assets/img/services/service-05.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      country: 'Montana, USA',
      points: '(10)',
      newPrice: '$45.00',
      title: 'Toughened Glass Fitting Services',
      work: 'Construction',
      number: '248-905-6719',
      name: 'Nick John',
      like: false,
    },
    {
      img1: 'assets/img/services/service-06.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      country: 'Montana, USA',
      points: '(10)',
      newPrice: '$45.00',
      title: 'Wooden Carpentry Work',
      work: 'Carpentry',
      number: '908-734-7033',
      name: 'James',
      like: false,
    },
    {
      img1: 'assets/img/services/service-08.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      country: 'Georgia, USA',
      points: '(10)',
      newPrice: '$45.00',
      title: 'Plumbing Services',
      work: 'Construction',
      number: '908-734-7033',
      name: 'John Doe',
      like: false,
    },
  ];
  public partners2 = [
    {
      img: 'assets/img/partner/partner1.svg',
    },
    {
      img: 'assets/img/partner/partner2.svg',
    },
    {
      img: 'assets/img/partner/partner3.svg',
    },
    {
      img: 'assets/img/partner/partner4.svg',
    },
    {
      img: 'assets/img/partner/partner5.svg',
    },
    {
      img: 'assets/img/partner/partner6.svg',
    },
  ];
  public testimonials = [
    {
      heading: '“The best service”',
      para: 'Versatile and user-friendly platform for freelancers and businesses alike, clean and intuitive, making it easy to post jobs. browse profiles, and manage projects.The range of services is impressive,',
      name: 'Sophie Moore',
      role: 'Sophie Moore',
      img: 'assets/img/profiles/avatar-01.jpg',
    },
    {
      heading: '“Awesome Works”',
      para: 'Excels in providing a quick and easy way to find help for everyday tasks and home repairs The platform is straightforward, allowing users to post tasks and receive  from local ',
      name: 'Mike Hussy',
      role: 'Tech Lead',
      img: 'assets/img/profiles/avatar-02.jpg',
    },
    {
      heading: '“Brilliant Work”',
      para: 'Offers a comprehensive marketplace for finding local service professionals across a wide range of categories, including home improvement, events, and personal services. The platform is user-friendly,  ',
      name: 'Tom Beker',
      role: 'CEO',
      img: 'assets/img/profiles/avatar-03.jpg',
    },
    {
      heading: 'Good Maintanence',
      para: 'Offers a comprehensive marketplace for finding local service professionals across a wide range of categories, including home improvement, events, and personal services. The platform is user-friendly,  ',
      name: 'Nick John',
      role: 'Director',
      img: 'assets/img/profiles/avatar-04.jpg',
    },
  ];
  public recentBooking = [
    {
      img1: 'assets/img/services/service-08.jpg',
      services: 'Computer Services',
      booking: 'Booking Date',
      dateTime: '27 Sep 2022, 17:00-18:00',
      amount: 'Amount',
      price: '$100.00',
      text: 'COD',
      location: 'Location',
      place: 'Newyork, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-02.jpg',
      name: 'John Doe',
      mail: 'info@johndoe.com',
      number: '+1 888 888 8888',
      btn1: 'Cancelled',
      btn2: 'Reschedule',
      like: false,
    },
    {
      img1: 'assets/img/services/service-18.jpg',
      services: 'Car Repair Services',
      booking: 'Booking Date',
      dateTime: '23 Sep 2022, 10:00-11:00',
      amount: 'Amount',
      price: '$50.00',
      text: 'COD',
      location: 'Location',
      place: 'Alabama, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-03.jpg',
      name: 'John Smith',
      mail: 'info@johndoe.com',
      number: '+1 607-276-5393',
      btn1: 'Completed',
      btn2: 'Reschedule',
      btn3: 'Rebook',
      review: 'Add Review',
      details: 'View Details',
      like: false,
    },
    {
      img1: 'assets/img/services/service-07.jpg',
      services: 'Interior Designing',
      booking: 'Booking Date',
      dateTime: '27 Sep 2022, 17:00-18:00',
      amount: 'Amount',
      price: '$50.00',
      text: 'COD',
      location: 'Location',
      place: 'Washington, DC, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-06.jpg',
      name: 'Quentin',
      mail: 'info@johndoe.com',
      number: '+1 601-810-9218',
      btn1: 'Inprogress',
      btn2: 'Reschedule',
      button1: 'Chat',
      button2: 'Cancel',
      like: false,
    },
    {
      img1: 'assets/img/services/service-13.jpg',
      services: 'House Cleaning Services',
      booking: 'Booking Date',
      dateTime: '27 Sep 2022, 17:00-18:00',
      amount: 'Amount',
      price: '$375.00 ',
      text: 'COD',
      location: 'Location',
      place: 'Virginia, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-02.jpg',
      name: 'Johnson',
      mail: 'info@johndoe.com',
      number: '+1 312-328-3970',
      btn1: 'Pending',
      btn2: 'Reschedule',
      like: false,
      button1: 'Chat',
      button2: 'Cancel',
    },
  ];
  public recentBookings = [
    {
      img1: 'assets/img/services/service-08.jpg',
      services: 'Computer Services',
      booking: 'Booking Date',
      dateTime: '27 Sep 2022, 17:00-18:00',
      amount: 'Amount',
      price: '$100.00',
      text: 'COD',
      location: 'Location',
      place: 'Newyork, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-02.jpg',
      name: 'John Doe',
      mail: 'info@johndoe.com',
      number: '+1 888 888 8888',
      btn1: 'Cancelled',
      btn2: 'Reschedule',
      like: false,
    },
    {
      img1: 'assets/img/services/service-18.jpg',
      services: 'Car Repair Services',
      booking: 'Booking Date',
      dateTime: '23 Sep 2022, 10:00-11:00',
      amount: 'Amount',
      price: '$50.00',
      text: 'COD',
      location: 'Location',
      place: 'Alabama, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-03.jpg',
      name: 'John Smith',
      mail: 'info@johndoe.com',
      number: '+1 607-276-5393',
      btn1: 'Completed',
      btn2: 'Reschedule',
      btn3: 'Rebook',
      review: 'Add Review',
      details: 'View Details',
      like: false,
    },
    {
      img1: 'assets/img/services/service-07.jpg',
      services: 'Interior Designing',
      booking: 'Booking Date',
      dateTime: '27 Sep 2022, 17:00-18:00',
      amount: 'Amount',
      price: '$50.00',
      text: 'COD',
      location: 'Location',
      place: 'Washington, DC, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-06.jpg',
      name: 'Quentin',
      mail: 'info@johndoe.com',
      number: '+1 601-810-9218',
      btn1: 'Inprogress',
      btn2: 'Reschedule',
      button1: 'Chat',
      button2: 'Cancel',
      like: false,
    },
    {
      img1: 'assets/img/services/service-13.jpg',
      services: 'House Cleaning Services',
      booking: 'Booking Date',
      dateTime: '27 Sep 2022, 17:00-18:00',
      amount: 'Amount',
      price: '$375.00 ',
      text: 'COD',
      location: 'Location',
      place: 'Virginia, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-02.jpg',
      name: 'Johnson',
      mail: 'info@johndoe.com',
      number: '+1 312-328-3970',
      btn1: 'Pending',
      btn2: 'Reschedule',
      like: false,
      button1: 'Chat',
      button2: 'Cancel',
    },
    {
      img1: 'assets/img/services/service-18.jpg',
      services: 'Electric Panel Repairing Service',
      booking: 'Booking Date',
      dateTime: '23 Sep 2022, 10:00-11:00',
      amount: 'Amount',
      price: '$50.00',
      text: 'COD',
      location: 'Location',
      place: 'Newyork, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-02.jpg',
      name: 'John Smith',
      mail: 'info@johndoe.com',
      number: '+1 607-276-5393',
      btn1: 'Completed',
      btn2: 'Reschedule',
      btn3: 'Rebook',
      review: 'Add Review',
      details: 'View Details',
      like: false,
    },
  ];
  public customerFavourite = [
    {
      img1: 'assets/img/providers/provider-13.jpg',
      img2: 'assets/img/user/user-01.jpg',
      country: 'New Jersey, USA',
      points: '4.9',
      newPrice: '$25.00',
      oldPrice: '$35.00',
      name:'John Smith',
      title: 'Car Repair Services',
      work: 'Car Wash',
      like: true,
    },
    {
      img1: 'assets/img/providers/provider-14.jpg',
      img2: 'assets/img/user/user-02.jpg',
      country: 'Chicago, USA',
      points: '4.9',
      newPrice: '$45.00',
      title: 'Toughened Glass Fitting Services',
      work: 'Construction',
      like: true,
      name:'Charles',
    },
    {
      img1: 'assets/img/providers/provider-15.jpg',
      img2: 'assets/img/user/user-03.jpg',
      country: 'Los Angeles, USA',
      points: '4.9',
      newPrice: '$35.00',
      title: 'Computer & Server AMC Service',
      work: 'Carpentry',
      like: true,
      name:'Wilfredo',
    },
    {
      img1: 'assets/img/providers/provider-16.jpg',
      img2: 'assets/img/user/user-04.jpg',
      country: 'Detroit, USA',
      points: '4.9',
      newPrice: '$25.00',
      title: 'Interior Designing',
      work: 'Interior',
      like: true,
      name:'John Doe',
    },
    {
      img1: 'assets/img/providers/provider-17.jpg',
      img2: 'assets/img/user/user-05.jpg',
      country: 'San Jose, USA',
      points: '4.9',
      newPrice: '$25.00',
      oldPrice: '$35.00',
      title: 'Steam Car Wash',
      work: 'Car Wash',
      like: true,
      name:'John',
    },
    {
      img1: 'assets/img/providers/provider-18.jpg',
      img2: 'assets/img/user/user-06.jpg',
      country: 'San Francisco, USA',
      points: '4.9',
      newPrice: '$45.00',
      oldPrice: '$35.00',
      title: 'Electric Panel Repairing Service',
      work: 'Electrical',
      like: true,
      name:'Blackwel',
    },
    {
      img1: 'assets/img/providers/provider-19.jpg',
      img2: 'assets/img/user/user-07.jpg',
      country: 'Denver, USA',
      points: '4.9',
      newPrice: '$25.00',
      title: 'House Cleaning Services',
      work: 'Cleaning',
      like: true,
      name:'Wilson',
    },
    {
      img1: 'assets/img/providers/provider-20.jpg',
      img2: 'assets/img/user/user-08.jpg',
      country: 'Portland, USA',
      points: '4.9',
      newPrice: '$55.00',
      title: 'Commercial Painting Services',
      work: 'Painting',
      like: true,
      name:'Clarence',
    },
    {
      img1: 'assets/img/providers/provider-22.jpg',
      img2: 'assets/img/user/user-09.jpg',
      country: 'Houston, USA',
      points: '4.9',
      newPrice: '$55.00',
      oldPrice: '$35.00',
      title: 'Building Construction Services',
      work: 'Construction',
      like: true,
      name:'Roberts',
    },
  ];
  public customerBooking = [
    {
      img1: 'assets/img/services/service-08.jpg',
      services: 'Computer Services',
      booking: 'Booking Date',
      dateTime: '27 Sep 2022, 17:00-18:00',
      amount: 'Amount',
      price: '$100.00',
      text: 'Paypal',
      location: 'Location',
      place: 'Newyork, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-02.jpg',
      name: 'John Doe',
      mail: 'info@johndoe.com',
      number: '+1 888 888 8888',
      btn1: 'Cancelled by User',
      btn2: 'Reschedule',
      btn3: 'Reason',
      like: false,
    },
    {
      img1: 'assets/img/services/service-18.jpg',
      services: 'Car Repair Services',
      booking: 'Booking Date',
      dateTime: '23 Sep 2022, 10:00-11:00',
      amount: 'Amount',
      price: '$50.00',
      text: 'COD',
      location: 'Location',
      place: 'Alabama, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-03.jpg',
      name: 'John Smith',
      mail: 'info@johndoe.com',
      number: '+1 607-276-5393',
      btn1: 'Completed',
      btn2: 'Reschedule',
      btn3: 'Rebook',
      review: 'Add Review',
      details: 'View Details',
      like: false,
    },
    {
      img1: 'assets/img/services/service-07.jpg',
      services: 'Interior Designing',
      booking: 'Booking Date',
      dateTime: '27 Sep 2022, 17:00-18:00',
      amount: 'Amount',
      price: '$50.00',
      text: 'COD',
      location: 'Location',
      place: 'Washington, DC, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-06.jpg',
      name: 'Quentin',
      mail: 'info@johndoe.com',
      number: '+1 601-810-9218',
      btn1: 'Inprogress',
      btn2: 'Reschedule',
      button1: 'Chat',
      button2: 'Cancel',
      like: false,
    },
    {
      img1: 'assets/img/services/service-13.jpg',
      services: 'House Cleaning Services',
      booking: 'Booking Date',
      dateTime: '27 Sep 2022, 17:00-18:00',
      amount: 'Amount',
      price: '$375.00 ',
      text: 'COD',
      location: 'Location',
      place: 'Virginia, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-02.jpg',
      name: 'Johnson',
      mail: 'info@johndoe.com',
      number: '+1 312-328-3970',
      btn1: 'Pending',
      btn2: 'Reschedule',
      like: false,
      button1: 'Chat',
      button2: 'Cancel',
    },
    {
      img1: 'assets/img/services/service-08.jpg',
      services: 'Computer Services',
      booking: 'Booking Date',
      dateTime: '27 Sep 2022, 17:00-18:00',
      amount: 'Amount',
      price: '$100.00',
      text: 'COD',
      location: 'Location',
      place: 'Newyork, USA',
      customer: 'Customer',
      img2: 'assets/img/profiles/avatar-02.jpg',
      name: 'John Doe',
      mail: 'info@johndoe.com',
      number: '+1 888 888 8888',
      btn1: 'Cancelled',
      btn2: 'Reschedule',
      like: false,
    },
  ];
  public adminDashboard = [
    {
      id: '1',
      date: '28 Sep 2022',
      bookingTime: '10:00:00 - 11:00:00',
      provider: 'John Smith',
      user: 'Sharon',
      service: 'Computer Repair',
      amount: '$80',
      status: 'Pending',
      img1: 'assets/admin/img/customer/user-01.jpg',
      img2: 'assets/admin/img/customer/user-03.jpg',
      img3: 'assets/admin/img/services/service-03.jpg',
    },
    {
      id: '2',
      date: '10 Sep 2022',
      bookingTime: '18:00:00 - 19:00:00',
      provider: 'Johnny',
      user: 'Pricilla',
      service: 'Car Repair Services',
      amount: '$80',
      status: 'Completed',
      img1: 'assets/admin/img/customer/user-04.jpg',
      img2: 'assets/admin/img/customer/user-05.jpg',
      img3: 'assets/admin/img/services/service-02.jpg',
    },
    {
      id: '3',
      date: '25 Sep 2022',
      bookingTime: '12:00:00 - 13:00:00',
      provider: 'Robert',
      user: 'Amanda',
      service: 'Steam Car Wash',
      amount: '$80',
      status: 'Inprogress',
      img1: 'assets/admin/img/customer/user-06.jpg',
      img2: 'assets/admin/img/customer/user-02.jpg',
      img3: 'assets/admin/img/services/service-04.jpg',
    },
    {
      id: '4',
      date: '08 Sep 2022',
      bookingTime: '07 Oct 2022 11:22:51',
      provider: 'Sharonda',
      user: 'James',
      service: 'House Cleaning',
      amount: '$80',
      status: 'cancelled',
      img1: 'assets/admin/img/customer/user-09.jpg',
      img2: 'assets/admin/img/customer/user-01.jpg',
      img3: 'assets/admin/img/services/service-09.jpg',
    },
    {
      id: '5',
      date: '28 Sep 2022',
      bookingTime: '10:00:00 - 11:00:00',
      provider: 'John Smith',
      user: 'Sharon',
      service: 'Computer Repair',
      amount: '$80',
      status: 'Pending',
      img1: 'assets/admin/img/customer/user-01.jpg',
      img2: 'assets/admin/img/customer/user-03.jpg',
      img3: 'assets/admin/img/services/service-03.jpg',
    },
  ];
  public topServices = [
    {
      id: '1',
      service: 'Computer Repair',
      category: 'Computer',
      amount: '$80',
      img: 'assets/admin/img/services/service-03.jpg',
    },
    {
      id: '2',
      service: 'Car Repair Services',
      category: 'Automobile',
      amount: '$50',
      img: 'assets/admin/img/services/service-02.jpg',
    },
    {
      id: '3',
      service: 'Car Wash',
      category: 'Automobile',
      amount: '$14',
      img: 'assets/admin/img/services/service-04.jpg',
    },
    {
      id: '4',
      service: 'House Cleaning',
      category: 'Cleaning',
      amount: '$100',
      img: 'assets/admin/img/services/service-09.jpg',
    },
    {
      id: '5',
      service: 'Interior',
      category: 'Cleaning',
      amount: '$50',
      img: 'assets/admin/img/services/service-10.jpg',
    },
  ];
  public topProviders = [
    {
      id: '1',
      providerName: 'Robert',
      email: 'robert@gmail.com',
      phone: '+1 347-679-8275',
      img: 'assets/admin/img/customer/user-06.jpg',
    },
    {
      id: '2',
      providerName: 'Sharonda',
      email: 'sharonda@gmail.com',
      phone: '+1 570-621-248',
      img: 'assets/admin/img/customer/user-09.jpg',
    },
    {
      id: '3',
      providerName: 'John Smith',
      email: 'johnsmith@gmail.com',
      phone: '+1 646-957-0004',
      img: 'assets/admin/img/customer/user-01.jpg',
    },
    {
      id: '4',
      providerName: 'Pricilla',
      email: 'pricilla@gmail.com',
      phone: '+1 614-915-8101',
      img: 'assets/admin/img/customer/user-05.jpg',
    },
    {
      id: '5',
      providerName: 'James',
      email: 'james@gmail.com',
      phone: '+1 918-543-3702',
      img: 'assets/admin/img/customer/user-01.jpg',
    },
  ];
  public headerMenu = [
    {
      content: 'Home',
      link: 'https://truelysell-testing.dreamguystech.com/home',
    },
    {
      content: 'About',
      link: 'https://truelysell-testing.dreamguystech.com/about',
    },
    {
      content: 'Categories',
      link: 'https://truelysell-testing.dreamguystech.com/categories',
    },
    {
      content: 'Categories',
      link: 'https://truelysell-testing.dreamguystech.com/categories',
    },
    {
      content: 'Blog',
      link: 'https://truelysell-testing.dreamguystech.com/blog',
    },
    {
      content: 'Contact Us',
      link: 'https://truelysell-testing.dreamguystech.com/contactus',
    },
    {
      content: 'Pages',
      link: 'https://truelysell-testing.dreamguystech.com/pages',
    },
  ];
  public linksWidget = [
    {
      content: 'About',
      link: 'https://truelysell-testing.dreamguystech.com/about',
    },
    {
      content: 'Contact Us',
      link: 'https://truelysell-testing.dreamguystech.com/contact',
    },
    {
      content: 'FAQ',
      link: 'https://truelysell-testing.dreamguystech.com/faq',
    },
  ];
  public socialWidget = [
    {
      content: 'Facebook',
      link: 'https://facebook.com',
    },
    {
      content: 'Twitter',
      link: 'https://twitter.com',
    },
    {
      content: 'Youtube',
      link: 'https://youtube.com',
    },
    {
      content: 'Instagram',
      link: 'https://instagram.com',
    },
    {
      content: 'Google Plus',
      link: 'https://googleplus.com',
    },
  ];
  public copyRight = [
    {
      content: 'Privacy',
      link: 'https://truelysell.com/privacy',
    },
    {
      content: 'Terms & Conditions',
      link: 'https://truelysell.com/terms&conditions',
    },
  ];
  public socialProfiles = [
    {
      content: 'Instagram',
      url: 'Ex. www.instagram.com',
    },
    {
      content: 'Youtube',
      url: 'Ex. www.youtube.com',
    },
    {
      content: 'Twitter',
      url: 'Ex. www.twitter.com',
    },
    {
      content: 'Instagram',
      url: 'Ex. www.instagram.com',
    },
  ];
  public languages = [
    {
      id: '1',
      language: 'English',
      code: 'en',
      img: 'assets/admin/img/flags/us1.png',
    },
    {
      id: '2',
      language: 'Arabic',
      code: 'ar',
      img: 'assets/admin/img/flags/ae1.png',
    },
  ];
  public serviceSection = [
    {
      content : "Haircut",
      saloons : "25 Saloons",
      img1 : "assets/img/services/service-81.jpg",
      img2 : "assets/img/icons/cuttor.svg"
    },
    {
      content : "Trimming",
      saloons : "25 Saloons",
      img1 : "assets/img/services/service-83.jpg",
      img2 : "assets/img/icons/trim.svg"
    },
    {
      content : "Saloons",
      saloons : "25 Saloons",
      img1 : "assets/img/services/service-84.jpg",
      img2 : "assets/img/icons/style-logo.svg"
    },
    {
      content : "Shaving",
      saloons : "25 Saloons",
      img1 : "assets/img/services/service-82.jpg",
      img2 : "assets/img/icons/shave.svg"
    },
    {
      content : "Haircut",
      saloons : "25 Saloons",
      img1 : "assets/img/services/service-84.jpg",
      img2 : "assets/img/icons/trim.svg"
    },
    {
      content : "Haircut",
      saloons : "25 Saloons",
      img1 : "assets/img/services/service-84.jpg",
      img2 : "assets/img/icons/trim.svg"
    }
  ];
  public featuredStylists = [
    {
      img : "assets/img/profiles/avatar-04.jpg",
      name : "Evelyn Nelson",
      bookings : "300 Bookings"
    },
    {
      img : "assets/img/profiles/avatar-05.jpg",
      name : "Matthew Joe",
      bookings : "356 Bookings"
    },
    {
      img : "assets/img/profiles/avatar-06.jpg",
      name : "Matthew Joe",
      bookings : "145 Bookings"
    },
    {
      img : "assets/img/profiles/avatar-07.jpg",
      name : "Matthew Joe",
      bookings : "256 Bookings"
    },
    {
      img : "assets/img/profiles/avatar-08.jpg",
      name : "James George",
      bookings : "300 Bookings"
    }
  ];
  public reviews = [
    {

      name : "Paul Walker",
      country : "Newyork, USA",
      img:"assets/img/profiles/avatar-01.jpg"
    },
    {

      name : "Anthony Walker",
      country : "Newyork, USA",
      img:"assets/img/profiles/avatar-02.jpg"
    },
    {

      name : "Van Diesel",
      country : "Newyork, USA",
      img:"assets/img/profiles/avatar-03.jpg"
    },
    {

      name : "James Matthew",
      country : "Los Vegas, USA",
      img:"assets/img/profiles/avatar-04.jpg"
    },
    {

      name : "George Daren",
      country : "Mexico, USA",
      img:"assets/img/profiles/avatar-05.jpg"
    }
  ];
  public clientImg = [
    {
      img : "assets/img/profiles/avatar-01.jpg"
    },
    {
      img : "assets/img/profiles/avatar-02.jpg"
    },
    {
      img : "assets/img/profiles/avatar-03.jpg"
    },
    {
      img : "assets/img/profiles/avatar-04.jpg"
    },
    {
      img : "assets/img/profiles/avatar-05.jpg"
    }
  ];
  public latestSlider = [
    {
      span : "15",
      date : "Nov,2022",
      img : "assets/img/services/service-101.jpg",
      para : "Take advantage of trial periods or consultations",
      content : "Hair Style"
    },
    {
      span : "15",
      date : "Nov,2022",
      img : "assets/img/services/service-102.jpg",
       para : "Maximize your business potential right service",
      content : "Hair Style"
    },
    {
      span : "15",
      date : "Nov,2022",
      img : "assets/img/services/service-103.jpg",
       para : "Specific features and benefits of your service.",
      content : "Hair Style"
    },
    {
      span : "15",
      date : "Nov,2022",
      img : "assets/img/services/service-104.jpg",
       para : "One of the biggest use of service marketplace",
      content : "Hair Style"
    },
    {
      span : "15",
      date : "Nov,2022",
      img : "assets/img/services/service-102.jpg",
       para : "Consectetur adipisicing elit, sed do eiusmod",
      content : "Hair Style"
    }
  ];
  public caters = [
    {
      img1 : "assets/img/catering/catring-01.jpg",
      img2 : "assets/img/profiles//avatar-03.jpg",
      content : "Food Chef Caterings",
      reviews : "(3800 Reviews)",
      name : "Harling Shaw",
      km : "4.5 KM"
    },
    {
      img1 : "assets/img/catering/catring-02.jpg",
      img2 : "assets/img/profiles//avatar-04.jpg",
      content : "Magnificent Caterers",
      reviews : "(1654 Reviews)",
      name : "Daniel Mathew",
      km : "6.5 KM"
    },
    {
      img1 : "assets/img/catering/catring-03.jpg",
      img2 : "assets/img/profiles//avatar-05.jpg",
      content : "Food Chef Caterings",
      reviews : "(4577 Reviews)",
      name : "Karen Risb",
      km : "2.5 KM"
    },
    {
      img1 : "assets/img/catering/catring-04.jpg",
      img2 : "assets/img/profiles//avatar-06.jpg",
      content : "Posh Caterers",
      reviews : "(1571 Reviews)",
      name : "Habibul Akbar",
      km : "6.5 KM"
    },
    {
      img1 : "assets/img/catering/catring-03.jpg",
      img2 : "assets/img/profiles//avatar-03.jpg",
      content : "Food Chef Caterings",
      reviews : "(3800 Reviews)",
      name : "Harling Shaw",
      km : "4.5 KM"
    }
  ];
  public featuredCaters = [
    {
      rating : "4.8",
      caters : "Swagatham Caters",
      country : "New Jersey, USA",
      para : "we are also engage in offering catering services and decoration services where vision...",
      caterings : "Buffet Caterings",
      status : "Engagement",
      price : "Starting from $500",
      img : "assets/img/catering/catering-05.jpg"
    },
    {
      rating : "4.9",
      caters : "Delight Catering",
      country : "Nevada, USA",
      para : "we are also engage in offering catering services and decoration services where vision...",
      caterings : "Indoor",
      status : "Engagement",
      status2 : "Kitty Partying",
      price : "Starting from $255",
      img : "assets/img/catering/catering-06.jpg"
    },
    {
      rating : "3.8",
      caters : "Homemade Foods Caters",
      country : "Chicago, USA",
      para : "we are also engage in offering catering services and decoration services where vision...",
      caterings : "Buffet Caterings",
      status : "Engagement",
      price : "Starting from $500",
      img : "assets/img/catering/catering-07.jpg"
    },
    {
      rating : "4.8",
      caters : "Swagatham Caters",
      country : "Chicago, USA",
      para : "we are also engage in offering catering services and decoration services where vision...",
      caterings : "Buffet Caterings",
      status : "Indoor",
      status2 : "Kitty Partying",
      status3 : "international",
      price : "Starting from $500",
      img : "assets/img/catering/catering-06.jpg"
    }
  ];
  public topCaters = [
    {
      img1 : "assets/img/catering/catering-08.jpg",
      img2 : "assets/img/profiles//avatar-03.jpg",
      para : "we are also engage in offering catering services and decoration services where vision...",
      caterings : "MealMenu Caterings",
      status : "Engagement",
      price1 : "$900",
      price2 : "$200",
      country : "New Jersey, USA",
      title : "caterings",
      like : false
    },
    {
      img1 : "assets/img/catering/catering-09.jpg",
      img2 : "assets/img/profiles//avatar-06.jpg",
      para : "we are also engage in offering catering services and decoration services where vision...",
      caterings : "Blue Sea Catering & Banquets",
      status : "Engagement",
      price1 : "$600",
      price2 : "$450",
      country : "Main Boulevard, Lahore,",
      title : "Blue Sea Catering & Banquets",
      like : false
    },
    {
      img1 : "assets/img/catering/catering-10.jpg",
      img2 : "assets/img/catering/catering-10.jpg",
      para : "we are also engage in offering catering services and decoration services where vision...",
      caterings : "Popular Hospitality",
      status : "Engagement",
      price1 : "$700",
      price2 : "$100",
      country : "USA Peachfield Road, Uk",
      title : "Popular Hospitality",
      like : false
    },
    {
      img1 : "assets/img/services/service-46.jpg",
      img2 : "assets/img/profiles//avatar-09.jpg",
      para : "we are also engage in offering catering services and decoration services where vision...",
      caterings : "Blue Sea Catering & Banquets",
      status : "Engagement",
      price1 : "$600",
      price2 : "$450",
      country : "Main Boulevard, Lahore,",
      title : "Blue Sea Catering & Banquets",
      like : false
    }
  ];
  public clientReview = [
    {
      name : "Daniela Fransis",
      img : "assets/img/profiles/avatar-15.jpg",
      para : "Versatile and user-friendly platform for freelancers and businesses alike. Its interface is clean and intuitive, making it easy to post jobs, browse profiles, and manage projects."
    },
    {
      name : "Hashimoda Reena",
      img : "assets/img/profiles/avatar-19.jpg",
      para : "Offers a comprehensive marketplace for finding local service professionals across a wide range of categories, including home improvement, events, and personal services. The platform is user-friendly"

    },
    {
      name : "Jake Sulaine",
      img : "assets/img/profiles/avatar-18.jpg",
       para : "Offers a comprehensive marketplace for finding local service professionals across a wide range of categories, including home improvement, events, and personal services. The platform is user-friendly"
    },
    {
      name : "Daniela Fransis",
      img : "assets/img/profiles/avatar-15.jpg",
      para : "Versatile and user-friendly platform for freelancers and businesses alike. Its interface is clean and intuitive, making it easy to post jobs, browse profiles, and manage projects."
    }
  ];
  public company = [
    {
      img : "assets/img/icons/logo-01.svg"
    },
    {
      img : "assets/img/icons/logo-02.svg"
    },
    {
      img : "assets/img/icons/logo-03.svg"
    },
    {
      img : "assets/img/icons/logo-04.svg"
    },
    {
      img : "assets/img/icons/logo-05.svg"
    },
    {
      img : "assets/img/icons/logo-06.svg"
    },
    {
      img : "assets/img/icons/logo-01.svg"
    },
    {
      img : "assets/img/icons/logo-02.svg"
    }
  ];
  public usefulBlogs = [
    {
      img1 : "assets/img/catering/catering-11.jpg",
      img2 : "assets/img/profiles/avatar-10.jpg",
      para : "Take Advantage of Trial Periods",
      para2 : "Specific features and benefits of your service marketplace.",
      name : "by Christopher"
    },
    {
      img1 : "assets/img/catering/catering-12.jpg",
      img2 : "assets/img/profiles/avatar-25.jpg",
      para : "Maximize Your Business Potential",
      para2 : "One of the biggest advantages of using a service marketplace",
      name : "by James"
    },
    {
      img1 : "assets/img/catering/catering-13.jpg",
      img2 : "assets/img/profiles/avatar-07.jpg",
      para : "Specific features and benefits of you",
      para2 : "Before hiring a service provider, check their reviews and ratings on the marketplace...",
      name : "by Matthew"
    },
    {
      img1 : "assets/img/catering/catering-12.jpg",
      img2 : "assets/img/profiles/avatar-54.jpg",
      para : "Take Advantage of Trial Period",
      para2 : "Specific features and benefits of your service marketplace.",
      name : "by Matthew"
    },

  ];
  public topExperts = [
    {
      img : "assets/img/user/user-17.jpg",
      name : "Josh Knight",
      work : "Technician",
      price : "$20.00",
      ratings : "(320)"
    },
    {
      img : "assets/img/user/user-18.jpg",
      name : "Johnny Bell",
      work : "Technician",
      price : "$20.00",
      ratings : "(320)"
    },
    {
      img : "assets/img/user/user-19.jpg",
      name : "Elijah Johnson",
      work : "Technician",
      price : "$20.00",
      ratings : "(320)"
    },
    {
      img : "assets/img/user/user-20.jpg",
      name : "Ryan Fox",
      work : "Technician",
      price : "$20.00",
      ratings : "(320)"
    },
    {
      img : "assets/img/user/user-18.jpg",
      name : "John Smith",
      work : "Technician",
      price : "$20.00",
      ratings : "(320)"
    }
  ];
  public services = [
    {
      img1 : "assets/img/services/service-56.jpg",
      img2 : "assets/img/profiles/avatar-11.jpg",
      rating : "4.8",
      title : "Featured",
      content : "Basic Washing - Compact SUVs",
      country : "New Jersey, USA",
      price1 : "$50.00",
      price2 : "$35.00"    ,
      like : false
    },
    {
      img1 : "assets/img/services/service-57.jpg",
      img2 : "assets/img/profiles/avatar-12.jpg",
      rating : "4.8",
      title : "Featured",
      content : "Basic Washing - Compact SUVs",
      country : "New Jersey, USA",
      price1 : "$50.00",
      price2 : "$35.00"    ,
      like : false
    },
    {
      img1 : "assets/img/services/service-58.jpg",
      img2 : "assets/img/profiles/avatar-13.jpg",
      rating : "4.8",
      title : "Featured",
      content : "Basic Washing - Compact SUVs",
      country : "New Jersey, USA",
      price1 : "$50.00",
      price2 : "$35.00"    ,
      like : false
    },
    {
      img1 : "assets/img/services/service-56.jpg",
      img2 : "assets/img/profiles/avatar-11.jpg",
      rating : "4.8",
      title : "Featured",
      content : "Basic Washing - Compact SUVs",
      country : "New Jersey, USA",
      price1 : "$50.00",
      price2 : "$35.00"    ,
      like : false
    }
  ];
  public testimonialsData = [
    {
      img : "assets/img/profiles/avatar-07.jpg",
      heading : "Best Design and delivered in time",
      para : "Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
      name : "Mansur",
      role : "CEO @ airbnb"
    },
    {
      img : "assets/img/profiles/avatar-08.jpg",
      heading : "Best Design and delivered in time",
      para : "Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
      name : "Mansur",
      role : "CEO @ airbnb"
    },
    {
      img : "assets/img/profiles/avatar-09.jpg",
      heading : "Best Design and delivered in time",
      para : "Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
      name : "Mansur",
      role : "CEO @ airbnb"
    }
  ];
  public blogs = [
    {
      img1 : "assets/img/services/service-51.jpg",
      img2 : "assets/img/profiles/avatar-17.jpg",
      content : "The Benefits Of Keeping Company Cars Clean",
      para : "Donec vel pellentesque nisl, molestie tempus ligula. Cras massa turpis, pretium nec placerat ornare, sodales ac urna. Sed commodo semper fermentum.",
      date : "22-12-2023"
    },
    {
      img1 : "assets/img/services/service-52.jpg",
      img2 : "assets/img/profiles/avatar-18.jpg",
      content : "What Has Changed In The Hand Car Wash Industry?",
      para : "Donec vel pellentesque nisl, molestie tempus ligula. Cras massa turpis, pretium nec placerat ornare, sodales ac urna. Sed commodo semper fermentum.",
      date : "17-12-2023"
    },
    {
      img1 : "assets/img/services/service-51.jpg",
      img2 : "assets/img/profiles/avatar-17.jpg",
      content : "The Benefits Of Keeping Company Cars Clean",
      para : "Donec vel pellentesque nisl, molestie tempus ligula. Cras massa turpis, pretium nec placerat ornare, sodales ac urna. Sed commodo semper fermentum.",
      date : "28-02-2023"
    },
    {
      img1 : "assets/img/services/service-51.jpg",
      img2 : "assets/img/profiles/avatar-18.jpg",
      content : "What Has Changed In The Hand Car Wash Industry?",
      para : "Donec vel pellentesque nisl, molestie tempus ligula. Cras massa turpis, pretium nec placerat ornare, sodales ac urna. Sed commodo semper fermentum.",
      date : "28-02-2023"
    },
    {
      img1 : "assets/img/services/service-52.jpg",
      img2 : "assets/img/profiles/avatar-18.jpg",
      content : "What Has Changed In The Hand Car Wash Industry?",
      para : "Donec vel pellentesque nisl, molestie tempus ligula. Cras massa turpis, pretium nec placerat ornare, sodales ac urna. Sed commodo semper fermentum.",
      date : "28-02-2023"
    },
  ];
  public featuredCategories = [
    {
      img1 : "assets/img/icons/car-wash.svg",
      img2 : "assets/img/services/service-08.jpg",
      title : "Painting"
    },
    {
      img1 : "assets/img/icons/computer.svg",
      img2 : "assets/img/services/service-12.jpg",
      title : "Construction"
    },
    {
      img1 : "assets/img/icons/construction.svg",
      img2 : "assets/img/services/service-18.jpg",
      title : "Computer"
    },
    {
      img1 : "assets/img/icons/painting.svg",
      img2 : "assets/img/feature.jpg",
      title : "Car Wash"
    },
    {
      img1 : "assets/img/icons/car-wash.svg",
      img2 : "assets/img/services/service-08.jpg",
      title : "Painting"
    },
    {
      img1 : "assets/img/icons/computer.svg",
      img2 : "assets/img/services/service-12.jpg",
      title : "Construction"
    },
    {
      img1 : "assets/img/icons/construction.svg",
      img2 : "assets/img/services/service-18.jpg",
      title : "Computer"
    },
    {
      img1 : "assets/img/icons/painting.svg",
      img2 : "assets/img/feature.jpg",
      title : "Car Wash"
    }
  ];
  public popularService = [
    {
      img1 : "assets/img/services/service-64.jpg",
      img2 : "assets/img/profiles/avatar-01.jpg",
      title : "Glass Fitting",
      name : "Jeny Doe",
      content : "Toughened Glass Fitting Service",
      num : "28-62-76-32",
      country : "New Jersey, USA",
      rating : "(234)",
      price : "$25.00"
    },
    {
      img1 : "assets/img/services/service-65.jpg",
      img2 : "assets/img/profiles/avatar-06.jpg",
      title : "Car Repair",
      name : "Jeny Doe",
      content : "Car Repair Service",
      num : "28-62-76-32",
      country : "New Jersey, USA",
      rating : "(234)",
      price : "$25.00"
    },
    {
      img1 : "assets/img/services/service-66.jpg",
      img2 : "assets/img/profiles/avatar-11.jpg",
      title : "Car Repair",
      name : "Jeny Doe",
      content : "Computer Repairing & Spares",
      num : "28-62-76-32",
      country : "New Jersey, USA",
      rating : "(234)",
      price : "$25.00"
    },
    {
      img1 : "assets/img/services/service-65.jpg",
      img2 : "assets/img/profiles/avatar-06.jpg",
      title : "Car Repair",
      name : "Jeny Doe",
      content : "Car Repair Service",
      num : "28-62-76-32",
      country : "New Jersey, USA",
      rating : "(234)",
      price : "$25.00"
    },
  ];
  public featuredCategory = [
    {
      img1 : "assets/img/services/service-107.jpg",
      img2 : "assets/img/profiles/avatar-06.jpg",
      title : "Construction",
      name : "Jeny Doe",
      content : "Grinding Steel Metal",
      num : "28-62-76-32",
      country : "New Jersey, USA",
      rating : "(234)",
      price1 : "$25.00",
      price2 : "$35.00"
    },
    {
      img1 : "assets/img/services/service-108.jpg",
      img2 : "assets/img/profiles/avatar-11.jpg",
      title : "Car Mechanism",
      name : "Jeny Doe",
      content : "Toughened Glass Fitting Services",
      num : "28-62-76-32",
      country : "New Jersey, USA",
      rating : "(234)",
      price1 : "$25.00",
    },
    {
      img1 : "assets/img/services/service-109.jpg",
      img2 : "assets/img/profiles/avatar-19.jpg",
      title : "Computer Repairing",
      name : "Jeny Doe",
      content : "Computer Repairing & Spares",
      num : "28-62-76-32",
      country : "New Jersey, USA",
      rating : "(234)",
      price1 : "$35.00",
    },
    {
      img1 : "assets/img/services/service-107.jpg",
      img2 : "assets/img/profiles/avatar-06.jpg",
      title : "Car Repair",
      name : "Jeny Doe",
      content : "Car Repair Service",
      num : "28-62-76-32",
      country : "New Jersey, USA",
      rating : "(234)",
      price1 : "$25.00",
      price2 : "$35.00"
    },
  ];
  public topProvider = [
    {
      img1 : "assets/img/providers/provider-35.jpg",
      name : "John Smith",
      rate : "4.8",
      price : "$20.00",
      title : "Electrician"
    },
    {
      img1 : "assets/img/providers/provider-36.jpg",
      name : "George Smith",
      rate : "4.8",
      price : "$20.00",
      title : "Construction"
    },
    {
      img1 : "assets/img/providers/provider-37.jpg",
      name : "Matthew Thomas",
      rate : "4.9",
      price : "$60.00",
      title : "Computer"
    },
    {
      img1 : "assets/img/providers/provider-38.jpg",
      name : "John Smith",
      rate : "4.8",
      price : "$60.00",
      title : "Electrician"
    },
    {
      img1 : "assets/img/providers/provider-35.jpg",
      name : "John Smith",
      rate : "4.8",
      price : "$20.00",
      title : "Electrician"
    },
    {
      img1 : "assets/img/providers/provider-35.jpg",
      name : "John Smith",
      rate : "4.8",
      price : "$20.00",
      title : "Electrician"
    }
  ];
  public testimonialProvider = [
    {
      name : "James Williams",
      para : "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words which don",
      img : "assets/img/profiles/avatar-17.jpg"
    },
    {
      name : "James Williams",
      para : "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words which don",
      img : "assets/img/profiles/avatar-19.jpg"
    },
    {
      name : "James Williams",
      para : "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words which don",
      img : "assets/img/profiles/avatar-11.jpg"
    }
  ];
  public blogData = [
    {
      img1 : "assets/img/blog/house-blog-03.jpg",
      img2 : "assets/img/profiles/avatar-10.jpg",
      date : "15, Dec 2023",
      title : "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      para : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium,eaque ipsa",
      name : "Sophie",
      heading : "Repair"
    },
    {
      img1 : "assets/img/blog/house-blog-01.jpg",
      img2 : "assets/img/profiles/avatar-16.jpg",
      date : "10, Dec 2023",
      title : "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      para : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium,eaque ipsa",
      name : "James",
      heading : "Cleaning"
    },
     {
      img1 : "assets/img/blog/house-blog-02.jpg",
      img2 : "assets/img/profiles/avatar-16.jpg",
      date : "15 Dec 2023",
      title : "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      para : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium,eaque ipsa",
      name : "George",
      heading : "Repair"
    },
    {
      img1 : "assets/img/blog/house-blog-03.jpg",
      img2 : "assets/img/profiles/avatar-15.jpg",
      date : "15 Dec 2023",
      title : "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      para : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium,eaque ipsa",
      name : "Sophie",
      heading : "Repair"
    },
  ];
  public pricingPlan = [
    {
      img : "assets/img/gallery/gallery-08.jpg",
      heading : "Pet Adoption",
      products : "65 Products"
    },
    {
      img : "assets/img/gallery/gallery-09.jpg",
      heading : "Pet Boarding",
      products : "65 Products"
    },
    {
      img : "assets/img/gallery/gallery-10.jpg",
      heading : "Foods",
      products : "65 Products"
    },
    {
      img : "assets/img/gallery/gallery-11.jpg",
      heading : "Health",
      products : "35 Products"
    },
    {
      img : "assets/img/gallery/gallery-12.jpg",
      heading : "Health",
      products : "35 Products"
    },
    {
      img : "assets/img/gallery/gallery-13.jpg",
      heading : "Pet Grooming",
      products : "65 Products"
    },
    {
      img : "assets/img/gallery/gallery-12.jpg",
      heading : "Pet Grooming",
      products : "65 Products"
    }
  ];
public professionals = [
  {
    name : "Caroline Williams",
    experience : "2 Years Experience",
    img : "assets/img/gallery/gallery-15.jpg"
  },
  {
    name : "Caroline Williams",
    experience : "2 Years Experience",
    img : "assets/img/gallery/gallery-14.jpg"
  },
  {
    name : "Caroline Williams",
    experience : "2 Years Experience",
    img : "assets/img/gallery/gallery-17.jpg"
  },
  {
    name : "Caroline Williams",
    experience : "2 Years Experience",
    img : "assets/img/gallery/gallery-16.jpg"
  },
  {
    name : "Caroline Williams",
    experience : "2 Years Experience",
    img : "assets/img/gallery/gallery-15.jpg"
  }
];
public customers = [
  {
    name : "Hashimoda Reena, USA",
    img : "assets/img/profiles/avatar-55.jpg",
    para : "Versatile and user-friendly platform for freelancers and businesses alike. Its interface is clean and intuitive, making it 	easy to post jobs, browse profiles, and manage projects. The range of services is impressive"
  },
  {
    name : "James Williams",
    img : "assets/img/profiles/avatar-17.jpg",
    para : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"
  },
  {
    name : "James Williams",
    img : "assets/img/profiles/avatar-17.jpg",
    para : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"
  }
];
public blog = [
  {
    name : "Admin",
    img1 : "assets/img/blog/blog-09.jpg",
    img2 : "assets/img/profiles/avatar-10.jpg",
    title : "Top Grooming tips for your dog for this summer",
    content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    heading : "Grooming"
  },
  {
    name : "Admin",
    img1 : "assets/img/blog/blog-10.jpg",
    img2 : "assets/img/profiles/avatar-20.jpg",
    title : "Top Grooming tips for your dog for this summer",
    content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    heading : "Grooming"
  },
  {
    name : "Admin",
    img1 : "assets/img/blog/blog-11.jpg",
    img2 : "assets/img/profiles/avatar-09.jpg",
    title : "Top Grooming tips for your dog for this summer",
    content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    heading : "Grooming"
  },
  {
    name : "Admin",
    img1 : "assets/img/blog/blog-10.jpg",
    img2 : "assets/img/profiles/avatar-13.jpg",
    title : "Top Grooming tips for your dog for this summer",
    content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    heading : "Grooming"
  }
];
public service = [
  {
    img : "assets/img/services/service-70.jpg",
    mechanics : "25 Mechanics",
    para : "Performance Upgrade and Customization"
  },
  {
    img : "assets/img/services/service-71.jpg",
    mechanics : "15 Mechanics",
    para : "Car Audio Repair and Maintenance customers"
  },
  {
    img : "assets/img/services/service-72.jpg",
    mechanics : "30 Mechanics",
    para : "Performance Upgrade and Customization"
  },
  {
    img : "assets/img/services/service-73.jpg",
    mechanics : "17 Mechanics",
    para : "Engine Service and repair Maintenance"
  },
  {
    img : "assets/img/services/service-70.jpg",
    mechanics : "25 Mechanics",
    para : "Performance Upgrade and Customization"
  }
];
public mechanics = [
  {
    heading : "Wheel Alignment Specialist",
    img : "assets/img/mechanic/mechanic-01.jpg",
    name : "John Smith",
    rating : "(320)"
  },
  {
    heading : "Hatchback mechanic",
    img : "assets/img/mechanic/mechanic-02.jpg",
    name : "Daniale Joe",
    rating : "(320)"
  },
  {
    heading : "Mechanic",
    img : "assets/img/mechanic/mechanic-03.jpg",
    name : "Daniale Joe",
    rating : "(320)"
  },
  {
    heading : "Wheel Alignment Specialist",
    img : "assets/img/mechanic/mechanic-04.jpg",
    name : "Daniale Joe",
    rating : "(320)"
  },
  {
    heading : "Wheel Alignment Specialist",
    img : "assets/img/mechanic/mechanic-05.jpg",
    name : "Daniale Joe",
    rating : "(320)"
  }
];
public customersReview = [
  {
    heading : "Vincent Cooper",
    country : "Alaska, USA",
    para : "Versatile and user-friendly platform for freelancers and businesses alike. Its interface is clean and intuitive, making it easy to post jobs, browse profiles, and manage projects. The range of services is impressive,",
    img : "assets/img/blog/blog-14.jpg"
  },
  {
    heading : "Vincent Cooper",
    country : "Alaska, USA",
    para : "Versatile and user-friendly platform for freelancers and businesses alike. Its interface is clean and intuitive, making it easy to post jobs, browse profiles, and manage projects. The range of services is impressive,",
    img : "assets/img/blog/blog-14.jpg"
  },
  {
    heading : "Vincent Cooper",
    country : "Alaska, USA",
    para : "Versatile and user-friendly platform for freelancers and businesses alike. Its interface is clean and intuitive, making it easy to post jobs, browse profiles, and manage projects. The range of services is impressive,",
    img : "assets/img/blog/blog-14.jpg"
  }
];
public additionalService = [
  {
    img1 : "assets/img/services/service-70.jpg",
    img2 : "assets/img/profiles/avatar-05.jpg",
    mechanics : "25 Mechanics",
    para : "Performance Upgrade and Customization",
  },
  {
    img1 : "assets/img/services/service-71.jpg",
    img2 : "assets/img/profiles/avatar-20.jpg",
    mechanics : "25 Mechanics",
    para : "Performance Upgrade and Customization",
  },
  {
    img1 : "assets/img/services/service-70.jpg",
    img2 : "assets/img/profiles/avatar-07.jpg",
    mechanics : "25 Mechanics",
    para : "Performance Upgrade and Customization",
  },
  {
    img1 : "assets/img/services/service-71.jpg",
    img2 : "assets/img/profiles/avatar-01.jpg",
    mechanics : "25 Mechanics",
    para : "Performance Upgrade and Customization",
  },
  {
    img1 : "assets/img/services/service-70.jpg",
    img2 : "assets/img/profiles/avatar-02.jpg",
    mechanics : "25 Mechanics",
    para : "Performance Upgrade and Customization",
  },
  {
    img1 : "assets/img/services/service-71.jpg",
    img2 : "assets/img/profiles/avatar-03.jpg",
    mechanics : "25 Mechanics",
    para : "Performance Upgrade and Customization",
  },
];
public latestBlogs = [
  {
    img1 : "assets/img/services/service-77.jpg",
    img2 : "assets/img/profiles/avatar-10.jpg",
    heading : "Sixteen tips for fix and repairs for starting problem",
    para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    name : "Admin",
    content : "Services"
  },
  {
    img1 : "assets/img/services/service-78.jpg",
    img2 : "assets/img/profiles/avatar-11.jpg",
    heading : "Sixteen tips for fix and repairs for starting problem",
    para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    name : "Admin",
    content : "Services"
  },
  {
    img1 : "assets/img/services/service-79.jpg",
    img2 : "assets/img/profiles/avatar-12.jpg",
    heading : "Sixteen tips for fix and repairs for starting problem",
    para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    name : "Admin",
    content : "Services"
  },
  {
    img1 : "assets/img/services/service-77.jpg",
    img2 : "assets/img/profiles/avatar-10.jpg",
    heading : "Sixteen tips for fix and repairs for starting problem",
    para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    name : "Admin",
    content : "Services"
  }
];
public popularSection = [
  {
    heading : "Pet Health",
    title : "Ear Cleaning & Plucking",
    country : "New Jersey, USA",
    price1 : "$350",
    price2 : "$450",
    rating : "4.8",
    rate : "(50)",
    img1 : "assets/img/gallery/gallery-14.jpg",
    img2 : "assets/img/profiles/avatar-05.jpg",
    like : false
  },
  {
    heading : "Pet Health",
    title : "Ear Cleaning & Plucking",
    country : "New Jersey, USA",
    price1 : "$350",
    price2 : "$450",
    rating : "4.8",
    rate : "(60)",
    img1 : "assets/img/gallery/gallery-15.jpg",
    img2 : "assets/img/profiles/avatar-07.jpg",
    like : false
  },
  {
    heading : "Pet Health",
    title : "Ear Cleaning & Plucking",
    country : "New Jersey, USA",
    price1 : "$650",
    price2 : "$850",
    rating : "4.8",
    rate : "(90)",
    img1 : "assets/img/gallery/gallery-16.jpg",
    img2 : "assets/img/profiles/avatar-10.jpg",
    like : false
  },
  {
    heading : "Pet Grooming",
    title : "Ear Cleaning & Plucking",
    country : "New Jersey, USA",
    price1 : "$350",
    price2 : "$450",
    rating : "4.8",
    rate : "(50)",
    img1 : "assets/img/gallery/gallery-17.jpg",
    img2 : "assets/img/profiles/avatar-15.jpg",
    like : false
  }
];
public serviceWidget = [
  {
    rating : "4.8",
    heading : "Featured",
    title : "Basic Washing - Compact SUVs",
    country : "New Jersey, USA",
    price1 : "$50.00",
    price2 : "$35.00",
    service : "Book Service",
    img1 : "assets/img/services/service-56.jpg",
    img2 : "assets/img/profiles/avatar-11.jpg",
    like : false
  },
  {
    rating : "3.8",
    heading : "Featured",
    title : "Interior Washing - Compact SUV",
    country : "New Jersey, USA",
    price1 : "$78.00",
    price2 : "$25.00",
    service : "Book Service",
    img1 : "assets/img/services/service-57.jpg",
    img2 : "assets/img/profiles/avatar-12.jpg",
    like : false
  },
  {
    rating : "3.4",
    heading : "Featured",
    title : "Vacuum Washing - Compact SUV",
    country : "New Jersey, USA",
    price1 : "$52.00",
    price2 : "$35.00",
    service : "Book Service",
    img1 : "assets/img/services/service-58.jpg",
    img2 : "assets/img/profiles/avatar-13.jpg",
    like : false
  },
  {
    rating : "3.9",
    heading : "Featured",
    title : "Car Wash and Glassing",
    country : "New Jersey, USA",
    price1 : "$50.00",
    price2 : "$35.00",
    service : "Book Service",
    img1 : "assets/img/services/service-59.jpg",
    img2 : "assets/img/profiles/avatar-01.jpg",
    like : false
  },
  {
    rating : "4.8",
    heading : "Featured",
    title : "Express washing",
    country : "New Jersey, USA",
    price1 : "$50.00",
    price2 : "$35.00",
    service : "Book Service",
    img1 : "assets/img/services/service-54.jpg",
    img2 : "assets/img/profiles/avatar-20.jpg",
    like : false
  },
  {
    rating : "4.8",
    heading : "Featured",
    title : "Exterior Washing",
    country : "New Jersey, USA",
    price1 : "$50.00",
    price2 : "$35.00",
    service : "Book Service",
    img1 : "assets/img/services/service-55.jpg",
    img2 : "assets/img/profiles/avatar-11.jpg",
    like : false
  }
];
public searchList = [
  {
    img1 : "assets/img/services/service-04.jpg",
    img2 : "assets/img/profiles/avatar-01.jpg",
    service : "Car Wash",
    title : "Car Repair Services",
    country : "Maryland City, MD, USA",
    rating : "4.9",
    price1 : "$25.00",
    price2 : "$35.00",
    content : "Apply Offer"
  },
  {
    img1 : "assets/img/services/service-02.jpg",
    img2 : "assets/img/profiles/avatar-02.jpg",
    service : "Construction",
    title : "Toughened Glass Fitting Services",
    country : "New Jersey, USA",
    rating : "4.9",
    price1 : "$30.00",
    price2 : "$35.00",
    content : "Apply Offer"
  },
  {
    img1 : "assets/img/services/service-06.jpg",
    img2 : "assets/img/profiles/avatar-05.jpg",
    service : "Computer",
    title : "Computer & Server AMC Service",
    country : "California, USA",
    rating : "4.9",
    price1 : "$30.00",
    price2 : "$35.00",
    content : "Apply Offer"
  },
  {
    img1 : "assets/img/services/service-06.jpg",
    img2 : "assets/img/profiles/avatar-05.jpg",
    service : "Computer",
    title : "Computer & Server AMC Service",
    country : "California, USA",
    rating : "4.9",
    price1 : "$30.00",
    price2 : "$35.00",
    content : "Apply Offer"
  },
  {
    img1 : "assets/img/services/service-07.jpg",
    img2 : "assets/img/profiles/avatar-06.jpg",
    service : "Interior",
    title : "Interior Designing",
    country : "Maryland, USA",
    rating : "4.9",
    price1 : "$15.00",
    price2 : "$25.00",
    content : "Apply Offer"
  },
  {
    img1 : "assets/img/services/service-09.jpg",
    img2 : "assets/img/profiles/avatar-09.jpg",
    service : "Cleaning",
    title : "House Cleaning Services",
    country : "Georgia",
    rating : "4.9",
    price1 : "$55.00",
    price2 : "$60.00",
    content : "Apply Offer"
  },
  {
    img1 : "assets/img/services/service-10.jpg",
    img2 : "assets/img/profiles/avatar-09.jpg",
    service : "Construction",
    title : "Building Construction Services",
    country : "Montana, USA",
    rating : "4.9",
    price1 : "$45.00",
    price2 : "$50.00",
    content : "Apply Offer"
  }
];
public serviceDetails = [
  {
    img1 : "assets/img/services/service-01.jpg",
    img2 : "assets/img/profiles/avatar-04.jpg",
    service : "Cleaning",
    title : "Electric Panel Repairing Service",
    country : "Montana, USA",
    price1 : "$25.00",
    price2 : "$35.00"
  },
  {
    img1 : "assets/img/services/service-02.jpg",
    img2 : "assets/img/profiles/avatar-03.jpg",
    service : "Construction",
    title : "Toughened Glass Fitting Services",
    country : "Montana, USA",
    price1 : "$45.00",
  },
  {
    img1 : "assets/img/services/service-03.jpg",
    img2 : "assets/img/profiles/avatar-02.jpg",
    service : "Carpentry",
    title : "Wooden Carpentry Work",
    country : "Montana, USA",
    price1 : "$45.00",
  }
];
public servicesList = [
  {
    img : "assets/img/services/service-04.jpg",
    service : "Car Wash",
    rating : "4.9",
    title : "Car Repair Services",
    country : "Maryland City, MD, USA",
    action1 : "Edit",
    action2 : "Inactive",
    content : "Apply Offer",
    like : false
  },
  {
    img : "assets/img/services/service-02.jpg",
    service : "Construction",
    rating : "4.9",
    title : "Toughened Glass Fitting Services",
    country : "New Jersey, USA",
    action1 : "Edit",
    action2 : "Inactive",
    content : "Apply Offer",
    like : false
  },
  {
    img : "assets/img/services/service-06.jpg",
    service : "Computer",
    rating : "4.9",
    title : "Computer & Server AMC Service",
    country : "California, USA",
    action1 : "Edit",
    action2 : "Inactive",
    content : "Apply Offer",
    like : false
  },
  {
    img : "assets/img/services/service-07.jpg",
    service : "Interior",
    rating : "4.9",
    title : "Interior Designing",
    country : "Maryland, USA",
    action1 : "Edit",
    action2 : "Inactive",
    content : "Apply Offer",
    like : false
  },
  {
    img : "assets/img/services/service-01.jpg",
    service : "Electrician",
    rating : "4.9",
    title : "Electric Panel Repairing Service",
    country : "Texas, USA",
    action1 : "Edit",
    action2 : "Inactive",
    content : "Apply Offer",
    like : false
  },
  {
    img : "assets/img/services/service-09.jpg",
    service : "Cleaning",
    rating : "4.9",
    title : "House Cleaning Services",
    country : "Georgia",
    action1 : "Edit",
    action2 : "Inactive",
    content : "Apply Offer",
    like : false
  }
]
}
