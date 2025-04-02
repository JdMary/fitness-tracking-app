import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common/common.service';
import { url } from 'src/app/shared/models/pages-model';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent {
  public sideBarActive = false;
  public headerActive = false;

  constructor(private common: CommonService,public router: Router,){
    this.getRoutes(this.router);
  }
  public getRoutes(events: url) {
    const splitVal = events.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
    if (
      events.url.split('/')[2] === 'device-management' ||
      events.url.split('/')[2] === 'provider-change-password' ||
      events.url.split('/')[2] === 'provider-device-management' ||
      events.url.split('/')[2] === 'provider-edit-service' ||
      events.url.split('/')[2] === 'provider-login-activity'
    ) {
      this.sideBarActive = false;
      this.headerActive = false;
    } else {
      this.sideBarActive = true;
      this.headerActive = true;
    }
  }
}
