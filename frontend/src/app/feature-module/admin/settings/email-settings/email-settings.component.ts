import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.css']
})
export class EmailSettingsComponent {
  public routes = routes;
  public selectedValue = '';

  selectedList: data[] = [
    {value: 'USD'},
    {value: 'INR'},
  ];
}
