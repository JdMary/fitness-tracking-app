import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-payment-settings',
  templateUrl: './payment-settings.component.html',
  styleUrls: ['./payment-settings.component.css']
})
export class PaymentSettingsComponent {
  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [
      {value: 'Select Payment Mode'},
      {value: 'Bank Transfer'},
      {value: 'UPI'},
  ];
  selectedList2: data[] = [
    {value: 'Select Payment Mode'},
    {value: 'Transaction'},
];
}
