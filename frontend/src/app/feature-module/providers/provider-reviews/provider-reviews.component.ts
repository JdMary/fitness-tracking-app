import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-provider-reviews',
  templateUrl: './provider-reviews.component.html',
  styleUrls: ['./provider-reviews.component.css']
})
export class ProviderReviewsComponent {
  public routes = routes;
  public selectedValue = '';

  selectedList: data[] = [
    {value: 'A - Z'},
    {value: 'Z - A'},
    {value: 'Most helpful'},
  ];
}
