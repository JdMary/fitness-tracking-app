import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent {
  public routes = routes;
  public selectedValue = '';
  selectedList: data[] = [
    {value: 'Select Category'},
    {value: 'Category 1'},
    {value: 'Category 2'},
    {value: 'Completed'},
    {value: 'Cancelled'},
  ];

}
