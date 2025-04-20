import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/feature-module/backend-services/user/auth.service';
import { UserService } from 'src/app/feature-module/backend-services/user/user.service';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { routes } from 'src/app/shared/routes/routes';
import { UserDetails } from '../../../../models/user-details';
@Component({
  selector: 'app-customers-sidebar',
  templateUrl: './customers-sidebar.component.html',
  styleUrls: ['./customers-sidebar.component.css']
})
export class CustomersSidebarComponent implements OnInit {
  public routes = routes;
  base = '';
  page = '';
  last = '';
  constructor(public data: DataService, public router: Router, private common : CommonService, private authService: AuthService, private userService: UserService) {
    this.common.base.subscribe((base : string) => {
      this.base = base;
    })
    this.common.page.subscribe((page : string) => {
      this.page = page;
    })
    this.common.last.subscribe((last : string) => {
      this.last = last;
    })
  }
  ngOnInit(): void {
  const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage
  if (token) {
    this.authService.extractUserDetails(token).subscribe((userDetails: UserDetails) => {
      console.log('User Details:', userDetails); // Log the user details to the console
      this.data.user = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        number: userDetails.number, // Added number property
        password: userDetails.password, // Added password property
        role: userDetails.role,
        username: userDetails.username,
        enabled: userDetails.enabled,
        accountNonLocked: userDetails.accountNonLocked,
        accountNonExpired: userDetails.accountNonExpired,
        credentialsNonExpired: userDetails.credentialsNonExpired,
        imageUrl: userDetails.imageUrl,
        imageId: userDetails.imageId,
        orders: userDetails.orders
      };
    });
  }
  }
  public logout(): void {
    localStorage.removeItem('authToken'); // Remove token
    this.router.navigate(['/login']); // Navigate to login page
  }

}
