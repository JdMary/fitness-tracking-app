import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { servicesList } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-provider-services-list',
  templateUrl: './provider-services-list.component.html',
  styleUrls: ['./provider-services-list.component.css']
})
export class ProviderServicesListComponent {
  public routes = routes;
  public selectedValue = '';
  public servicesList: servicesList[] = [];

  selectedList: data[] = [
    {value: 'A - Z'},
    {value: 'Z - A'},
  ];
  constructor(private data:DataService){
    this.servicesList = this.data.servicesList;
  }
}
