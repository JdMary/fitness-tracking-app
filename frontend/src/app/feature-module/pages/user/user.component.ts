import { Component } from '@angular/core';
import { NavigationEnd, Router, Event as RouterEvent } from '@angular/router';
import { CommonService } from 'src/app/shared/common/common.service';
import { url } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-pages',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public routes = routes;
  public sideBarActive = false;
  base = '';
  page = '';
  last = '';
  breadcrumb = '';
  constructor(public router: Router,private common: CommonService) {

    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
      this.breadcrumb = this.splitAndCapitalize(page);
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
    this.getRoutes(this.router);
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
  }
  splitAndCapitalize(str: string): string {
    const parts = str.split('-');

    if (parts.length > 1) {
      // Return the second part with the first letter capitalized
      return parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
    }

    // If no '-' is found, return the original string
    return str;
  }
  public getRoutes(event: url) {
    if (
      event.url.split('/')[2] === 'customer-chat' ||
      event.url.split('/')[2] === 'invoice' ||
      event.url.split('/')[2] === 'orders' ||
      event.url.split('/')[2] === 'notification'
    ) {
      this.sideBarActive = false;
    } else {
      this.sideBarActive = true;
    }
  }

}
