export interface url {
  url: string;
}
export interface servicesList {
  img: string;
  service: string;
  rating: string;
  title: string;
  country: string;
  action1: string;
  action2: string;
  content: string;
  like: boolean;
}

export interface chargesArray {
  chargesArray: string;
}
export interface recentBooking {
  img1: string;
  services: string;
  booking: string;
  dateTime: string;
  amount: string;
  price: string;
  text: string;
  location: string;
  place: string;
  customer: string;
  img2: string;
  name: string;
  mail: string;
  number: string;
  btn1: string;
  btn2: string;
  like: boolean;
  details?: string;
  button1?: string;
  button2?: string;
  btn3?: string;
  review?: string;
}
export interface serviceList {
  work: string;
  service: string;
  country: string;
  points: string;
  price1: string;
  price2: string;
  img1: string;
  img2: string;
  like: boolean;
}
export interface serviceGrid {
  work: string;
  service: string;
  country: string;
  points: string;
  price1: string;
  img1: string;
  img2: string;
  like: boolean;
  price2?: string;
}
export interface search {
  work: string;
  service: string;
  country: string;
  points: string;
  price1: string;
  img1: string;
  img2: string;
  like: boolean;
  price2?: string;
}

export interface searchList {
  img1: string;
  img2: string;
  service: string;
  title: string;
  country: string;
  rating: string;
  price1: string;
  price2?: string;
  content: string;
  like?: boolean;
}
export interface indexServices {
  img1: string;
  img2: string;
  country: string;
  points: string;
  newPrice?: string;
  oldPrice?: string;
  title: string;
  work: string;
  number?: string;
  like: boolean;
  name?: string;
}
export interface clientFeedbacks {
  heading?: string;
  para: string;
  name: string;
  role: string;
  img: string;
}
export interface partners {
  img: string;
}
export interface blogGrid {
  work: string;
  date: string;
  img1: string;
  img2: string;
  role: string;
  para1: string;
  para2: string;
}
export interface clientFeedbacks {
  para: string;
  name: string;
  role: string;
  img: string;
}
export interface featuredCategories {
  img1: string;
  img2: string;
  title: string;
  price2?: string;
  price1?: string;
  country?: string;
  num?: string;
  content?: string;
  name?: string;
  like?: boolean;
}
export interface Header {
  header: {
    tittle: string;
    showAsTab: boolean;
    separateRoute: boolean;
    menu: Array<{
      menuValue: string;
      routes?: string;
      hasSubRoute: boolean;
      showSubRoute: boolean;
      subMenus: Array<{
        menuValue: string;
        routes?: string;
        hasSubRoute: boolean;
        showSubRoute: boolean;
        subMenus: never[];
        last?: string;
      }>;
      last?: string;
    }>;
  }[];
}
export interface popularService {
  img1: string;
  img2: string;
  title: string;
  name: string;
  content: string;
  num: string;
  country: string;
  rating: string;
  price: string;
  like?: boolean;
}
export interface topProvider {
  img1: string;
  name: string;
  rate: string;
  price: string;
  title: string;
  like?: boolean;
}
export interface testimonialProvider {
  para: string;
  name: string;
  img: string;
}
export interface service {
  para: string;
  img: string;
  mechanics?: string;
}
export interface mechanics {
  heading: string;
  img: string;
  name: string;
  rating: string;
}
export interface blogData {
  img1: string;
  img2: string;
  date: string;
  title: string;
  para: string;
  name: string;
  heading: string;
}
export interface customersReview {
  heading: string;
  country: string;
  para: string;
  img: string;
}
export interface additionalService {
  img1: string;
  img2: string;
  mechanics: string;
  para: string;
}
export interface latestBlogs {
  img1: string;
  img2: string;
  heading: string;
  para: string;
  name: string;
  content: string;
}
export interface caters {
  img1: string;
  img2: string;
  content: string;
  reviews: string;
  name: string;
  km: string;
}
export interface featuredCaters {
  rating: string;
  caters: string;
  country: string;
  para: string;
  caterings: string;
  status: string;
  price: string;
  img: string;
  status2?: string;
  status3?: string;
}
export interface topCaters {
  img1: string;
  img2: string;
  para: string;
  caterings: string;
  status: string;
  price1: string;
  price2: string;
  country: string;
  title: string;
  like: boolean;
}
export interface usefulBlogs {
  img1: string;
  img2: string;
  para: string;
  para2: string;
  name: string;
}
export interface topExperts {
  img: string;
  name: string;
  work: string;
  price: string;
  ratings: string;
}
export interface service5 {
  img1: string;
  img2: string;
  rating: string;
  title: string;
  content: string;
  country: string;
  price1: string;
  price2: string;
  like: boolean;
}
export interface testimonialsData {
  img: string;
  heading: string;
  para: string;
  name: string;
  role: string;
}
export interface blogs {
  img1: string;
  img2: string;
  content: string;
  para: string;
  date: string;
}
export interface serviceWidget {
  rating: string;
  heading: string;
  title: string;
  country: string;
  price1: string;
  price2: string;
  service: string;
  img1: string;
  img2: string;
  like: boolean;
}
export interface customerFavourite {
  img1: string;
  img2: string;
  country: string;
  points?: string;
  newPrice: string;
  name?:string;
  oldPrice?: string;
  title: string;
  work: string;
  like: boolean;
}
export interface customerBooking {
  img1: string;
  services: string;
  booking: string;
  dateTime: string;
  amount: string;
  price: string;
  text: string;
  location: string;
  place: string;
  customer: string;
  img2: string;
  name: string;
  mail: string;
  number: string;
  btn1: string;
  btn2: string;
  like: boolean;
  details?: string;
  review?: string;
  btn3?: string;
  button2?: string;
  button1?: string;
}
export interface viewServices {
  img: string;
  gallery: string;
}
export interface socialProfiles {
  content: string;
  url: string;
}
export interface languages {
  id: string;
  language: string;
  code: string;
  img: string;
}
export interface headerMenu {
  content: string;
  link: string;
}
export interface widget {
  content: string;
  link: string;
}
export interface adminDashboard {
  id: string;
  date: string;
  bookingTime: string;
  provider: string;
  user: string;
  service: string;
  amount: string;
  status: string;
  img1: string;
  img2: string;
  img3: string;
}
export interface topServices {
  id: string;
  service: string;
  category: string;
  amount: string;
  img: string;
}
export interface topProviders {
  id: string;
  providerName: string;
  email: string;
  phone: string;
  img: string;
}

