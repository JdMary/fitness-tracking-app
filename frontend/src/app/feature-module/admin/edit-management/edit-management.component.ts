import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-edit-management',
  templateUrl: './edit-management.component.html',
  styleUrls: ['./edit-management.component.css']
})
export class EditManagementComponent {
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';


  selectedList1: data[] = [
    {value: 'Language'},
    {value: 'English'},
    {value: 'Spanish'}
];
  selectedList2: data[] = [
      {value: 'Self'},
      {value: 'other'}
  ];
  selectedList3: data[] = [
    {value: 'Self'},
    {value: 'other'}
];
  selectedList4: data[] = [
    {value: 'Self'},
    {value: 'other'}
  ];
}
