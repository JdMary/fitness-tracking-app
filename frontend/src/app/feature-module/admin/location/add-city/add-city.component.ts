import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent {
  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [
    {value: 'Select Country'},
    {value: 'United State'},
    {value: 'India'},
  ];
  selectedList2: data[] = [
    {value: 'Select State'},
    {value: 'Swains Island'},
    {value: 'Andorra la Vella'},
  ];
}
