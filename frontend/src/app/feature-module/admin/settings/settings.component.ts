import { Component } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  public sideBarActive = false;

  constructor(public router: Router) {
    this.getRoutes(this.router);
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
      }
    });
  }
  
  public getRoutes(event: Router | NavigationStart) {
    if (event.url.split('/')[3] === 'social-authentication' || event.url.split('/')[3] === 'language') {
      this.sideBarActive = false;
    } else {
      this.sideBarActive = true;
    }
  }
}
