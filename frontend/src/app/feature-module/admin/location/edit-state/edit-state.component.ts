import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-edit-state',
  templateUrl: './edit-state.component.html',
  styleUrls: ['./edit-state.component.css']
})
export class EditStateComponent {
  public selectedValue = '';
  selectedList: data[] = [
    {value: 'United State'},
    {value: 'India'},
  ];
}
