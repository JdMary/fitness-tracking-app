import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent {
  public selectedValue = '';
  selectedList: data[] = [
    {value: 'English'},
    {value: 'french'},
  ];
}
