import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-edit-blog-categories',
  templateUrl: './edit-blog-categories.component.html',
  styleUrls: ['./edit-blog-categories.component.css']
})
export class EditBlogCategoriesComponent {
  public selectedValue = '';

  selectedList: data[] = [
      {value: 'Select Language'},
      {value: 'English'},
      {value: 'German'},
  ];
}
