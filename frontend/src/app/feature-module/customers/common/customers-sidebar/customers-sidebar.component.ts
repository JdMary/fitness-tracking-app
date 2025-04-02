import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-customers-sidebar',
  templateUrl: './customers-sidebar.component.html',
  styleUrls: ['./customers-sidebar.component.css']
})
export class CustomersSidebarComponent {
  public routes = routes;
  base = '';
  page = '';
  last = '';

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
