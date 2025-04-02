import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-provider-addons',
  templateUrl: './provider-addons.component.html',
  styleUrls: ['./provider-addons.component.css']
})
export class ProviderAddonsComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';

  selectedList1: data[] = [
    {value: '10 Users'},
    {value: '8 Users'},
    {value: '6 Users'},
  ];
  selectedList2: data[] = [
    {value: '10 Appointments'},
    {value: '8 Appointments'},
    {value: '6 Appointments'},
  ];
  selectedList3: data[] = [
    {value: '10 Services'},
    {value: '8 Services'},
    {value: '6 Services'},
  ];
}
