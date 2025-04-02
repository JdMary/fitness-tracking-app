import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { Options } from '@angular-slider/ngx-slider';
import { listingListSidebar } from 'src/app/shared/models/listing-list-sidebar.model';

@Component({
  selector: 'app-listing-list-sidebar',
  templateUrl: './listing-list-sidebar.component.html',
  styleUrls: ['./listing-list-sidebar.component.css'],
})
export class ListingListSidebarComponent {
  public routes = routes;
  public listsidebar: listingListSidebar[] = [];
  slidevalue = 55;
  options: Options = {
    floor: 0,
    ceil: 100,
  };
  constructor(private Dataservice: DataService) {
    this.listsidebar = this.Dataservice.listsidebarList;
  }
}
