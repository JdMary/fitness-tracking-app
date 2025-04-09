import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-pending-blog',
  templateUrl: './pending-blog.component.html',
  styleUrls: ['./pending-blog.component.css']
})
export class PendingBlogComponent {
  public routes = routes;
  public selectedValue = '';

  selectedList: data[] = [
    {value: 'A - Z'},
    {value: 'Z - A'},
  ];
}
