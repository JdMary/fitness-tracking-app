import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-add-payout',
  templateUrl: './add-payout.component.html',
  styleUrls: ['./add-payout.component.css']
})
export class AddPayoutComponent {
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';

  selectedList1: data[] = [
    {value: 'Select any Provider'},
    {value: 'Provider 1'},
    {value: 'Provider 2'},
    {value: 'Provider 3'},
  ];
  selectedList2: data[] = [
    {value: 'Select any Payment'},
    {value: 'Payment 1'},
    {value: 'Payment 2'},
    {value: 'Payment 3'},
  ];
  selectedList3: data[] = [
    {value: 'Select Status'},
    {value: 'Pending'},
    {value: 'Inprogress'},
    {value: 'Completed'},
    {value: 'Cancelled'},
  ];
}
