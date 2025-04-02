import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-typography-settings',
  templateUrl: './typography-settings.component.html',
  styleUrls: ['./typography-settings.component.css'],
})
export class TypographySettingsComponent {
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
  public selectedValue6 = '';
  public selectedValue7 = '';
  public selectedValue8 = '';

  selectedList1: data[] = [{ value: 'Circular Std' }, { value: 'ASC' }];
  selectedList2: data[] = [{ value: 'Circular Std' }, { value: 'ASC' }];
  selectedList3: data[] = [{ value: 'Circular Std' }, { value: 'ASC' }];
  selectedList4: data[] = [{ value: 'Circular Std' }, { value: 'ASC' }];
  selectedList5: data[] = [{ value: 'Circular Std' }, { value: 'ASC' }];
  selectedList6: data[] = [{ value: 'Circular Std' }, { value: 'ASC' }];
  selectedList7: data[] = [{ value: 'Circular Std' }, { value: 'ASC' }];
  selectedList8: data[] = [{ value: 'Circular Std' }, { value: 'ASC' }];
}
