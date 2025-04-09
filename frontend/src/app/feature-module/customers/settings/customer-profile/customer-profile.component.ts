import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Fruit } from 'src/app/feature-module/admin/settings/account-settings/account-settings.component';
@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'House Cleaning'}, {name: 'Painting'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.fruits.push({name: value});
    }
    event.chipInput?.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(fruit);
      return;
    }
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
  selectedList1: data[] = [
    {value: 'Select Gender'},
    {value: 'Male'},
    {value: 'Female'},
  ];
  selectedList2: data[] = [
    {value: 'Choose Currency'},
    {value: 'Eur'},
    {value: 'Aud'},
  ];
}
