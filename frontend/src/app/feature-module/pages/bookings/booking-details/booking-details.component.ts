import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent {
  public routes = routes
  currentRate = 5;
  basicStar:  Array<{ show: boolean }> = [
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
  ];
  halfRatingStar: Array<{ show: boolean; half: boolean }> = [
    { show: true, half: false },
    { show: true, half: false },
    { show: false, half: true },
    { show: false, half: false },
    { show: false, half: false },
  ];
  
  clickBasicStar(item: { show: boolean }, i: number, array: Array<{ show: boolean; half?: boolean }>): void {
    if (!item.show) {
      array.forEach((res, index) => {
        if (index <= i) {
          res.show = true;
        }
      });
    } else {
      array.forEach((res, index) => {
        if (index >= i && index !== 0) {
          res.show = false;
        }
      });
    }
    if (array === this.halfRatingStar) {
      array.forEach((res) => {
        res.half = false;
      });
    }

 
}
}
