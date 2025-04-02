import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../shared/common/common.service';
import { NavigationEnd, NavigationStart, Router, Event as RouterEvent } from '@angular/router';
import * as Aos from 'aos';
import { DataService } from '../shared/data/data.service';
import { SideBarService } from '../shared/side-bar/side-bar.service';
import { SidebarService } from '../shared/side-bar/pages-sidebar.service';
import { url } from '../shared/models/pages-model';

@Component({
  selector: 'app-feature-module',
  templateUrl: './feature-module.component.html',
  styleUrls: ['./feature-module.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureModuleComponent implements OnInit{
  base = '';
  page = '';
  last = '';
  public darkTheme = false;
  showMiniSidebar = false;
  public miniSidebar = false;
  public expandMenu = false;
  public mobileSidebar = false;
  public showDark = false;
  constructor(
    private common: CommonService,
    public router: Router,
    private sideBar: SideBarService,
    private data: DataService,
    private sidebar: SidebarService,
    private elementRef: ElementRef,
    private renderer: Renderer2
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
    router.events.subscribe((event:RouterEvent) => {
      
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
      }
      if (event instanceof NavigationEnd) {
        this.mobileSidebar = false;
        window.scrollTo(0, 0);
      }
      if (event instanceof NavigationEnd) {
        this.showMiniSidebar = false;
      }
    });
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    this.sideBar.showDark.subscribe((res: string | boolean) => {
      if (res == 'true') {
        this.showDark = true;
      } else {
        this.showDark = false;
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
    this.sidebar.toogleSidebar.subscribe((res: string) => {
      if (res == 'true') {
        this.showMiniSidebar = true;
      } else {
        this.showMiniSidebar = false;
      }
    });
    this.sidebar.changeTheme.subscribe((res: string) => {
      if (res == 'Dark') {
        this.darkTheme = true;
        this.renderer.addClass(document.body, 'dark-select');
      } else {
        this.darkTheme = false;
        this.renderer.removeClass(document.body, 'dark-select');
      }
    });
    
    this.getRoutes(this.router);
  }

  public toggleMobileSideBar(): void {
    this.sideBar.switchAdminMobileSideBarPosition();
  }


  getRoutes(events: url) {
    const splitVal = events.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
  }
 
 
 
 
  isHovered = false;

  ngOnInit(): void {
    Aos.init({
      duration: 1500,
      once: true,
    });
    const cursorElement: HTMLElement | null = document.querySelector('.tx-js-cursor');

    window.addEventListener('mousemove', (event: MouseEvent) => {
      if (cursorElement) {
        cursorElement.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    });

    const anchors = document.getElementsByTagName('a');
    Array.from(anchors).forEach((anchor: HTMLElement) => {
      anchor.addEventListener('mouseover', () => {
        this.isHovered = true;
      });
      anchor.addEventListener('mouseout', () => {
        this.isHovered = false;
      });
    });

    if (cursorElement) {
      cursorElement.style.visibility = 'visible';
    }
  }

}
