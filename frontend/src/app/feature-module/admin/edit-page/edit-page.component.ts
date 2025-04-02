import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent {
  public selectedValue = '';

  selectedList: data[] = [
    {value: 'English'},
    {value: 'French'},
  ];
}
