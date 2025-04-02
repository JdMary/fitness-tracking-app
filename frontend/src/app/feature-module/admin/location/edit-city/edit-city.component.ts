import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent {
  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [
    {value: 'Select Country'},
    {value: 'India'},
  ];
  selectedList2: data[] = [
    {value: 'Swains Island'},
    {value: 'Andorra la Vella'},
  ];
}
