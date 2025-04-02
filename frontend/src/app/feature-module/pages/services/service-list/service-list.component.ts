import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { serviceList } from 'src/app/shared/models/pages-model';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent {
  public routes = routes;
  public serviceList : serviceList[] = [];
  public selectedValue1 = '';
  public selectedValue2 = '';
  public isClassAdded: boolean[] = [false];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  minValue = 200;
  maxValue = 800;
  options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "$" + value;
        case LabelType.High:
          return "$" + value;
        default:
          return "$" + value;
      }
    }
  };
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
  public isCollapsed = false;

  toggleCollapse() {
    if(this.isCollapsed == true){
      this.isCollapsed = false;
    }
    else{
      this.isCollapsed = true
    }
  }
  selectedList1: data[] = [
      {value: 'All Sub Category'},
      {value: 'Computer'},
      {value: 'Construction'}
  ];
  selectedList2: data[] = [
    {value: 'Price Low to High'},
    {value: 'Price High to Low'},
];
  constructor(public data:DataService){
    this.serviceList = this.data.serviceList;
  }
}
