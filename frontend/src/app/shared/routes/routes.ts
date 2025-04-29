export class routes {
  private static Url = '';


  public static get customerLeaderboardDetail(): string {
    return '/customers/customer-leaderboard-detail';
  }
  
  
  public static get customerReward(): string {
    return'/customers/customer-reward';
  }

  public static get customerChallenges(): string {
    return  '/customers/customer-challenge';
  }
  public static get customerAchievements(): string {
    return  '/customers/customer-achievements';
  }


  public static get adminAchievements(): string {
    return  '/admin/liste-achievements';
  }

 public static get adminChallenges(): string {
    return  '/admin/liste-challenges';
  }
  public static get adminBoards(): string {
    return  '/admin/liste-leaderboard';
  }
  public static get adminAddBoard(): string {
    return  '/admin/add-leaderboard';
  }
  public static get adminAddChallenge(): string {
    return  '/admin/add-challenge';
  }
  
















  public static get adminRequestList(): string {
    return this.baseUrl + '/admin/buddy/requests-list';
  }

  public static get adminMatchList(): string {
    return this.baseUrl + '/admin/buddy/matches-list';
  }
  public static get buddyList(): string {
    return this.baseUrl + '/buddy/buddy-list';
  }
  public static get buddyRequest(): string {
    return this.baseUrl + '/buddy/buddy-request';
  }
  public static get buddyMatch(): string {
    return this.baseUrl + '/buddy/buddy-match';
  }
  public static get baseUrl(): string {
    return this.Url;
  }
  public static get chooseSignup(): string {
    return this.baseUrl + '/choose-signup';
  }
  public static get emailOtp(): string {
    return this.baseUrl + '/email-otp';
  }
  public static get forgotPassword(): string {
    return this.baseUrl + '/forgot-password';
  }
  public static get freeTrial(): string {
    return this.baseUrl + '/free-trial';
  }
  public static get login(): string {
    return this.baseUrl + '/login';
  }
  public static get passwordRecovery(): string {
    return this.baseUrl + '/password-recovery';
  }
  public static get phoneOtp(): string {
    return this.baseUrl + '/phone-otp';
  }
  public static get providerSignup(): string {
    return this.baseUrl + '/provider-register';
  }
  public static get resetPassword(): string {
    return this.baseUrl + '/reset-password';
  }
  public static get success(): string {
    return this.baseUrl + '/success';
  }
  public static get Register(): string {
    return this.baseUrl + '/register';
  }
  public static get booking(): string {
    return this.baseUrl + '/bookings/booking';
  }
  public static get adminBooking(): string {
    return this.baseUrl + '/admin/booking';
  }
  public static get bookingDone(): string {
    return this.baseUrl + '/bookings/booking-done';
  }
  public static get bookingDetails(): string {
    return this.baseUrl + '/bookings/booking-details';
  }
  public static get bookingPayment(): string {
    return this.baseUrl + '/bookings/booking-payment';
  }
  public static get bookingSuccess(): string {
    return this.baseUrl + '/bookings/booking-success';
  }
  public static get comingSoon(): string {
    return this.baseUrl + '/coming-soon';
  }
  public static get serviceInformation(): string {
    return this.baseUrl + '/service-information';
  }
  public static get customerBooking(): string {
    return this.baseUrl + '/customers/customer-booking';
  }
  public static get poseAi(): string {
    return this.baseUrl + '/customers/pose-ai';
  }
  public static get profile(): string {
    return this.baseUrl + '/user/profile';
  }
  public static get customerChat(): string {
    return this.baseUrl + '/customers/customer-chat';
  }
  public static get customerDashboard(): string {
    return this.baseUrl + '/customers/customer-dashboard';
  }
  public static get customerFavourite(): string {
    return this.baseUrl + '/customers/customer-favourite';
  }
  public static get customerProfile(): string {
    return this.baseUrl + '/customers/settings/customer-profile';
  }
  public static get customerReviews(): string {
    return this.baseUrl + '/customers/customer-reviews';
  }
  public static get customerWallet(): string {
    return this.baseUrl + '/customers/customer-wallet';
  }
  public static get customerWallets(): string {
    return this.baseUrl + '/admin/customer-wallet';
  }
  public static get providerWallets(): string {
    return this.baseUrl + '/admin/provider-wallet';
  }
  public static get providersales(): string {
    return this.baseUrl + '/admin/provider-sales';
  }
  public static get refundReport(): string {
    return this.baseUrl + '/admin/refund-report';
  }
  public static get registerReport(): string {
    return this.baseUrl + '/admin/register-report';
  }
  public static get salesReport(): string {
    return this.baseUrl + '/admin/sales-report';
  }
  public static get error404(): string {
    return this.baseUrl + '/error-page/error404';
  }
  public static get error500(): string {
    return this.baseUrl + '/error-page/error500';
  }
  public static get homeOne(): string {
    return this.baseUrl + '/home';
  }
  public static get home(): string {
    return this.baseUrl + '/home';
  }
  public static get homeTwo(): string {
    return this.baseUrl + '/home-two';
  }
  public static get homeThree(): string {
    return this.baseUrl + '/home-three';
  }
  public static get homeFour(): string {
    return this.baseUrl + '/home-four';
  }
  public static get homeFive(): string {
    return this.baseUrl + '/home-five';
  }
  public static get homeSix(): string {
    return this.baseUrl + '/home-six';
  }
  public static get homeSeven(): string {
    return this.baseUrl + '/home-seven';
  }
  public static get homeEight(): string {
    return this.baseUrl + '/home-eight';
  }
  public static get homeNine(): string {
    return this.baseUrl + '/home-nine';
  }
  public static get homeTen(): string {
    return this.baseUrl + '/home-ten';
  }
  public static get maintenance(): string {
    return this.baseUrl + '/maintenance';
  }
  public static get aboutUs(): string {
    return this.baseUrl + '/about-us';
  }
  public static get serviceRequest(): string {
    return this.baseUrl + '/service-request';
  }
  public static get blogDetails(): string {
    return this.baseUrl + '/blog/blog-details';
  }
  public static get blogGrid(): string {
    return this.baseUrl + '/blog/blog-grid';
  }
  public static get blogList(): string {
    return this.baseUrl + '/blog/blog-list';
  }
  public static get categories(): string {
    return this.baseUrl + '/categories';
  }
  public static get categories2(): string {
    return this.baseUrl + '/categories2';
  }
  public static get contactUs(): string {
    return this.baseUrl + '/contact-us';
  }
  public static get faq(): string {
    return this.baseUrl + '/faq';
  }
  public static get faqAdmin(): string {
    return this.baseUrl + '/admin/faq';
  }
  public static get termsCondition(): string {
    return this.baseUrl + '/terms-condition';
  }
  public static get sessionExpired(): string {
    return this.baseUrl + '/session-expired';
  }
  // public static get homeOne(): string {
  //   return this.baseUrl + '/home-one';
  // }
  public static get howItWorks(): string {
    return this.baseUrl + '/how-it-works';
  }
  public static get pricing(): string {
    return this.baseUrl + '/pricing';
  }
  public static get privacyPolicy(): string {
    return this.baseUrl + '/privacy-policy';
  }
  public static get services(): string {
    return this.baseUrl + '/services';
  }
  public static get service(): string {
    return this.baseUrl + '/admin/services';
  }
  public static get notification(): string {
    return this.baseUrl + '/providers/notification';
  }
  public static get use_notification(): string {
    return this.baseUrl + '/customers/notification';
  }
  public static get providersList(): string {
    return this.baseUrl + '/provider/providers-list';
  }
  public static get providerAvailability(): string {
    return this.baseUrl + '/providers/provider-availability';
  }
  public static get providerBooking(): string {
    return this.baseUrl + '/providers/provider-booking';
  }
  public static get providerChat(): string {
    return this.baseUrl + '/providers/provider-chat';
  }
  public static get providerCoupons(): string {
    return this.baseUrl + '/providers/provider-coupons';
  }
  public static get providerDashboard(): string {
    return this.baseUrl + '/providers/provider-dashboard';
  }
  public static get providerEnquiry(): string {
    return this.baseUrl + '/providers/provider-enquiry';
  }
  public static get providerEarnings(): string {
    return this.baseUrl + '/providers/provider-earnings';
  }
  public static get providerEarningsAdmin(): string {
    return this.baseUrl + '/admin/provider-earnings';
  }
  public static get providerHoliday(): string {
    return this.baseUrl + '/providers/provider-holiday';
  }
  public static get providerLeaveHistory(): string {
    return this.baseUrl + '/providers/provider-leave-history';
  }
  public static get providerTransaction(): string {
    return this.baseUrl + '/providers/provider-transaction';
  }
  public static get providerOffers(): string {
    return this.baseUrl + '/providers/provider-offers';
  }
  public static get providerPayout(): string {
    return this.baseUrl + '/providers/provider-payout';
  }
  public static get providerReviews(): string {
    return this.baseUrl + '/providers/provider-reviews';
  }
  public static get providerServices(): string {
    return this.baseUrl + '/providers/provider-services';
  }
  public static get providerSettings(): string {
    return this.baseUrl + '/admin/providers/provider-settings';
  }
  public static get providerSubscription(): string {
    return this.baseUrl + '/providers/provider-subscription';
  }
  public static get deleteAccount(): string {
    return this.baseUrl + '/providers/settings/delete-account';
  }
  public static get paymentSettings(): string {
    return this.baseUrl + '/providers/settings/payment-settings';
  }
  public static get providerAppointmentSettings(): string {
    return this.baseUrl + '/providers/settings/provider-appointment-settings';
  }
  public static get providerAccountsSettings(): string {
    return this.baseUrl + '/providers/settings/provider-accounts-settings';
  }
  public static get providerConnectedApps(): string {
    return this.baseUrl + '/providers/settings/provider-connected-apps';
  }
  public static get Verification(): string {
    return this.baseUrl + '/providers/settings/verification';
  }
  public static get providerNotifcations(): string {
    return this.baseUrl + '/providers/settings/provider-notifications';
  }
  public static get providerPlan(): string {
    return this.baseUrl + '/providers/settings/provider-plan';
  }
  public static get providerProfileSettings(): string {
    return this.baseUrl + '/providers/settings/provider-profile-settings';
  }
  public static get providerSecuritySettings(): string {
    return this.baseUrl + '/providers/settings/provider-security-settings';
  }
  public static get providerSocialProfile(): string {
    return this.baseUrl + '/providers/settings/provider-social-profile';
  }
  public static get customerList(): string {
    return this.baseUrl + '/providers/customer-list';
  }
  public static get customerGrid(): string {
    return this.baseUrl + '/providers/customer-grid';
  }
  public static get customerDetails(): string {
    return this.baseUrl + '/providers/customer-details';
  }
  public static get staffList(): string {
    return this.baseUrl + '/providers/staff-list';
  }
  public static get staffGrid(): string {
    return this.baseUrl + '/providers/staff-grid';
  }
  public static get staffDetails(): string {
    return this.baseUrl + '/providers/staff-details';
  }
  public static get search(): string {
    return this.baseUrl + '/services/search';
  }
  public static get serviceGrid(): string {
    return this.baseUrl + '/services/service-grid';
  }
  public static get serviceList(): string {
    return this.baseUrl + '/services/service-list';
  }
  public static get securitySettings(): string {
    return this.baseUrl + '/customers/settings/security-settings';
  }
  public static get providerDetails(): string {
    return this.baseUrl + '/provider/provider-details';
  }
  public static get dashboard(): string {
    return this.baseUrl + '/admin/dashboard';
  }
  public static get abuseReports(): string {
    return this.baseUrl + '/admin/abuse-reports';
  }
  public static get localization(): string {
    return this.baseUrl + '/admin/settings/localization';
  }
  public static get adminNotification(): string {
    return this.baseUrl + '/admin/admin-notification';
  }
  public static get account(): string {
    return this.baseUrl + '/admin/account';
  }
  public static get accountSettings(): string {
    return this.baseUrl + '/admin/settings/account-settings';
  }
  public static get signin(): string {
    return this.baseUrl + '/admin/signin';
  }
  public static get security(): string {
    return this.baseUrl + '/admin/settings/security';
  }
  public static get socialProfiles(): string {
    return this.baseUrl + '/admin/settings/social-profiles';
  }
  public static get notifications(): string {
    return this.baseUrl + '/admin/settings/notifications';
  }
  public static get connectedApps(): string {
    return this.baseUrl + '/customers/settings/connected-apps';
  }
  public static get adminConnectedApps(): string {
    return this.baseUrl + '/admin/settings/connected-apps';
  }
  public static get siteInformation(): string {
    return this.baseUrl + '/admin/settings/site-information';
  }
  public static get seoSettings(): string {
    return this.baseUrl + '/admin/settings/seo-settings';
  }
  public static get preferenceSettings(): string {
    return this.baseUrl + '/admin/settings/preference-settings';
  }
  public static get appearance(): string {
    return this.baseUrl + '/admin/settings/appearance';
  }
  public static get headerSettings(): string {
    return this.baseUrl + '/admin/settings/header-settings';
  }
  public static get footerSettings(): string {
    return this.baseUrl + '/admin/settings/footer-settings';
  }
  public static get authentication(): string {
    return this.baseUrl + '/admin/authentication';
  }
  public static get socialAuthentication(): string {
    return this.baseUrl + '/admin/settings/social-authentication';
  }
  public static get language(): string {
    return this.baseUrl + '/admin/settings/language';
  }
  public static get emailSettings(): string {
    return this.baseUrl + '/admin/settings/email-settings';
  }
  public static get smsSettings(): string {
    return this.baseUrl + '/admin/settings/sms-settings';
  }
  public static get gdprSettings(): string {
    return this.baseUrl + '/admin/settings/gdpr-settings';
  }
  public static get paymentGateways(): string {
    return this.baseUrl + '/admin/settings/payment-gateways';
  }
  public static get paymentSetting(): string {
    return this.baseUrl + '/admin/settings/payment-settings';
  }
  public static get taxRates(): string {
    return this.baseUrl + '/admin/settings/tax-rates';
  }
  public static get currencies(): string {
    return this.baseUrl + '/admin/settings/currencies';
  }
  public static get serviceSettings(): string {
    return this.baseUrl + '/admin/settings/service-settings';
  }
  public static get adminProviderSetting(): string {
    return this.baseUrl + '/admin/settings/provider-settings';
  }
  public static get storageSettings(): string {
    return this.baseUrl + '/admin/settings/storage-settings';
  }
  public static get banIpAddress(): string {
    return this.baseUrl + '/admin/settings/ban-ip-address';
  }
  public static get cronjob(): string {
    return this.baseUrl + '/admin/settings/cronjob';
  }
  public static get systemBackup(): string {
    return this.baseUrl + '/admin/settings/system-backup';
  }
  public static get databaseBackup(): string {
    return this.baseUrl + '/admin/settings/database-backup';
  }
  public static get systemInformation(): string {
    return this.baseUrl + '/admin/settings/system-information';
  }
  public static get authenticationSettings(): string {
    return this.baseUrl + '/admin/settings/authentication-settings';
  }
  public static get adminEarnings(): string {
    return this.baseUrl + '/admin/admin-earnings';
  }
  public static get subCategories(): string {
    return this.baseUrl + '/admin/sub-categories';
  }
  public static get addSubcategories(): string {
    return this.baseUrl + '/admin/add-subcategories';
  }
  public static get editSubcategories(): string {
    return this.baseUrl + '/admin/edit-subcategories';
  }
  public static get category(): string {
    return this.baseUrl + '/admin/categories';
  }
  public static get userwallet(): string {
    return this.baseUrl + '/user/wallet';
  }
  public static get wallet(): string {
    return this.baseUrl + '/admin/wallet';
  }
  public static get userProviders(): string {
    return this.baseUrl + '/admin/users/user-providers';
  }
  public static get userCustomers(): string {
    return this.baseUrl + '/admin/users/user-customers';
  }
  public static get testimonials(): string {
    return this.baseUrl + '/admin/testimonials';
  }
  public static get banktransferlist(): string {
    return this.baseUrl + '/admin/banktransferlist';
  }
  public static get smsTemplates(): string {
    return this.baseUrl + '/admin/sms-templates';
  }
  public static get salesTransactions(): string {
    return this.baseUrl + '/admin/sales-transactions';
  }
  public static get rolesPermissions(): string {
    return this.baseUrl + '/admin/roles-permissions';
  }
  public static get review(): string {
    return this.baseUrl + '/admin/reviews/review';
  }
  public static get reviewType(): string {
    return this.baseUrl + '/admin/reviews/review-type';
  }
  public static get refundRequest(): string {
    return this.baseUrl + '/admin/refund-request';
  }
  public static get payoutRequest(): string {
    return this.baseUrl + '/admin/payouts/payout-request';
  }
  public static get pagesList(): string {
    return this.baseUrl + '/admin/pages/pages-list';
  }
  public static get pageList(): string {
    return this.baseUrl + '/admin/pages/page-list';
  }
  public static get addPage(): string {
    return this.baseUrl + '/admin/pages/add-page';
  }
  public static get membershipTransaction(): string {
    return this.baseUrl + '/admin/membership-transaction';
  }
  public static get marketingService(): string {
    return this.baseUrl + '/admin/marketing-service';
  }
  public static get marketingNewsletter(): string {
    return this.baseUrl + '/admin/marketing-newsletter';
  }
  public static get marketingFeatured(): string {
    return this.baseUrl + '/admin/marketing-featured';
  }
  public static get marketingCoupons(): string {
    return this.baseUrl + '/admin/marketing-coupons';
  }
  public static get states(): string {
    return this.baseUrl + '/admin/location/states';
  }
  public static get countries(): string {
    return this.baseUrl + '/admin/location/countries';
  }
  public static get cities(): string {
    return this.baseUrl + '/admin/location/cities';
  }
  public static get emailTemplates(): string {
    return this.baseUrl + '/admin/email-templates';
  }
  public static get membership(): string {
    return this.baseUrl + '/admin/membership';
  }
  public static get userList(): string {
    return this.baseUrl + '/admin/users/user-list';
  }
  public static get cachesystem(): string {
    return this.baseUrl + '/admin/cachesystem';
  }
  public static get deleteAccountRequests(): string {
    return this.baseUrl + '/admin/delete-account-requests';
  }
  public static get contactMessages(): string {
    return this.baseUrl + '/admin/contact-messages';
  }
  public static get cashOnDelivery(): string {
    return this.baseUrl + '/admin/cash-on-delivery';
  }
  public static get allBlog(): string {
    return this.baseUrl + '/admin/blog/all-blog';
  }
  public static get addBlog(): string {
    return this.baseUrl + '/admin/blog/add-blog';
  }
  public static get blogsComments(): string {
    return this.baseUrl + '/admin/blog/blogs-comments';
  }
  public static get editBlog(): string {
    return this.baseUrl + '/admin/blog/edit-blog';
  }
  public static get editBlogCategories(): string {
    return this.baseUrl + '/admin/blog/edit-blog-categories';
  }
  public static get addBlogCategories(): string {
    return this.baseUrl + '/admin/blog/add-blog-categories';
  }
  public static get inactiveBlog(): string {
    return this.baseUrl + '/admin/blog/inactive-blog';
  }
  public static get pendingBlog(): string {
    return this.baseUrl + '/admin/blog/pending-blog';
  }
  public static get blogsCategories(): string {
    return this.baseUrl + '/admin/blog/blogs-categories';
  }
  public static get announcements(): string {
    return this.baseUrl + '/admin/announcements';
  }
  public static get membershipAddons(): string {
    return this.baseUrl + '/admin/membership-addons';
  }
  public static get chat(): string {
    return this.baseUrl + '/admin/chat';
  }
  public static get payoutSettings(): string {
    return this.baseUrl + '/admin/payouts/payout-settings';
  }
  public static get addAnnouncement(): string {
    return this.baseUrl + '/admin/add-announcement';
  }
  public static get editAnnouncement(): string {
    return this.baseUrl + '/admin/edit-announcement';
  }
  public static get approvedTransferlist(): string {
    return this.baseUrl + '/admin/approved-transferlist';
  }
  public static get pendingTransferlist(): string {
    return this.baseUrl + '/admin/pending-transferlist';
  }
  public static get successfulTransferlist(): string {
    return this.baseUrl + '/admin/successful-transferlist';
  }
  public static get pluginsManager(): string {
    return this.baseUrl + '/admin/plugins-manager';
  }
  public static get availablePlugins(): string {
    return this.baseUrl + '/admin/available-plugins';
  }
  public static get viewService(): string {
    return this.baseUrl + '/admin/view-services';
  }
  public static get rejectedTransferlist(): string {
    return this.baseUrl + '/admin/rejected-transferlist';
  }
  public static get emailStorageSettings(): string {
    return this.baseUrl + '/admin/email-storage-settings';
  }
  public static get banktransfer(): string {
    return this.baseUrl + '/admin/banktransfer';
  }
  public static get pendingBooking(): string {
    return this.baseUrl + '/admin/pending-booking';
  }
  public static get inprogressBooking(): string {
    return this.baseUrl + '/admin/inprogress-booking';
  }
  public static get completedBooking(): string {
    return this.baseUrl + '/admin/completed-booking';
  }
  public static get cancelledBooking(): string {
    return this.baseUrl + '/admin/cancelled-booking';
  }
  public static get addCategories(): string {
    return this.baseUrl + '/admin/add-categories';
  }
  public static get editCategories(): string {
    return this.baseUrl + '/admin/edit-categories';
  }
  public static get contactMessagesView(): string {
    return this.baseUrl + '/admin/contact-messages-view';
  }
  public static get currencySettings(): string {
    return this.baseUrl + '/admin/currency-settings';
  }
  public static get editUser(): string {
    return this.baseUrl + '/admin/users/edit-user';
  }
  public static get editProvider(): string {
    return this.baseUrl + '/admin/edit-provider';
  }
  public static get editService(): string {
    return this.baseUrl + '/admin/edit-service';
  }
  public static get deletedServices(): string {
    return this.baseUrl + '/admin/deleted-services';
  }
  public static get addServices(): string {
    return this.baseUrl + '/admin/add-service';
  }
  public static get addUsers(): string {
    return this.baseUrl + '/admin/add-user';
  }
  public static get pendingServices(): string {
    return this.baseUrl + '/admin/pending-services';
  }
  public static get inactiveServices(): string {
    return this.baseUrl + '/admin/inactive-services';
  }
  public static get active(): string {
    return this.baseUrl + '/admin/active';
  }
  public static get addReviewtype(): string {
    return this.baseUrl + '/admin/reviews/add-reviewtype';
  }
  public static get editReviewtype(): string {
    return this.baseUrl + '/admin/reviews/edit-reviewtype';
  }
  public static get rolePermission(): string {
    return this.baseUrl + '/admin/role-permission';
  }
  public static get changePassword(): string {
    return this.baseUrl + '/admin/change-password';
  }
  public static get deviceManagement(): string {
    return this.baseUrl + '/admin/device-management';
  }
  public static get loginActivity(): string {
    return this.baseUrl + '/admin/login-activity';
  }
  public static get editEmailTemplates(): string {
    return this.baseUrl + '/admin/edit-email-templates';
  }
  public static get phpMail(): string {
    return this.baseUrl + '/admin/php-mail';
  }
  public static get smtp(): string {
    return this.baseUrl + '/admin/smtp';
  }
  public static get addCity(): string {
    return this.baseUrl + '/admin/location/add-city';
  }
  public static get editCity(): string {
    return this.baseUrl + '/admin/location/edit-city';
  }
  public static get bookings(): string {
    return this.baseUrl + '/admin/booking';
  }
  public static get serviceDetails(): string {
    return this.baseUrl + '/services/service-details';
  }
  public static get serviceDetailstwo(): string {
    return this.baseUrl + '/services/service-details-two';
  }
  public static get addState(): string {
    return this.baseUrl + '/admin/location/add-state';
  }
  public static get editState(): string {
    return this.baseUrl + '/admin/edit-state';
  }
  public static get walletHistory(): string {
    return this.baseUrl + '/admin/wallet-history';
  }
  public static get addProvider(): string {
    return this.baseUrl + '/admin/users/add-provider';
  }
  public static get addUser(): string {
    return this.baseUrl + '/admin/users/add-user';
  }
  public static get addCustomer(): string {
    return this.baseUrl + '/admin/users/add-customer';
  }
  public static get editCustomer(): string {
    return this.baseUrl + '/admin/users/edit-customer';
  }
  public static get addTestimonials(): string {
    return this.baseUrl + '/admin/add-testimonials';
  }
  public static get editTestimonials(): string {
    return this.baseUrl + '/admin/edit-testimonials';
  }
  public static get facebookApi(): string {
    return this.baseUrl + '/admin/facebook-api';
  }
  public static get googleApi(): string {
    return this.baseUrl + '/admin/google-api';
  }
  public static get nexmo(): string {
    return this.baseUrl + '/admin/nexmo';
  }
  public static get editCountries(): string {
    return this.baseUrl + '/admin/location/edit-countries';
  }
  public static get addCountries(): string {
    return this.baseUrl + '/admin/location/add-countries';
  }
  public static get addCoupon(): string {
    return this.baseUrl + '/providers/add-coupon';
  }
  public static get editCoupon(): string {
    return this.baseUrl + '/admin/edit-coupon';
  }
  public static get editOffer(): string {
    return this.baseUrl + '/admin/edit-offer';
  }
  public static get addMembership(): string {
    return this.baseUrl + '/admin/add-membership';
  }
  public static get createMenu(): string {
    return this.baseUrl + '/admin/create-menu';
  }
  public static get editManagement(): string {
    return this.baseUrl + '/admin/edit-management';
  }
  public static get editPage(): string {
    return this.baseUrl + '/admin/edit-page';
  }
  public static get paypal(): string {
    return this.baseUrl + '/admin/pages/paypal';
  }
  public static get addPayout(): string {
    return this.baseUrl + '/admin/payouts/add-payout';
  }
  public static get editSmsTemplate(): string {
    return this.baseUrl + '/admin/edit-sms-template';
  }
  public static get awsStorage(): string {
    return this.baseUrl + '/admin/aws-storage';
  }
  public static get loginPhone(): string {
    return this.baseUrl + '/admin/login-phone';
  }
  public static get loginPhone1(): string {
    return this.baseUrl + '/admin/login-phone1';
  }
  public static get loginEmail(): string {
    return this.baseUrl + '/admin/login-email';
  }
  public static get providerEditService(): string {
    return this.baseUrl + '/providers/provider-edit-service';
  }
  public static get providerServicesList(): string {
    return this.baseUrl + '/providers/provider-services-list';
  }
  public static get providerSignupPayment(): string {
    return this.baseUrl + '/provider-signup-payment';
  }
  public static get customerNotifications(): string {
    return this.baseUrl + '/customers/settings/customer-notification';
  }
  public static get customerBookingCalendar(): string {
    return this.baseUrl + '/customers/customer-booking-calendar';
  }
  public static get invoice(): string {
    return this.baseUrl + '/customers/invoice';
  }
  public static get orders(): string {
    return this.baseUrl + '/customers/orders';
  }
  public static get searchList(): string {
    return this.baseUrl + '/search/list';
  }
  public static get providerAddons(): string {
    return this.baseUrl + '/providers/provider-addons';
  }
  public static get addSubscription(): string {
    return this.baseUrl + '/providers/add-subscription';
  }
  public static get providerBookDetails(): string {
    return this.baseUrl + '/providers/provider-book-details';
  }
  public static get providerChangePassword(): string {
    return this.baseUrl + '/providers/provider-change-password';
  }
  public static get providerDeviceManagement(): string {
    return this.baseUrl + '/providers/provider-device-management';
  }
  public static get customerDeviceManagement(): string {
    return this.baseUrl + '/customers/settings/user-device-management';
  }
  public static get customerLoginActivity(): string {
    return this.baseUrl + '/customers/settings/user-login-activity';
  }
  public static get providerLoginActivity(): string {
    return this.baseUrl + '/providers/provider-login-activity';
  }
  public static get forgetPassword(): string {
    return this.baseUrl + '/admin/forget-password';
  }
  public static get customerNotification(): string {
    return this.baseUrl + '/customers/notification';
  }
  public static get booking2(): string {
    return this.baseUrl + '/bookings/user-booking';
  }
  public static get bookService(): string {
    return this.baseUrl + '/bookings/book-service';
  }
  public static get appointmentSettings(): string {
    return this.baseUrl + '/admin/settings/appointment-settings';
  }
  public static get typographySettings(): string {
    return this.baseUrl + '/admin/settings/typography-settings';
  }
  public static get calendarSettings(): string {
    return this.baseUrl + '/admin/settings/calendar-settings';
  }
  public static get installer(): string {
    return this.baseUrl + '/installer';
  }
  public static get verificationRequest(): string {
    return this.baseUrl + '/admin/verification-request';
  }
  ///////////////////////////dashboard
  public static get addSportFacility(): string {
    return this.baseUrl + '/admin/sport-facility';
  }

  public static get listSportFacility(): string {
    return this.baseUrl + '/admin/list-sport-facility';
  }
  public static get editSportFacility(): string {
    return this.baseUrl + '/admin/edit-sport-facility';
  }
  public static get addPromotion(): string {
    return this.baseUrl + '/admin/promotion/add';
  }
  public static get listPromotion(): string {
    return this.baseUrl + '/admin/promotion/list';
  }
  public static get editPromotion(): string {
    return this.baseUrl + '/admin/promotion/edit';
  }
  public static get listSubscription(): string {
    return this.baseUrl + '/admin/subscription';
  }
  public static get addEvent(): string {
    return this.baseUrl + '/admin/event/add';
  }
  
  public static get listEvent(): string {
    return this.baseUrl + '/admin/event/list';
  }
  public static get listEventRegistration(): string {
    return this.baseUrl + '/admin/event/registrations'; 
  }
  
  
  public static get editEvent(): string {
    return this.baseUrl + '/admin/event/edit';
  }
  ///////////frontend
  public static get userSportFacility(): string {
    return this.baseUrl + '/sport-facility';
  }
  public static get sportFacilityDetails(): string {
    return this.baseUrl + '/sport-facility/details';
  }
  public static get userPromotion(): string {
    return this.baseUrl + '/promotion';
  }
  public static get userSubscription(): string {
    return this.baseUrl + '/subscription/my-subscriptions';
  }
  public static get userEvents(): string {
    return this.baseUrl + '/events';
  }
  
  public static get registrationEvent(): string {
    return this.baseUrl + '/events/list-user-registrations';
  }

  
  ////// diet plan routes ////////////////////////////
  public static get dietPlan(): string {
    return this.baseUrl + '/diet-plan/generate-diet-plan';
  }
 
  ///////////// diet plan   admin dashboard ///////////// 
  
  public static get adminDietPlansList(): string {
    return this.baseUrl + '/admin/diet-plan/diet-plan-list';
  }
  public static get dietPlanDetails (): string {
    return this.baseUrl + '/admin/diet-plan/diet-plan-details';
  }
  public static get adminPreferences (): string {
    return this.baseUrl + '/admin/diet-plan/preferences';
  }
  // public static get adminRequestList(): string {
  //   return this.baseUrl + '/admin/buddy/requests-list';
  // }
  // public static get adminMatchList(): string {
  //   return this.baseUrl + '/admin/buddy/matches-list';
  // }
 

  public static get workoutPlans(): string {
    return this.baseUrl + '/workouts/workout-plan';
  }
    public static get workoutPlansList(): string {
      return this.baseUrl + '/workouts/plans/list';
    }
  public static get createWorkoutPlan(): string {
    return this.baseUrl + '/workouts/plans/create';
  }
  public static get workoutWizard(): string {
    return this.baseUrl + '/workouts/wizard';
  }
  public static get trainingSessions(): string {
    return this.baseUrl + '/workouts/training-session';
  }
  public static get exercises(): string {
    return this.baseUrl + '/workouts/exercice';
  }
  public static get progressTracker(): string {

    return this.baseUrl + '/workouts/progress-tracker';
  }
  public static get adminWorkout(): string {
    return this.baseUrl + '/admin/workout';
  }
  public static get adminWorkoutPlansList(): string {
    return this.baseUrl + '/admin/workout/workout-plans-list';
  }
  public static get adminTrainingSessionList(): string {
    return this.baseUrl + '/admin/workout/training-session-list';
  }
  public static get adminExercicesList(): string {
    return this.baseUrl + '/admin/workout/exercices-list';
  }
}
  
