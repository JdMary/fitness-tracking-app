import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-add-subcategories',
  templateUrl: './add-subcategories.component.html',
  styleUrls: ['./add-subcategories.component.css']
})
export class AddSubcategoriesComponent {
  public selectedValue = '';

  selectedList: data[] = [
      {value: 'Select Category'},
      {value: 'Category 1'},
      {value: 'Category 2'},
      {value: 'Category 3'},
  ];
  
}
