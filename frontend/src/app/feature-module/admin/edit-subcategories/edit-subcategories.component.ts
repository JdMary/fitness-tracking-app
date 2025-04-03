import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-edit-subcategories',
  templateUrl: './edit-subcategories.component.html',
  styleUrls: ['./edit-subcategories.component.css']
})
export class EditSubcategoriesComponent {
  public selectedValue = '';

  selectedList: data[] = [
    {value: 'Others'},
    {value: 'Category 2'},
    {value: 'Category 3'},
  ];
}
