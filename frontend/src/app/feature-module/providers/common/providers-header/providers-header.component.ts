import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { adminSidebar } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
  selector: 'app-providers-header',
  templateUrl: './providers-header.component.html',
  styleUrls: ['./providers-header.component.css']
})
export class ProvidersHeaderComponent {
  public routes = routes;
  elem=document.documentElement
  fullscreen() {
    if(!document.fullscreenElement) {
      this.elem.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
  }
  base = '';
  page = '';
  last = '';
  public miniSidebar = false;
  public adminSidebar: Array<adminSidebar> = [];
  public addClass = false;

  public expandSubMenus(menu: { menuValue: string; showSubRoute: boolean; }): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.adminSidebar.map((mainMenus) => {
      mainMenus.menu.map((resMenu: { menuValue: string; showSubRoute: boolean; }) => {
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }

  constructor(
    private data: DataService,
    private router: Router,
    private common: CommonService,
    private sideBar: SideBarService
  ) {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
    this.sideBar.showDark.subscribe((res: string | boolean) => {
      if (res == 'true') {
        this.showDark = true;
      } else {
        this.showDark = false;
      }
    });

    this.adminSidebar = this.data.adminSidebar;
  }
  public toggleAdminSideBar(): void {
    this.sideBar.switchAdminSideMenuPosition();
  }
  public toggleAdminMobileSideBar(): void {
    this.sideBar.switchAdminMobileSideBarPosition();
  }
  public showDark = false;
 
  public themeChange(): void {
    this.sideBar.themeColor();
  }
}
