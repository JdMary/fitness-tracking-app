import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-login-activity',
  templateUrl: './login-activity.component.html',
  styleUrls: ['./login-activity.component.css']
})
export class LoginActivityComponent {
  public routes = routes;
  public selectedValue = '';

  selectedList: data[] = [
    {value: 'A - Z'},
    {value: 'Z - A'},
  ];
}
