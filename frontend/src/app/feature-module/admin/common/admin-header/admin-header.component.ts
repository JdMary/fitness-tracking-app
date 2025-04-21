import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
public routes = routes;
elem=document.documentElement
public miniSidebar = false;

fullscreen() {
  if(!document.fullscreenElement) {
    this.elem.requestFullscreen();
  }
  else {
    document.exitFullscreen();
  }
}

constructor(public router: Router,private sideBar: SideBarService) {
  this.sideBar.toggleSideBar.subscribe((res: string) => {
    if (res == 'true') {
      this.miniSidebar = true;
    } else {
      this.miniSidebar = false;
    }
  });
}

public toggleSideBar(): void {
  this.sideBar.switchAdminSideMenuPosition();
}
public toggleAdminMobileSideBar(): void {
  this.sideBar.switchAdminMobileSideBarPosition();
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
