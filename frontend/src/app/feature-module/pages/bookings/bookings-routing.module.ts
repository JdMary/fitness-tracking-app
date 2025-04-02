import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings.component';

const routes: Routes = [
  {
    path: '',
    component: BookingsComponent,
    children: [
      {
        path: 'booking',
        loadChildren: () =>
          import('./booking/booking.module').then((m) => m.BookingModule),
      },
      {
        path: 'booking-payment',
        loadChildren: () =>
          import('./booking-payment/booking-payment.module').then(
            (m) => m.BookingPaymentModule
          ),
      },
      {
        path: 'booking-done',
        loadChildren: () =>
          import('./booking-done/booking-done.module').then(
            (m) => m.BookingDoneModule
          ),
      },
      {
        path: 'user-booking',
        loadChildren: () =>
          import('./booking2/booking2.module').then((m) => m.Booking2Module),
      },
      {
        path: 'booking-details',
        loadChildren: () =>
          import('./booking-details/booking-details.module').then(
            (m) => m.BookingDetailsModule
          ),
      },
      {
        path: 'book-service',
        loadChildren: () =>
          import('./book-service/book-service.module').then(
            (m) => m.BookServiceModule
          ),
      },
      {
        path: 'booking-success',
        loadChildren: () =>
          import('./booking-success/booking-success.module').then(
            (m) => m.BookingSuccessModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsRoutingModule {}
