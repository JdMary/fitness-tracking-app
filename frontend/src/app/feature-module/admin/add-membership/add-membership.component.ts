import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-add-membership',
  templateUrl: './add-membership.component.html',
  styleUrls: ['./add-membership.component.css']
})
export class AddMembershipComponent {
  public selectedValue = '';

  selectedList: data[] = [
      {value: 'Select Category'},
      {value: 'Category 1'},
      {value: 'Category 2'}
  ];
}
