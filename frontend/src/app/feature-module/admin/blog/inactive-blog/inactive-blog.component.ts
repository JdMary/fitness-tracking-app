import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-inactive-blog',
  templateUrl: './inactive-blog.component.html',
  styleUrls: ['./inactive-blog.component.css']
})
export class InactiveBlogComponent {
  public routes = routes;
  public selectedValue = '';

  selectedList: data[] = [
    {value: 'A - Z'},
    {value: 'Z - A'},
  ];
}
