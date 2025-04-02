import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common/common.service';
import { url } from 'src/app/shared/models/pages-model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  public footerActive = false;
  public headerActive = false;


  constructor(public router: Router,private common: CommonService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
  }

  public getRoutes(events: url) {
    const splitVal = events.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
    if (
      events.url.split('/')[2] === 'booking' ||
      events.url.split('/')[2] === 'booking-payment' ||
      events.url.split('/')[2] === 'booking-done' ||
      events.url.split('/')[1] === 'coming-soon' ||
      events.url.split('/')[1] === 'login-activity' ||
      events.url.split('/')[1] === 'maintenance' ||
      events.url.split('/')[1] === 'session-expired' ||
      events.url.split('/')[1] === 'installer' ||
      events.url.split('/')[1] == 'home'
    ) {
      this.footerActive = false;
      this.headerActive = false;
    } else {
      this.footerActive = true;
      this.headerActive = true;
    }
  }

}
