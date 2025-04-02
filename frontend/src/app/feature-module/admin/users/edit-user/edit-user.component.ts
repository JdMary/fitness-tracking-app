import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  public selectedValue = '';
  public passwordClass1 = false;
  public passwordClass2 = false;

  togglePassword1() {
    this.passwordClass1 = !this.passwordClass1;
  }
  togglePassword2() {
    this.passwordClass2 = !this.passwordClass2;
  }
  selectedList: data[] = [
    {value: 'Admin'},
    {value: 'Super Admin'},
  ];
}
