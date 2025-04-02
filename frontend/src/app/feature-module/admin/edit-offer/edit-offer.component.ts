import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent {
  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [
      {value: 'Computer Repair'},
      {value: 'House Cleaning'},
  ];
  selectedList2: data[] = [
    {value: 'John Smith'},
    {value: 'Johnny'},
];
}
