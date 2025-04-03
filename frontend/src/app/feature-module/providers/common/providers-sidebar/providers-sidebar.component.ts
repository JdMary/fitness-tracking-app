import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { providersSidebar } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
  selector: 'app-providers-sidebar',
  templateUrl: './providers-sidebar.component.html',
  styleUrls: ['./providers-sidebar.component.css'],
})
export class ProvidersSidebarComponent {
  public routes = routes;
  base = '';
  page = '';
  last = '';
  public providersSidebar: Array<providersSidebar> = [];
  public modal = false;
  public setting  = '';

  constructor(
    private data: DataService,
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
    this.providersSidebar = this.data.providersSidebar;
  }

  public expandSubMenus(menu: { menuValue: string; showSubRoute: boolean; }): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.providersSidebar.map((mainMenus) => {
      mainMenus.menu.map((resMenu: { menuValue: string; showSubRoute: boolean; }) => {
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sideBar.expandSideBar.next(true);
    } else {
      this.sideBar.expandSideBar.next(false);
    }
  }
  settingsFunc(data:string){
    if(this.setting === data){
      this.setting = ''
    }
    else{
      this.setting = data;
    }
  }
  modalFunc(){
    this.modal = !this.modal
  }
  miniSideBarBlur(position: string) {
    if (position === 'over') {
      this.sideBar.expandSideBar.next(true);
    } else {
      this.sideBar.expandSideBar.next(false);
    }
  }

  miniSideBarFocus(position: string) {
    if (position === 'over') {
      this.sideBar.expandSideBar.next(true);
    } else {
      this.sideBar.expandSideBar.next(false);
    }
  }
}
