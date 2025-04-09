import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { routes } from 'src/app/shared/routes/routes';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { serviceGrid } from 'src/app/shared/models/pages-model';


interface data {
  value: string;
}
@Component({
  selector: 'app-service-grid',
  templateUrl: './service-grid.component.html',
  styleUrls: ['./service-grid.component.css']
})
export class ServiceGridComponent {
  public routes = routes;
  public serviceGrid :serviceGrid[] = [];
  public selectedValue1 = '';
  public selectedValue2 = '';

  minValue = 200;
  maxValue = 800;
  value = 200;
  public isCollapsed = false;
  highValue = 800;
  public isClassAdded: boolean[] = [false];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
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
  selectedList1: data[] = [
      {value: 'All Sub Category'},
      {value: 'Computer'},
      {value: 'Construction'},
    ];
    selectedList2: data[] = [
      {value: 'Price Low to High'},
      {value: 'Price High to Low'},
    ];



  constructor(public data:DataService){
    this.serviceGrid = this.data.serviceGrid;
  }
  toggleCollapse() {
    if(this.isCollapsed == true){
      this.isCollapsed = false;
    }
    else{
      this.isCollapsed = true
    }
  }

}
