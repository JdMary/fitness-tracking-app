export interface providerPlan {
  id: number;
  payoutDate: string;
  planDetails: string;
  amount: string;
  invoice: string;
  status: string;
}

export interface providerPayout {
  id: number;
  payoutDate: string;
  amount: string;
  refunds: string;
  fees: string;
  total: string;
  status: string;
  paymentProcessed: string;
  color: boolean;
  background: boolean;
  paymentMethod: boolean;
}
export interface providerOffers {
  id: number;
  img: string;
  service: string;
  amount: string;
  offer: string;
  offerPrice: string;
  date: string;
  endDate: string;
}
export interface abuseReports {
  id: number;
  provider: string;
  reportedByUser: string;
  description: string;
  date: string;
  img1: string;
  img2: string;
}
export interface salesReports {
  id: number;
  service: string;
  provider: string;
  sales: string;
  amount: string;
  img: string;
}
export interface providerWallet {
  id: number;
  service: string;
  provider: string;
  sales: string;
  amount: string;
  img: string;
  status: string;
  date: string;
}
export interface registerReports {
  id: number;
  provider: string;
  register: string;
  status: string;
}
export interface refundReports {
  id: number;
  service: string;
  provider: string;
  register: string;
  customer: string;
  status: string;
  amount: string;
  requestedon: string;
  refundedon: string;
  img: string;
}
export interface customerwallet {
  id: number;
  provider: string;
  user: string;
  customer: string;
  status: string;
  amount: string;
  requestedon: string;
  refundedon:string;
  img: string;
  date: string;
  reason: string
}
export interface customerWallet {
  id: number;
  provider: string;
  user: string;
  amount: string;
  reason: string;
  status: string;
  date: string;
}
export interface approvedTransferlist {
  id: number;
  service: string;
  customer: string;
  receipt: string;
  description: string;
  date: string;
  status: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface contactMessages {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  img: string;
}
export interface announcements {
  id: number;
  subject: string;
  message: string;
  sendTo: string;
  date: string;
}
export interface adminEarnings {
  id: number;
  service: string;
  provider: string;
  paymentType: string;
  amount: string;
  commissionRate: string;
  status: string;
  earnedAmount: string;
  date: string;
  img1: string;
  img2: string;
}
export interface providerSales{
  id: number;
  provider: string;
  amount: string;
  date: string;
}
export interface cashOnDelivery {
  id: number;
  service: string;
  providerName: string;
  userName: string;
  amount: string;
  status: string;
  date: string;
  serviceStatus: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface cancelledBooking {
  id: number;
  date: string;
  bookingTime: string;
  provider: string;
  user: string;
  service: string;
  amount: string;
  status: string;
  dateTime: string;
  img1: string;
  img2: string;
  img3: string;
  matSelect: string;
}
export interface blogsComments {
  id: number;
  userName: string;
  userEmail: string;
  phone: string;
  content: string;
  createdAt: string;
  img: string;
}
export interface blogsCategories {
  id: number;
  category: string;
  language: string;
  date: string;
  img: string;
}
export interface bankTransferlist {
  id: number;
  service: string;
  customer: string;
  receipt: string;
  description: string;
  date: string;
  status: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface loginActivity {
  id: number;
  date: string;
  device: string;
  ipAddress: string;
  location: string;
  status: string;
}
export interface providerEarnings {
  id: number;
  img: string;
  service: string;
  earnedAmount: string;
  date: string;
}
export interface providersDeviceManagement {
  id: number;
  date: string;
  device: string;
  ipAddress: string;
  location: string;
  status: string;
}
export interface providerCoupons {
  id: number;
  name: string;
  code: string;
  type: string;
  discount: string;
  limit: string;
  used: string;
  validDate: string;
  text: string;
  servicesName: string;
  status: string;
}

export interface successfulTransferlist {
  id: number;
  service: string;
  customer: string;
  receipt: string;
  description: string;
  date: string;
  status: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface systemBackup {
  id: number;
  fileName: string;
  date: string;
}
export interface completedBooking {
  id: number;
  date: string;
  bookingTime: string;
  provider: string;
  user: string;
  service: string;
  amount: string;
  status: string;
  dateTime: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface categories {
  id: number;
  category: string;
  categorySlug: string;
  date: string;
  img: string;
}
export interface contactMessagesView {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
  img: string;
}
export interface deleteAccountRequests {
  id: number;
  userId: string;
  userName: string;
  email: string;
  requisitionDate: string;
  deleteRequestDate: string;
  action: string;
  img: string;
}
export interface deletedServices {
  id: number;
  service: string;
  category: string;
  subCategory: string;
  amount: string;
  date: string;
  status: string;
  createdBy: string;
  img: string;
}
export interface emailTemplates {
  id: number;
  referenceId: string;
  emailtitle: string;
  date: string;
  sendTo: string;
  img: string;
}
export interface faq {
  id: number;
  title: string;
  category: string;
  details: string;
}
export interface inactiveServices {
  id: number;
  service: string;
  category: string;
  subCategory: string;
  amount: string;
  date: string;
  status: string;
  createdBy: string;
  img: string;
}
export interface inprogressBooking {
  id: number;
  date: string;
  bookingTime: string;
  provider: string;
  user: string;
  service: string;
  amount: string;
  status: string;
  dateTime: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface states {
  id: number;
  countryCode: string;
  countryName: string;
  stateName: string;
  img: string;
  cityName: string;
  countryId: string;
}
export interface marketingCoupons {
  id: number;
  name: string;
  code: string;
  type: string;
  discount: string;
  limit: string;
  used: string;
  validDate: string;
  servicesName: string;
  status: string;
  customer: string;
}
export interface marketingFeatured {
  id: number;
  service: string;
  servicesStatus: string;
  category: string;
  amount: string;
  providerName: string;
  status: string;
  email: string;
  img1: string;
  img2: string;
}
export interface marketingNewsletter {
  id: number;
  name: string;
  subcribedDate: string;
  lastActivity: string;
  email: string;
  img: string;
}
export interface marketingServices {
  id: number;
  service: string;
  userName: string;
  amount: string;
  offer: string;
  offerPrice: string;
  date: string;
  endDate: string;
  email: string;
  img1: string;
  img2: string;
}
export interface membershipTransaction {
  id: number;
  providerName: string;
  subscription: string;
  amount: string;
  subscriptionDurations: string;
  startDate: string;
  endDate: string;
  img: string;
}
export interface pageList {
  id: number;
  pages: string;
  pagesSlug: string;
}

export interface menuManagement {
  id: number;
  title: string;
  createdAt: string;
  status: string;
}
export interface pagesList {
  id: number;
  title: string;
  language: string;
  location: string;
  date: string;
}
export interface payoutRequest {
  id: number;
  name: string;
  payoutMethod: string;
  amount: string;
  status: string;
  createdAt: string;
  img: string;
  matSelect: string;
}
export interface pendingBooking {
  id: number;
  date: string;
  bookingTime: string;
  provider: string;
  user: string;
  service: string;
  amount: string;
  status: string;
  dateTime: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface pendingServices {
  id: number;
  service: string;
  category: string;
  subCategory: string;
  amount: string;
  date: string;
  status: string;
  createdBy: string;
  img: string;
}
export interface pendingTransferlist {
  id: number;
  service: string;
  customer: string;
  receipt: string;
  description: string;
  date: string;
  status: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface adminProviderEarnings {
  id: number;
  service: string;
  amount: string;
  status: string;
  earnedAmount: string;
  date: string;
  img: string;
}
export interface refundRequest {
  id: number;
  providerName: string;
  userName: string;
  service: string;
  amount: string;
  date: string;
  deletedReason: string;
  status: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface rejectedTransferlist {
  id: number;
  service: string;
  customer: string;
  receipt: string;
  description: string;
  date: string;
  status: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface review {
  id: number;
  date: string;
  provider: string;
  user: string;
  service: string;
  type: string;
  ratings: string;
  comments: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface reviewType {
  id: number;
  reviewType: string;
}
export interface rolePermission {
  id: number;
  modules: string;
  subModules: string;
}
export interface rolesPermissions {
  id: number;
  name: string;
  created: string;
  action1: string;
  action2: string;
}
export interface salesTransactions {
  id: number;
  customer: string;
  customerEmail: string;
  provider: string;
  providerEmail: string;
  service: string;
  amount: string;
  discount: string;
  tax: string;
  date: string;
  paymentType: string;
  status: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface services {
  id: number;
  service: string;
  category: string;
  subCategory: string;
  amount: string;
  date: string;
  status: string;
  createdBy: string;
  img: string;
  img1: string;
}
export interface currencies {
  id: number;
  currencyName: string;
  code: string;
  symbol: string;
  exchangeRate: string;
}
export interface taxRates {
  id: number;
  taxName: string;
  taxPercentage: string;
}
export interface smsTemplates {
  id: number;
  referenceId: string;
  smsTitle: string;
  date: string;
  sendTo: string;
  img: string;
}
export interface subCategories {
  id: number;
  subCategory: string;
  subCategorySlug: string;
  category: string;
  date: string;
  img: string;
}
export interface testimonials {
  id: number;
  userName: string;
  userEmail: string;
  content: string;
  createAt: string;
  status: string;
  img: string;
}
export interface userProvider {
  id: number;
  customerName: string;
  mobile: string;
  regDate: string;
  lastActivity: string;
  status: string;
  email: string;
  img: string;
}
export interface userList {
  id: number;
  name: string;
  mobile: string;
  role: string;
  lastActivity: string;
  created: string;
  status: string;
  email: string;
  img: string;
}
export interface userProvider {
  id: number;
  customerName: string;
  mobile: string;
  regDate: string;
  lastActivity: string;
  status: string;
  email: string;
  img: string;
}
export interface wallet {
  id: number;
  userName: string;
  email: string;
  phone: string;
  balance: string;
  action: string;
  img: string;
}
export interface verificationRequest {
  id: number;
  userName: string;
  documentType: string;
  documentName: string;
  reason1: string;
  status: string;
  reason2: string;
}
export interface customerlist {
  id: number;
  customerId: number;
  customerName: string;
  phone: string;
  createdOn: string;
  payments: string;
  totalBookings:string;
  lastBooking:string;
  status:string;
  img:string;
}
export interface stafflist {
  id: number;
  staffId: number;
  staffsName: string;
  createdOn: string;
  noOfServices: string;
  totalBookings:string;
  status:string;
  img:string;
}
export interface providerEnquiry {
  id: number;
  name: number;
  enquiredService: string;
  email: string;
  phoneNumber: string;
  date: string;
  img:string;
}

