import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, Event as RouterEvent } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { url } from 'src/app/shared/models/pages-model';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent {
  public sideBarActive = false;
  public headerActive = false;
  public miniSidebar = false;
  public expandMenu = false;
  public mobileSidebar = false;

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor(
    private common: CommonService,
    public router: Router,
    private sideBar: SideBarService,
    private data: DataService
  ) {
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
        this.showLoader();
      }
      if (event instanceof NavigationEnd) {
        this.hideLoader();
        this.mobileSidebar = false;
      }
    });
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });

    this.sideBar.toggleMobileSideBar.subscribe((res: string) => {
      if (res == 'true' || res == 'true') {
        this.mobileSidebar = true;
      } else {
        this.mobileSidebar = false;
      }
    });

    this.sideBar.expandSideBar.subscribe((res) => {
      this.expandMenu = res;
      if (res == false && this.miniSidebar == true) {
        this.data.adminSidebar.map((mainMenus) => {
          mainMenus.menu.map((resMenu) => {
            resMenu.showSubRoute = false;
          });
        });
      }
      if (res == true && this.miniSidebar == true) {
        this.data.adminSidebar.map((mainMenus) => {
          mainMenus.menu.map((resMenu) => {
            const menuValue = sessionStorage.getItem('menuValue');
            if (menuValue && menuValue == resMenu.menuValue) {
              resMenu.showSubRoute = true;
            } else {
              resMenu.showSubRoute = false;
            }
          });
        });
      }
    });
    this.getRoutes(this.router);
  }

  public toggleMobileSideBar(): void {
    this.sideBar.switchAdminMobileSideBarPosition();
  }

  showLoader() {
    this._loading.next(true);
  }

  hideLoader() {
    setTimeout(() => {
      this._loading.next(false);
      window.scrollTo(0, 0);
    }, 1200);
    
  }

  public getRoutes(events: url) {
    const splitVal = events.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
    if (
      events.url.split('/')[2] === 'change-password' ||
      events.url.split('/')[2] === 'device-management' ||
      events.url.split('/')[2] === 'login-activity' ||
      events.url.split('/')[2] === 'google-api' ||
      events.url.split('/')[2] === 'facebook-api' ||
      events.url.split('/')[2] === 'php-mail' ||
      events.url.split('/')[2] === 'nexmo' ||
      events.url.split('/')[2] === 'aws-storage' ||
      events.url.split('/')[3] === 'paypal' ||
      events.url.split('/')[2] === 'signin' ||
      events.url.split('/')[2] === 'forget-password' ||
      events.url.split('/')[2] === 'smtp' ||
      events.url.split('/')[2] === 'wallet-history'
    ) {
      this.sideBarActive = false;
      this.headerActive = false;
    } else {
      this.sideBarActive = true;
      this.headerActive = true;
    }
  }
}
