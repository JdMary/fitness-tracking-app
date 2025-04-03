import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-curreny-settings',
  templateUrl: './curreny-settings.component.html',
  styleUrls: ['./curreny-settings.component.css']
})
export class CurrenySettingsComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';

  selectedList1: data[] = [
    {value: 'US Dollar'},
    {value: 'INR'},
  ];
  selectedList2: data[] = [
    {value: '1,234,567.89'},
    {value: '1,244,557.89'},
  ];
  selectedList3: data[] = [
    {value: 'Automatic'},
    {value: 'Manual'},
  ];
  selectedList4: data[] = [
    {value: 'Openexchangerates.org'},
    {value: 'Closeexchangerates.org'},
  ];
}
