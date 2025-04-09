import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { search } from 'src/app/shared/models/pages-model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public routes = routes;
  public search :search[] = [];
  public selectedValue1 = '';
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
  public isClassAdded: boolean[] = [false];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
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
  constructor(public data:DataService){
    this.search = this.data.search;
  }
  public selectedValue = '';

  selectedList1: data[] = [
    {value: 'Price Low to High'},
    {value: 'Price High to Low'},
  ];
  selectedList2: data[] = [
    {value: 'All Sub Category'},
    {value: 'Computer'},
    {value: 'Construction'},
  ];
}
