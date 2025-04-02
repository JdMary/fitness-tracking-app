import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent {
  public selectedValue = '';

  selectedList: data[] = [
    {value: 'Select Country'},
    {value: 'United State'},
    {value: 'India'},
  ];
}
