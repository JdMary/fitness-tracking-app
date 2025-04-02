import { Component } from '@angular/core';
export interface Fruit {
  name: string;
}
interface data {
  value: string;
}
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
@Component({
  selector: 'app-provider-accounts-settings',
  templateUrl: './provider-accounts-settings.component.html',
  styleUrl: './provider-accounts-settings.component.css'
})
export class ProviderAccountsSettingsComponent {
  public selectedValue1 = '';
  public selectedValue2 = '';
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'English'}, {name: 'French'}];
  
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


add(event: MatChipInputEvent): void {
  const value = (event.value || '').trim();

  // Add our fruit
  if (value) {
    this.fruits.push({name: value});
  }

  // Clear the input value
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

  // Remove fruit if it no longer has a name
  if (!value) {
    this.remove(fruit);
    return;
  }

  // Edit existing fruit
  const index = this.fruits.indexOf(fruit);
  if (index >= 0) {
    this.fruits[index].name = value;
  }
}
}
