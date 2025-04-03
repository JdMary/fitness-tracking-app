import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  public selectedValue = '';
  public passwordClass1 = false;
  public passwordClass2 = false;

  selectedList: data[] = [
    {value: 'Admin'},
    {value: 'Super Admin'},
  ];

  togglePassword1() {
    this.passwordClass1 = !this.passwordClass1;
  }
  togglePassword2() {
    this.passwordClass2 = !this.passwordClass2;
  }
}
