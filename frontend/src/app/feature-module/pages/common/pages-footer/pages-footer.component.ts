import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-pages-footer',
  templateUrl: './pages-footer.component.html',
  styleUrls: ['./pages-footer.component.css']
})
export class PagesFooterComponent {
  public routes = routes;
  base = '';
  page = '';
  last = '';
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';

  selectedList1: data[] = [
    { value: 'English' },
    { value: 'France' },
    { value: 'Spanish' },
  ];
  selectedList2: data[] = [
    { value: 'US Dollars' },
    { value: 'INR' },
    { value: 'Kuwait' },
  ];

  constructor(public data: DataService, public router: Router, private common : CommonService) {
    this.common.base.subscribe((base : string) => {
      this.base = base;
    })
    this.common.page.subscribe((page : string) => {
      this.page = page;
    })
    this.common.last.subscribe((last : string) => {
      this.last = last;
    })
  }
}
