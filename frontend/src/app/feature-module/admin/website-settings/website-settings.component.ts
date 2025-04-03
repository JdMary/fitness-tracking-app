import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-website-settings',
  templateUrl: './website-settings.component.html',
  styleUrls: ['./website-settings.component.css']
})
export class WebsiteSettingsComponent {
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
  public selectedValue6 = '';
  public selectedValue7 = '';
  public selectedValue8 = '';

  selectedList1: data[] = [
      {value: 'Search'},
      {value: 'Search view'},
  ];
  selectedList2: data[] = [
    {value: 'Recent Post'},
    {value: 'Post'},
];
selectedList3: data[] = [
  {value: 'Categories'},
  {value: 'Categories 1'},
];
selectedList4: data[] = [
  {value: 'Services'},
  {value: 'Services 1'},
];
selectedList5: data[] = [
  {value: 'Video'},
  {value: 'Image'},
];
selectedList6: data[] = [
  {value: 'Pages'},
  {value: 'Post'},
];
selectedList7: data[] = [
  {value: 'Text'},
  {value: 'Text 1'},
];
selectedList8: data[] = [
  {value: 'Calendar'},
  {value: 'Calendar 1'},
];
}
