import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-add-blog-categories',
  templateUrl: './add-blog-categories.component.html',
  styleUrls: ['./add-blog-categories.component.css'],
})
export class AddBlogCategoriesComponent {
  public selectedValue = '';

  selectedList: data[] = [{ value: 'Select Language' }, { value: 'English' }, { value: 'German' }];
}
