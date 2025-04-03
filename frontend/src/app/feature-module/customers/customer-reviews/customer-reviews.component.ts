import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css']
})
export class CustomerReviewsComponent {
  public routes = routes;
  public selectedValue = '';

  selectedList: data[] = [
    {value: 'Most helpful'},
    {value: 'Recent Items'},
  ];
}
