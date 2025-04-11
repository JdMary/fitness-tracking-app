import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { header } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
import { SidebarService } from 'src/app/shared/side-bar/pages-sidebar.service';
@Component({
  selector: 'app-home-seven-header',
  templateUrl: './home-seven-header.component.html',
  styleUrls: ['./home-seven-header.component.css'],
})
export class HomeSevenHeaderComponent implements OnInit {
  public routes = routes;
  header: Array<header> = [];
  base = '';
  page = '';
  last = '';

  constructor(
    public data: DataService,
    public router: Router,
    private common: CommonService,
    private sidebarService: SidebarService
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
    this.header = this.data.header;
  }
  ngOnInit(): void {
    this.checkAuthToken();
  }
  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }
  public isLoggedIn: boolean = false;

  

  private checkAuthToken(): void {
    this.isLoggedIn = !!localStorage.getItem('authToken'); // Check if token exists
  }

  public logout(): void {
    localStorage.removeItem('authToken'); // Remove token
    this.isLoggedIn = false; // Update state
    this.router.navigate(['/login']); // Navigate to login page
  }
}
