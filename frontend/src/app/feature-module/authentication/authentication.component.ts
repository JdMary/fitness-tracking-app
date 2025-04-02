import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common/common.service';
import { url } from 'src/app/shared/models/pages-model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
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
      events.url.split('/')[1] === 'change-password'
    ) {
      this.headerActive = false;
    } else {
      this.headerActive = true;
    }
  }
}
