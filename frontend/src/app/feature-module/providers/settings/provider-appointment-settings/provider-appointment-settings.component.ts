import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-provider-appointment-settings',
  templateUrl: './provider-appointment-settings.component.html',
  styleUrls: ['./provider-appointment-settings.component.css']
})
export class ProviderAppointmentSettingsComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';

selectedList1: data[] = [
    {value: 'Enter Booking Open'},
    {value: '2'},
    {value: '5'},
    {value: '4'},
];
selectedList2: data[] = [
  {value: 'Mins'},
  {value: 'Hours'},
];
}
