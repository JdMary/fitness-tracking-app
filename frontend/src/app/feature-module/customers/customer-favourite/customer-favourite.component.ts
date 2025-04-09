import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { customerFavourite } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-customer-favourite',
  templateUrl: './customer-favourite.component.html',
  styleUrls: ['./customer-favourite.component.css']
})
export class CustomerFavouriteComponent {
  public routes = routes;
  public selectedValue = '';
  public customerFavourite : customerFavourite[] = []
  selectedList: data[] = [
    {value: 'A - Z'},
    {value: 'Most helpful'},
  ];

  constructor(public data : DataService){
    this.customerFavourite = this.data.customerFavourite
  }
}
