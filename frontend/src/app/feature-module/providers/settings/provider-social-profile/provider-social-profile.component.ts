import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-provider-social-profile',
  templateUrl: './provider-social-profile.component.html',
  styleUrls: ['./provider-social-profile.component.css'],
})
export class ProviderSocialProfileComponent {
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';

  selectedList1: data[] = [{ value: 'Facebook' }, { value: 'Instagram' }];
  selectedList2: data[] = [{ value: 'www.facebook.com' }, { value: 'www.instagram.com' }];
  selectedList3: data[] = [{ value: 'Youtube' }, { value: 'facebook' }];
  selectedList4: data[] = [{ value: 'Twitter' }, { value: 'facebook' }];
  selectedList5: data[] = [{ value: 'Linkedin' }, { value: 'facebook' }];
}
