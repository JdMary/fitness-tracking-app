import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [
    {value: 'Select Services'},
    {value: 'Car Repair'},
    {value: 'House Cleaning'},
  ];
  selectedList2: data[] = [
    {value: 'Fixed'},
    {value: 'Percentage'},
  ];

}