export interface serviceSection {
  content: string;
  saloons: string;
  img1: string;
  img2: string;
}
export interface featuredStylists {
  img: string;
  name: string;
  bookings: string;
}
export interface reviews {
  img: string;
  name: string;
  country: string;
}
export interface latestSlider {
  span: string;
  date: string;
  img: string;
  para: string;
  content: string;
}

export interface pricingPlan {
  img: string;
  heading: string;
  products: string;
}
export interface professionals {
  name: string;
  experience: string;
  img: string;
}
export interface blog {
  name: string;
  img1: string;
  img2: string;
  title: string;
  content: string;
  heading: string;
}
export interface popularSection {
  heading: string;
  title: string;
  country: string;
  price1: string;
  price2: string;
  rating: string;
  rate: string;
  img1: string;
  img2: string;
  like: boolean;
}

export interface header {
  tittle: string;
  base?: string;
  base2?: string;
  base3?: string;
  base4?: string;
  showAsTab: boolean;
  separateRoute: boolean;
  routes?: string;
  menu: menu[];
}
export interface menu {
  menuValue: string;
  img?: string;
  routes?: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  page?: string;
  last?: string;
  base?: string;
  subMenus: subMenus[];
}
export interface subMenus {
  menuValue: string;
  routes: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
}
export interface providersSidebar {
  menu: providerMenu[];
}
export interface providerMenu {
  menuValue: string;
  route: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  icon: string;
}
export interface url {
  url: string;
}
export interface adminSidebar {
  tittle: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: adminMenu[];
}
export interface adminMenu {
  menuValue: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  route?: string;
  icon: string;
  subMenus?: adminSubMenus[];
  base ?: string;
}
export interface adminSubMenus {
  menuValue?: string;
  route?: string;
}
