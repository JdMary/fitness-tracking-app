import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent {
  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [
    {value: 'Select State'},
    {value: 'US'},
    {value: 'London'}
  ];
  selectedList2: data[] = [
    {value: 'Published'},
    {value: 'Unpublished'},
  ];
}
