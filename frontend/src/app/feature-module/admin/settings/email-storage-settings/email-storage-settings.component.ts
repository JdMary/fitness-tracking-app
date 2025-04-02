import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-email-storage-settings',
  templateUrl: './email-storage-settings.component.html',
  styleUrls: ['./email-storage-settings.component.css']
})
export class EmailStorageSettingsComponent {
  public routes = routes;

  public selectedValue = '';

  selectedList: data[] = [
    {value: 'USD'},
    {value: 'INR'},
  ];
}
