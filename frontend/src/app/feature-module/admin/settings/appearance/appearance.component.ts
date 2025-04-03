import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.css']
})
export class AppearanceComponent {
  public routes = routes;

  public selectedValue = '';

  selectedList: data[] = [
    {value: 'Roboto'},
    {value: 'Poppins'},
  ];
}
