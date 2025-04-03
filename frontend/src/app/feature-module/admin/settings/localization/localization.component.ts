import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

interface data {
  value: string;
}
@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.css']
})
export class LocalizationComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
  public selectedValue6 = '';

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl1 = new FormControl('');
  fruitCtrl2 = new FormControl('');

  filteredFruits1: Observable<string[]>;
  filteredFruits2: Observable<string[]>;

  fruits1: string[] = ['USD','Rupees'];
  allFruits1: string[] = ['USD', 'Rupees', 'QWD'];

  fruits2: string[] = ['USD','Rupees'];
  allFruits2: string[] = ['USD', 'Rupees', 'QWD'];

  @ViewChild('fruitInput1') fruitInput1!: ElementRef<HTMLInputElement>;
  @ViewChild('fruitInput2') fruitInput2!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredFruits1 = this.fruitCtrl1.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter1(fruit) : this.allFruits1.slice())),
    );
    this.filteredFruits2 = this.fruitCtrl2.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter2(fruit) : this.allFruits2.slice())),
    );
  }

  add1(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.fruits1.push(value);
    }
    event.chipInput?.clear();
    this.fruitCtrl1.setValue(null);
  }
  add2(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.fruits2.push(value);
    }
    event.chipInput?.clear();
    this.fruitCtrl2.setValue(null);
  }
  remove1(fruit: string): void {
    const index = this.fruits1.indexOf(fruit);
    if (index >= 0) {
      this.fruits1.splice(index, 1);
    }
  }
  remove2(fruit: string): void {
    const index = this.fruits2.indexOf(fruit);
    if (index >= 0) {
      this.fruits2.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits1.push(event.option.viewValue);
    this.fruits2.push(event.option.viewValue);
    this.fruitInput1.nativeElement.value = '';
    this.fruitInput2.nativeElement.value = '';

    this.fruitCtrl1.setValue(null);
    this.fruitCtrl2.setValue(null);

  }

  private _filter1(value: string): string[] {
    const filterValue1 = value.toLowerCase();

    return this.allFruits1.filter(fruit => fruit.toLowerCase().includes(filterValue1));
  }
  private _filter2(value: string): string[] {
    const filterValue2 = value.toLowerCase();

    return this.allFruits2.filter(fruit => fruit.toLowerCase().includes(filterValue2));
  }
  selectedList1: data[] = [
    {value: '(UTC+09:00) Tokyo'},
    {value: '(UTC+11:00) INR'},
  ];
  selectedList2: data[] = [
    {value: '30 Sep 2022'},
    {value: 'Jun 01 2022'},
    {value: '2022 01 Jun'},
  ];
  selectedList3: data[] = [
    {value: '12:00PM'},
    {value: '01:00PM'},
  ];
  selectedList4: data[] = [
    {value: 'USD'},
    {value: 'INR'},
  ];
  selectedList6: data[] = [
    {value: 'USD'},
    {value: 'Rupees'},
    {value: 'QWD'},
  ];
  selectedList7: data[] = [
    {value: 'English'},
    {value: 'Chinese'},
  ];
  selectedList8: data[] = [
    {value: 'Allow all countries'},
    {value: 'USA'},
  ];
}
