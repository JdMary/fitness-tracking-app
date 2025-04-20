import { Component } from '@angular/core';
import { NavigationEnd, Router, Event as RouterEvent } from '@angular/router';
import { CommonService } from 'src/app/shared/common/common.service';
import { url } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  public routes = routes;
}
