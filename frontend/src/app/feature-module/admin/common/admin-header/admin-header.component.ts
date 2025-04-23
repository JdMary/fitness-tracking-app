import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';
import { UserService } from 'src/app/feature-module/backend-services/user/user.service';
import { AuthService } from 'src/app/feature-module/backend-services/user/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  public routes = routes;
  elem = document.documentElement;
  public miniSidebar = false;
  public isLoggedIn: boolean = false;
  public userDetails: any = {};
  
  constructor(
    public router: Router,
    private sideBar: SideBarService,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      this.miniSidebar = res === 'true';
    });
  }

  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    this.checkAuthToken();
    if (this.isLoggedIn) {
      const email$: Observable<string> = token ? this.authService.extractUsername(token) : of('');
      console.log('email:', email$);
      email$.subscribe((email) => {
        this.userService.getUserDetailsByEmail(email).subscribe((user) => {
          this.userDetails = user;
        });
      });
    }
  }

  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  private checkAuthToken(): void {
    this.isLoggedIn = !!localStorage.getItem('authToken'); // Check if token exists
  }

  public toggleSideBar(): void {
    this.sideBar.switchAdminSideMenuPosition();
  }

  public toggleAdminMobileSideBar(): void {
    this.sideBar.switchAdminMobileSideBarPosition();
  }

  public logout(): void {
    localStorage.removeItem('authToken'); // Remove token
    this.isLoggedIn = false; // Update state
    this.router.navigate(['/login']); // Navigate to login page
  }
}
