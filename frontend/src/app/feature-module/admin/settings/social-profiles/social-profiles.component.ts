import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { socialProfiles } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-social-profiles',
  templateUrl: './social-profiles.component.html',
  styleUrls: ['./social-profiles.component.css']
})
export class SocialProfilesComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';

  public socialProfiles : socialProfiles[] = []

  constructor(private data : DataService){
    this.socialProfiles = this.data.socialProfiles
  }
  selectedList1: data[] = [
    {value: 'Facebook'},
    {value: 'Instagram'},
  ];
  selectedList2: data[] = [
    {value: 'Ex. www.facebook.com'},
    {value: 'Ex. www.instagram.com'},
  ];
  selectedList3: data[] = [
    {value: 'Instagram'},
    {value: 'facebook'},
  ];
  selectedList4: data[] = [
    {value: 'Ex. www.instagram.com'},
    {value: 'Ex. www.facebook.com'},
  ];
  selectedList5: data[] = [
    {value: 'Youtube'},
    {value: 'facebook'},
  ];
  selectedList6: data[] = [
    {value: 'Ex. www.youtube.com'},
    {value: 'Ex. www.facebook.com'},
  ];
  selectedList7: data[] = [
    {value: 'Twitter'},
    {value: 'facebook'},
  ];
  selectedList8: data[] = [
    {value: 'Ex. www.twitter.com'},
    {value: 'Ex. www.facebook.com'},
  ];
  selectedList9: data[] = [
    {value: 'Linkedin'},
    {value: 'facebook'},
  ];
  selectedList10: data[] = [
    {value: 'Ex. www.linkedin.com'},
    {value: 'Ex. www.facebook.com'},
  ];

  delete(index: number){
    this.socialProfiles.splice(index,1)
  }
  add(){
    this.socialProfiles.push({content:"Linkedin",url:"Ex. www.linkedin.com"})
  }
}
