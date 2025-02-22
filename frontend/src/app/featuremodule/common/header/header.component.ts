import { Component } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { routes } from 'src/app/core/helpers/routes/routes';
import { SidebarService } from 'src/app/service/sidebar.service';
import { header, url } from 'src/app/shared/models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public routes = routes;
  base = '';
  page = '';
  last = '';

  public nav = false;
  header: header[] = [];

  constructor(
    private data: DataService,
    private router: Router,
    private sidebarService: SidebarService
  ) {
    this.header = this.data.header;
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.getroutes(event);
      }
    });
    this.getroutes(this.router);
  }

  private getroutes(route: url): void {
    const splitVal = route.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];

    if (this.base == 'userpages') {
      this.nav = false;
    } else {
      this.nav = true;
    }
  }
  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }
}
